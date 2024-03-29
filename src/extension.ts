import * as vscode from "vscode";
import api from "./api";
import { templateByLanguage, getFileExtensionFromLanguage } from "./templates";
import getLanguageQuickPick from "./utils/getLanguageQuickPick";

import type { Story } from "./types";

export function activate(context: vscode.ExtensionContext) {
  let startCommand = vscode.commands.registerCommand(
    "vschn.start",
    async () => {
      // Determine the language to use for the template
      // Either use the default language from settings.json or ask via quick pick
      let defaultLanguage = vscode.workspace
        .getConfiguration("vschn")
        ?.get("defaultLanguage") as string;
      let language = defaultLanguage || (await getLanguageQuickPick());
      if (!language) {
        return;
      }

      // Get the top 500 top story id's from the api
      const topFiveHundredStoryIds = await api.getTopFiveHundredStoryIds();
      if (!topFiveHundredStoryIds) {
        return;
      }

      // Filter it down to the top 30 (default displayed on the site)
      const topThirtyStories = topFiveHundredStoryIds.slice(0, 30);
      const stories = (await api.getStoriesByIds(topThirtyStories)).filter(
        (story) => story?.id
      ) as Story[];

      const templatedStories = templateByLanguage(language, stories);
      if (!templatedStories) {
        return;
      }

      const myScheme = "vschn";
      const myProvider = new (class
        implements vscode.TextDocumentContentProvider
      {
        onDidChangeEmitter = new vscode.EventEmitter<vscode.Uri>();
        onDidChange = this.onDidChangeEmitter.event;

        provideTextDocumentContent(): string {
          return templatedStories;
        }
      })();
      context.subscriptions.push(
        vscode.workspace.registerTextDocumentContentProvider(
          myScheme,
          myProvider
        )
      );

      const uri = vscode.Uri.parse(
        "vschn:" + `vschn.${getFileExtensionFromLanguage(language)}`
      );
      const doc = await vscode.workspace.openTextDocument(uri); // calls back into the provider
      await vscode.window.showTextDocument(doc, { preview: false });
    }
  );

  context.subscriptions.push(startCommand);
}

export function deactivate() {}

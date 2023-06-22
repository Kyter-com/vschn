import * as vscode from "vscode";
import api from "./api";

export function activate(context: vscode.ExtensionContext) {
  let startCommand = vscode.commands.registerCommand(
    "vschn.start",
    async () => {
      // Ask the user which coding language they want to view the results in
      let language = vscode.window.showQuickPick(["JavaScript", "TypeScript"], {
        title: "Select a language",
        placeHolder: "Select a language",
      });

      // Get the top 500 top story id's from the api
      const topFiveHundredStoryIds = await api.getTopFiveHundredStoryIds();
      if (!topFiveHundredStoryIds) {
        // TODO: Send a VSCode error popup
        return;
      }

      // Filter it down to the top 30 (default displayed on the site)
      const topThirtyStories = topFiveHundredStoryIds.slice(0, 30);
      // TODO: Add loading spinner
      const stories = await api.getStoriesByIds(topThirtyStories);
    }
  );

  context.subscriptions.push(startCommand);
}

export function deactivate() {}

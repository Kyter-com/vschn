import * as vscode from "vscode";
import api from "./api";
import templateByLanguage from "./templates";

export function activate(context: vscode.ExtensionContext) {
  let startCommand = vscode.commands.registerCommand(
    "vschn.start",
    async () => {
      // Ask the user which coding language they want to view the results in
      let language = await vscode.window.showQuickPick(["HTML", "TypeScript"], {
        title: "Select a language",
        placeHolder: "Select a language",
      });
      if (!language) {
        // TODO: Send a VSCode error popup
        return;
      }

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
      console.log("stories", stories);

      const templatedStories = templateByLanguage(language, stories);
      console.log("templatedStories", templatedStories);
    }
  );

  context.subscriptions.push(startCommand);
}

export function deactivate() {}

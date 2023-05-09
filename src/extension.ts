import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  console.log("vschn activated");

  const command = vscode.commands.registerCommand("vschn.start", async () => {
    const storyChoice = await vscode.window.showQuickPick(["Hot"], {
      placeHolder: "Story Type",
      title: "Choose which type of story you want to view",
    });

    const languageChoice = await vscode.window.showQuickPick(
      ["HTML", "TypeScript"],
      {
        placeHolder: "Language",
        title: "Choose which language you want to view",
      }
    );

    console.log("storyChoice", storyChoice);
    console.log("languageChoice", languageChoice);
  });

  context.subscriptions.push(command);
}

export function deactivate() {}

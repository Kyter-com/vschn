import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  let startCommand = vscode.commands.registerCommand("vschn.start", () => {
    // Ask the user which coding language they want to view the results in
    let language = vscode.window.showQuickPick(["JavaScript", "TypeScript"], {
      title: "Select a language",
      placeHolder: "Select a language",
    });
  });

  context.subscriptions.push(startCommand);
}

export function deactivate() {}

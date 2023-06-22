import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  let startCommand = vscode.commands.registerCommand("vschn.start", () => {
    vscode.window.showInformationMessage("Started vschn");
  });

  context.subscriptions.push(startCommand);
}

export function deactivate() {}

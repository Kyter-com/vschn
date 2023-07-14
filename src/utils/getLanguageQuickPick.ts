import * as vscode from "vscode";

const getLanguageQuickPick = async () => {
  return await vscode.window.showQuickPick(["HTML", "TypeScript"], {
    title: "Select a language",
    placeHolder: "Select a language",
  });
};

export default getLanguageQuickPick;

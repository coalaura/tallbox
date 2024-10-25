import vscode from 'vscode';

async function sort(desc = false) {
    const editor = vscode.window.activeTextEditor,
        document = editor ? editor.document : null,
        selection = editor.selection;

    if (!document) return;

    const range = selection.isEmpty ? new vscode.Range(0, 0, document.lineCount, 0) : selection;

    const lines = document.getText(range).trim().split('\n');

    lines.sort();

    if (desc) {
        lines.reverse();
    }

    const edit = new vscode.WorkspaceEdit();

    edit.replace(document.uri, range, lines.join('\n'));

    await vscode.workspace.applyEdit(edit);
}

export function registerSortCommands(context) {
    vscode.commands.registerCommand('tallbox.sort', () => {
        sort(false);
    }, null, context.subscriptions);
}
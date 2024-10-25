import { registerSortCommands } from './commands_sort.js';

let activated = false;

/**
 * @param {vscode.ExtensionContext} context
 */
export function activate(context) {
	if (activated) return;

	activated = true;

	registerSortCommands(context);
}

export function deactivate() { }

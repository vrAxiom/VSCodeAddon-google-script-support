import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('Google Apps Script syntax support is now active');
	
	// Register commands
	const disposable = vscode.commands.registerCommand('google-script-support.enableIcons', () => {
		vscode.workspace.getConfiguration().update('workbench.iconTheme', 'google-apps-script-icons', vscode.ConfigurationTarget.Global);
		vscode.window.showInformationMessage('Google Apps Script icons enabled!');
	});
	
	context.subscriptions.push(disposable);
	
	// Automatically enable the icon theme when the extension is activated
	vscode.workspace.getConfiguration().update('workbench.iconTheme', 'google-apps-script-icons', vscode.ConfigurationTarget.Global);
}

export function deactivate() {}

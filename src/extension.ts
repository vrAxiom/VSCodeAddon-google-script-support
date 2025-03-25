import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

// Get the extension version from package.json
function getExtensionVersion(): string {
	try {
		const packageJsonPath = path.join(__dirname, '..', 'package.json');
		const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
		return packageJson.version;
	} catch (error) {
		console.error('Error reading package.json:', error);
		return 'unknown';
	}
}

export function activate(context: vscode.ExtensionContext) {
	const version = getExtensionVersion();
	console.log(`Google Apps Script syntax support v${version} is now active`);
	
	// Register command to enable custom icons if the user wants them
	const disposable = vscode.commands.registerCommand('google-script-support.enableIcons', () => {
		vscode.workspace.getConfiguration().update('workbench.iconTheme', 'google-apps-script-icons', vscode.ConfigurationTarget.Global);
		vscode.window.showInformationMessage(`Google Apps Script icons enabled! (v${version})`);
	});
	
	context.subscriptions.push(disposable);
	
	// We no longer automatically enable the icon theme to avoid breaking standard icons
	// The user can enable it manually if desired using the command
}

export function deactivate() {}

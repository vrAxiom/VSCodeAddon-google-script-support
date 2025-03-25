const fs = require('fs');
const path = require('path');

// Read the package.json file
const packageJsonPath = path.join(__dirname, '..', 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// Parse the current version
const versionParts = packageJson.version.split('.');
const patch = parseInt(versionParts[2], 10) + 1;
versionParts[2] = patch.toString();

// Update the version
const newVersion = versionParts.join('.');
packageJson.version = newVersion;

// Write the updated package.json
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

console.log(`Version incremented to ${newVersion}`);

const fs = require('fs');
const { createCanvas } = require('canvas');

// Create a 128x128 canvas for the extension icon
const canvas = createCanvas(128, 128);
const ctx = canvas.getContext('2d');

// Draw Google Apps Script icon (blue background with white checkmark)
// Background
ctx.fillStyle = '#1A73E8';
ctx.beginPath();
ctx.roundRect(0, 0, 128, 128, 10);
ctx.fill();

// Darker blue folder shape
ctx.fillStyle = '#185ABC';
ctx.beginPath();
ctx.moveTo(80, 42);
ctx.lineTo(70, 32);
ctx.lineTo(38, 32);
ctx.lineTo(38, 96);
ctx.lineTo(90, 96);
ctx.lineTo(90, 42);
ctx.closePath();
ctx.fill();

// White checkmark
ctx.fillStyle = '#FFFFFF';
ctx.beginPath();
ctx.moveTo(48, 85);
ctx.lineTo(38, 75);
ctx.lineTo(43, 70);
ctx.lineTo(48, 75);
ctx.lineTo(73, 50);
ctx.lineTo(78, 55);
ctx.closePath();
ctx.fill();

// Save the image as PNG
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync('./icons/extension-icon.png', buffer);

console.log('Extension icon created successfully!');

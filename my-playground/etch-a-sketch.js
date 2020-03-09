// Math.random()
// Math.floor(Math.random() * int )
// canvas = document.querySelector('#canvas-id')
// ctx = canvas.getContext('2d')
// ctx.lineJoin
// ctx.lineCap
// ctx.width
// canvas.width
// canvas.height
// ctx.beginPath()
// ctx.lineTo();
// ctx.moveTo();
// ctx.stroke();

console.log('etch-a-sketch');
// Select the elements on the page - canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('.shake');

// Setup canvas for drawing
// make a variable called height and width from the same properties on our canvas.
// const { width } = canvas;
// const { height } = canvas;
const { width, height } = canvas;

// create random and and y;
Math.random() * 100;

console.log(width, height);
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

ctx.beginPath(); // start the drawing
ctx.moveTo(200, 200);
ctx.lineTo(200, 200);
ctx.stroke();
// Write a draw function

// Write a handler for the keys

// clear / shake function

// listen for arrow keys

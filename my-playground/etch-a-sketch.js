// IMPORTANT: animation end {once}
// addEventListner('animationend', function(){});
// ANIMATIONEND + ONCE:TRUE ;
// 3rd argument to addEventlistner, { once: true } , this will call then remove the eventlistener after its done.
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
// addEventListener('keydown', function(){}) ** usually is done in a textinput for forms, but if you need sitewide, add it to the window

console.log('etch-a-sketch');
// Select the elements on the page - canvas, context, shake button & some initial variables
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('.shake');
const moveDistance = 100;
let hue = 0;

// Setup canvas for drawing
// make a variable called height and width from the same properties on our canvas.
// const { width } = canvas;
// const { height } = canvas;
const { width, height } = canvas;

// create random and and y;
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

console.log(width, height);
console.log(x, y);
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = moveDistance;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.beginPath(); // start the drawing
ctx.moveTo(x, y); // Start of the line
ctx.lineTo(x, y); // End of the line
ctx.stroke();

// Write a draw function
function draw({ key }) {
  console.log(key);
  ctx.beginPath();
  ctx.moveTo(x, y);
  switch (key) {
    case 'ArrowUp':
      y -= moveDistance;
      break;
    case 'ArrowDown':
      y += moveDistance;
      break;
    case 'ArrowLeft':
      x -= moveDistance;
      break;
    case 'ArrowRight':
      x += moveDistance;
    default:
      break;
  }
  hue += 12;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.lineTo(x, y);
  ctx.stroke();
}
// Write a handler for the keys
function handleKeys(e) {
  if (e.key.includes('Arrow')) {
    e.preventDefault();
    draw({ key: e.key });
    console.log(e.key);
  }
}
// clear / shake function
function clearCanvas() {
  canvas.classList.add('shake');
  ctx.clearRect(0, 0, width, height);
  canvas.addEventListener(
    'animationend',
    function() {
      canvas.classList.remove('shake');
    },
    { once: true }
  );
}

// listen for arrow keys
// window.addEventListener('keydown', handleKey);
window.addEventListener('keydown', handleKeys);
shakeButton.addEventListener('click', clearCanvas);

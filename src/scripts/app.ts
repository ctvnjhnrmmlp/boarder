import '../styles/styles.scss';

let canvas = document.querySelector('canvas');
let context = canvas?.getContext("2d")
let previousXMouseCoordinate = null;
let previousYMouseCoordinate = null;
let canDraw = false;
let color;
let width;

// Activates to draw when user clicks
window.addEventListener("mousedown", () => canDraw = true);

// Deactivates to draw when user clicks
window.addEventListener("mouseup", () => canDraw = false);

// Draws when user mouse move
window.addEventListener("mousemove", (eventObject) => {
  let currentX = eventObject.clientX;
  let currentY = eventObject.clientY;

  if (previousXMouseCoordinate == null || previousYMouseCoordinate == null || !canDraw) {
    previousXMouseCoordinate = eventObject.clientX;
    previousYMouseCoordinate = eventObject.clientY;

    return;
  }

  context.beginPath();
  context.moveTo(previousXMouseCoordinate, previousYMouseCoordinate);
  context.lineTo(currentX, currentY);
  context.stroke();

  previousXMouseCoordinate = currentX;
  previousYMouseCoordinate = currentY;
});

// Changes pen color to black
document.querySelector('.button__black').addEventListener('click', () => {
  color = '#0C0404';
  context.strokeStyle = color;
  context.fillStyle = color;
  context.lineWidth = width;
});

// Changes pen color to red
document.querySelector('.button__red').addEventListener('click', () => {
  color = '#f01f46';
  context.strokeStyle = color;
  context.fillStyle = color;
  context.lineWidth = width;
});

// Changes pen color to blue
document.querySelector('.button__blue').addEventListener('click', () => {
  color = '#2f6abd';
  context.strokeStyle = color;
  context.fillStyle = color;
  context.lineWidth = width;
});

// Changes pen color to orange
document.querySelector('.button__orange').addEventListener('click', () => {
  color = '#f0a31f';
  context.strokeStyle = color;
  context.fillStyle = color;
  context.lineWidth = width;
});

// Changes pen color to yellow
document.querySelector('.button__yellow').addEventListener('click', () => {
  color = '#f5f242';
  context.strokeStyle = color;
  context.fillStyle = color;
  context.lineWidth = width;
});

// Changes pen color to green
document.querySelector('.button__green').addEventListener('click', () => {
  color = '#42f56c';
  context.strokeStyle = color;
  context.fillStyle = color;
  context.lineWidth = width;
});

// Changes pen color to violet
document.querySelector('.button__violet').addEventListener('click', () => {
  color = '#d142f5';
  context.strokeStyle = color;
  context.fillStyle = color;
  context.lineWidth = width;
});

// Changes pen color to brown
document.querySelector('.button__brown').addEventListener('click', () => {
  color = '#964B00';
  context.strokeStyle = color;
  context.fillStyle = color;
  context.lineWidth = width;
});

// Changes ink size to small
document.querySelector('.button__small-pen').addEventListener('click', () => {
  width = 5;
  context.lineWidth = width;
  context.strokeStyle = color;
  context.fillStyle = color;
});

// Changes ink size to medium
document.querySelector('.button__medium-pen').addEventListener('click', () => {
  width = 10;
  context.lineWidth = width;
  context.strokeStyle = color;
  context.fillStyle = color;
});

// Changes ink size to large
document.querySelector('.button__large-pen').addEventListener('click', () => {
  width = 15;
  context.lineWidth = width;
  context.strokeStyle = color;
  context.fillStyle = color;
});

// Changes ink to eraser
document.querySelector('.button__eraser').addEventListener('click', () => {
  context.strokeStyle = '#FAF9F6';
  context.fillStyle = '#FAF9F6';
  context.lineWidth = 100;
});

// Clears the board
document.querySelector('.button__clear').addEventListener('click', () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
});

// Saves the board
document.querySelector('.button__save').addEventListener('click', () => {
  let imageType = canvas.toDataURL("imag/jpeg");
  let anchor = document.createElement("a");

  anchor.href = imageType;
  anchor.download = "sketch.jpeg";
  anchor.click();
});

// Sets height and width of board according to window size
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// Sets ink size to default
context.lineWidth = 5;

// Enables smooth ink edges
context.imageSmoothingEnabled = true;

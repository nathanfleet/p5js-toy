let prevX = null;
let prevY = null;
let currX = null;
let currY = null;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  if (prevX != null && prevY != null) {
    line(prevX, prevY, currX, currY);
  }
}

function mousePressed() {
  if (prevX == null && prevY == null) {
    prevX = mouseX;
    prevY = mouseY;
  } else {
    prevX = currX;
    prevY = currY;
  }
  currX = mouseX;
  currY = mouseY;
}
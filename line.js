let prevX = null;
let prevY = null;
let currX = null;
let currY = null;
let buffer;

function setup() {
  createCanvas(400, 400);
  buffer = createGraphics(width, height);
}

function draw() {
  background(220);
  image(buffer, 0, 0);
  if (prevX != null && prevY != null) {
    stroke(random(255), random(255), random(255))
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
  buffer.stroke(random(255), random(255), random(255));
  buffer.line(prevX, prevY, currX, currY);
}

// Variable definitions go here
var W = 400;
var H = 400;

function setup() {
  // code in setup runs once at the beginning
  createCanvas(W, H);
}

function draw() {
  // code in draw runs in a loop after setup
  background(51);
  fill(random(255), random(255), random(255));
  ellipse(width/2, height/2, 48, 48);
}

function setup() {
  createCanvas(300, 300);
}

function draw() {
  if(mouseX > width/2) {
    background(0);
    stroke(255);
  } else {
    background(255);
    stroke(0);
  }
  strokeWeight(5);
  line(width/2, 0, width/2, height);
  stroke(255, 0, 0);
  line(mouseX, 0, mouseX, height);
}

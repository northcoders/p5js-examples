function setup() {
  createCanvas(500, 500);
  background(200)
}

function draw() {
  // set fill to white
  fill(255);
  strokeWeight(10);
  // first 2 white rectangles
  rect(-10, -10, 140, 150);
  rect(-10, 150, 140, 200);
  
  // blue
  fill(0, 92, 159);
  rect(-10, 350, 140, 160);
  
  // red
  fill(244, 39, 37);
  rect(130, -10, 500, 360);
  
  // white
  fill(255);
  rect(130, 350, 300, 300);
  rect(430, 350, 100, 75);
  
  // yellow
  fill(240, 220, 110);
  rect(430, 435, 100, 75);
}

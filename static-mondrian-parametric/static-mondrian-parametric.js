var firstCol, firstRow, sw, horBottomDiv, verBottomDiv;

function setup() {
  createCanvas(800, 600);
  background(200);
  
  sw = 10;
}

function draw() {
  firstCol = mouseX;
  firstRow = mouseY;
  
  // set fill to white
  fill(255);
  strokeWeight(sw);
  // first 2 white rectangles
  rect(-sw, -sw, firstCol, firstRow/2);
  rect(-sw, firstRow/2, firstCol, firstRow/2);
  
  // blue
  fill(0, 0, 200);
  rect(-sw, firstRow, firstCol, height);
  
  // red
  fill(200, 0, 0);
  rect(firstCol-sw, -sw, width, firstRow + sw);
  
  // white
  fill(255);
  horBottomDiv = (width - firstCol) * 3 / 4;
  verBottomDiv = (height - firstRow) / 2;
  rect(firstCol-sw, firstRow, horBottomDiv+sw, height);
  rect(firstCol + horBottomDiv, firstRow, width, verBottomDiv);
  
  // yellow
  fill(240, 220, 110);
  rect(firstCol + horBottomDiv, firstRow + verBottomDiv, width, height);
}

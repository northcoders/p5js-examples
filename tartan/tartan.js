function setup() {
  createCanvas(600, 600);
  background(205, 133, 9);
  noLoop();
}

function draw() {
  
   // Horizontal white lines
  for (var f = 10; f < 600; f += 40) {
    stroke(255);
    strokeWeight(1);
    line(0, f, 600, f);
  }
  
  // Veritcal white lines
  for (var f = 10; f < 600; f += 40) {
    stroke(255);
    strokeWeight(1);
    line(f, 0, f, 600);
  }
  
  // Horizontal grey lines
  for (var i = 30; i < 600; i += 40) {
    stroke('rgba(50,50,50,0.75)');
    strokeWeight(10);
    line(0, i, 600, i);
  }
  
  // Vertical grey lines
  for (var d = 30; d < 600; d += 40) {
    stroke('rgba(50,50,50,0.75)');
    strokeWeight(10);
    line(d, 0, d, 600);
  }
  
  // Horizontal blue lines
  for (var s = 30; s < 600; s += 40) {
    stroke(68, 76, 105);
    strokeWeight(3);
    line(s - 10, 0, s - 10, 600);
    line(s + 10, 0, s + 10, 600);
  }
  
}






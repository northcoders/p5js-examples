var backgroundColor = 0;

function setup() {
  createCanvas(800, 500);
  background(backgroundColor);
  noLoop();
}

function draw() {
  for (var s = 25; s < 500; s += 50) {
    for (var i = 25; i < 800; i +=50) {
      var r = random(266);
      var g = random(266);
      var b = random(266);
      fill(r, g, b);
      ellipse(i, s, 50, 50);
    }
  }
}

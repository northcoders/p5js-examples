var circles = [];

function setup() {
  createCanvas(640, 360);
  
  // define overlapping
  var overlapping;
  
  var protection = 0;
  
  while(circles.length < 300) {
    // create circle proposal
    var circle = {
      x: random(width),
      y: random(height),
      r: random(8, 48)
    };
    
    // init overlapping
    overlapping = false;
  
    for(var j = 0; j < circles.length; j++) {
      var other = circles[j];
      var d = dist(circle.x, circle.y, other.x, other.y);
      if(d < circle.r + other.r){
        overlapping = true;
        break;
      }
    }
    if(!overlapping) {
      circles.push(circle);
    }
    protection++;
    if(protection > 10000) break;
  }
  
  fill(255, 0, 150, 100);
  noStroke();
  circles.forEach(function(circle){
    ellipse(circle.x, circle.y, circle.r*2, circle.r*2);
  })
}

function draw() {
  
}

function setup() {
  createCanvas(400, 300);
  slider = createSlider(0, HALF_PI, PI/4, 0.01);
}

function draw() {
  background(51);
  angle = slider.value();
  stroke(255);
  translate(width/2, height);
  branch(100);
}

function branch (len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  var fraction = 2/3;
  if(len > 4) {
    push();
    rotate(angle);
    branch(len*fraction); 
    pop();
    push();
    rotate(-angle);
    branch(len*fraction);
    pop();
  }
  
}

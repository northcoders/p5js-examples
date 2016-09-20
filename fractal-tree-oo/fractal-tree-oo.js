var tree = [];
var leaves = [];
var count = 0;
function setup() {
  createCanvas(400, 300);
  var a = createVector(width/2, height);
  var b = createVector(width/2, height - 100);
  var root = new Branch(a, b);
  tree[0] = root;
}

function draw() {
  background(51);
  tree.forEach(function (branch) {
    branch.show();
    // branch.jitter();
  });
  leaves.forEach(function (leaf) {
    fill(255, 0, 100, 200);
    noStroke();
    ellipse(leaf.x, leaf.y, 8, 8);
    leaf.y += random(0, 2);
  })
}

function mousePressed() {
  for(let i = tree.length-1; i >= 0; i--){
    if(!tree[i].grown){
      tree.push(tree[i].branchA());
      tree.push(tree[i].branchB());
    }
    tree[i].grown = true;
  }
  count++;

  if (count === 6) {
    tree.forEach(function (branch) {
      if(!branch.grown){
        var leaf = branch.end.copy();
        leaves.push(leaf);
      }
    })
  }
}

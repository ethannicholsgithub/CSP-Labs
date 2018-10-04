var balls = [];
var paddle;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  var n = 10;
  loadBalls(n);
}

function draw() {
  background(5, 5, 5, 5)
  for (var i = 0; i < balls.length; i++) {
    balls[i].run();
  }
}

function loadBalls(numBalls) {
  for (var i = 0; i < numBalls; i++) {
    loc = createVector(random(width), random(height));
    vel = createVector(random(-3, 3), random(-3, 3));
    clr = color(random(0, 255), random(0, 255), random(0, 255));
    var b = new Ball(loc, vel, clr);
    balls.push(b);
  }
}

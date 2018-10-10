var balls = [];
var paddle = [];

function setup() {
  //created the canvas
  var cnv = createCanvas(1200, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  //these two lines define how many balls to load
  var n = 50;
  loadBalls(n);
  loadPaddle(1);
}

function draw() {
  //redraws the background with a certain opacity to give that trail as the ball is moving
  background(5, 5, 5, 20)
  //gives the paddle a shape
  for (var i = 0; i < paddle.length; i++) {
    paddle[i].run();
  }
  //calls the run function and checks how many balls were created
  for (var i = 0; i < balls.length; i++) {
    balls[i].run();
  }
}

//defines loadBalls
function loadBalls(numBalls) {
  for (var i = 0; i < numBalls; i++) {
    loc = createVector(random(width), random(300, 0));
    vel = createVector(random(-3, 3), random(-3, 3));
    clr = color(random(0, 255), random(0, 255), random(0, 255));
    var b = new Ball(loc, vel, clr);
    balls.push(b);
  }
}
  function loadPaddle() {
    for (var i = 0; i < 1; i++) {
      loc = createVector(random(width), random(300, 0));
      vel = createVector(random(-3, 3), random(-3, 3));
      clr2 = color(random(0, 255), random(0, 255), random(0, 255));
      var b = new Paddle(loc, vel, clr2);
      paddle.push(b);
  }
}

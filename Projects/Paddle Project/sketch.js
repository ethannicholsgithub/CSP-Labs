let balls = [];
let paddle = [];

function setup() {
  noCursor();
  //created the canvas
  let cnv = createCanvas(1200, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  //these two lines define how many balls to load
  let n = 50;
  loadBalls(n);
  loadPaddle(1);
}

function draw() {
  //redraws the background with a certain opacity to give that trail as the ball is moving
  background(5, 5, 5)
  //gives the paddle a shape
  for (let i = 0; i < paddle.length; i++) {
    paddle[i].run();
  }
  //calls the run function and checks how many balls were created
  for (let i = 0; i < balls.length; i++) {
    balls[i].run();
  }

  checkCollision();
}

  function checkCollision(paddle, balls) {

    for(let ball in balls) {
      if() {
      }
    }
}

//defines loadBalls
function loadBalls(numBalls) {
  for (let i = 0; i < numBalls; i++) {
    loc = createVector(random(width), random(300, 0));
    vel = createVector(random(-3, 3), random(-3, 3));
    clr = color(random(0, 255), random(0, 255), random(0, 255));
    let b = new Ball(loc, vel, clr);
    balls.push(b);
  }
}

  function loadPaddle() {
    for (let i = 0; i < 1; i++) {
      let loc = createVector(random(width), random(300, 0));
      let vel = createVector(random(-3, 3), random(-3, 3));
      let clr2 = color(255, 0, 0);
      let ba = new Paddle(loc, vel, clr2);
      paddle.push(ba);
  }
}

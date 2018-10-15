let balls = [];
let paddle = [];

function setup() {
  // hides mouse
  noCursor();
  //created the canvas
  var cnv = createCanvas(800, 800);
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

  // calls the paddle array
  for (let i = 0; i < paddle.length; i++) {
    paddle[i].run();
  }
  //paddle[0].run();

  // calls the balls array
  for (let i = 0; i < balls.length; i++) {
    balls[i].run();
  }
  checkCollision(paddle, balls);
}

  function checkCollision(paddle, balls) {
    for(let i = 0; i < balls.length; i++) {
      if(balls[i].loc.x > paddle.loc.x && balls[i].loc.x < (paddle.loc.x + w) && balls[i].loc.y > (paddle.loc.y) && balls[i].loc.y < (paddle.loc.y + h)) {
        balls[i].splice();
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

// defines loadPaddle
}

  function loadPaddle(numPaddles) {
    for (let i = 0; i < numPaddles; i++) {
      let loc = createVector(random(width), random(300, 0));
      let vel = createVector(random(-3, 3), random(-3, 3));
      let clr2 = color(255, 0, 0);
      let ba = new Paddle(loc, vel, clr2);
      console.log("paddle created" + loc);
      paddle.push(ba);
  }
}

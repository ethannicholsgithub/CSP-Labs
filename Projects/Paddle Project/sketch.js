var balls = [];
var paddle;
var n = 50;
var score = 0;
var win = false
function setup() {
  // hides mouse
  noCursor();
  //created the canvas
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);

  //these two lines define how many balls to load
  loadBalls(10);
  loadPaddle(n);
}

function draw() {
  //redraws the background with a certain opacity to give that trail as the ball is moving
  background(5, 5, 5)
  // calls the paddle
  paddle.run();
  textSize(32);
  fill(255, 255, 255);
  text(score , 50, 50);
  // calls the balls array
  for (let i = 0; i < balls.length; i++) {
    balls[i].run();
  }

  for(let i = balls.length - 1; i >= 0; i--) {
    if(balls[i].colliding()) {

      if(  balls[i].vel.y < 0){
        balls = [];
        n = n + 10
        loadBalls(n);

      }else{
        balls.splice(i , 1);
        score = score + 265426;
        w = w + 5;
        if(balls.length === 0){

          if(score > 500){
            textSize(32);
            fill(255, 255, 255);
            text("You Win!" , 400, 400);
          }
          if(score < 500) {
            textSize(32);
            fill(255, 255, 255);
            text("Nice job but try to get 500 points" , 400, 350);
          }
          noLoop();
        }
      }
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

function loadPaddle() {
  let loc = createVector(random(width), 400);
  let vel = createVector(random(-3, 3), random(-3, 3));
  let clr2 = color(255, 0, 0);
  paddle = new Paddle(loc, clr2);
}

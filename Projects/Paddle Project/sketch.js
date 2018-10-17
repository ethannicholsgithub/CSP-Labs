  var balls = [];
  var paddle;

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
    // calls the paddle
    paddle.run();

    // calls the balls array
    for (let i = 0; i < balls.length; i++) {
      balls[i].run();
    }
    checkCollision();
  }

    function checkCollision() {
      for(let i = 0; i < balls.length; i++) {
        if(balls[i].loc.x > paddle.loc.x &&
          balls[i].loc.x < (paddle.loc.x + w) &&
          balls[i].loc.y > (paddle.loc.y) &&
          balls[i].loc.y < (paddle.loc.y + h)) {

              balls.splice(i, 1);
              w = w + 5

        }
        if(balls[i].loc.y < (paddle.loc.y + h) && balls.vel.y === 400) {
          noLoop();
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

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
    //calls checkCollision function
    checkCollision();
    //splice out dead balls
    for(let i = balls.length - 1; i >= 0; i--){
      if(balls.alive = false){
          balls[i].splice(i, 1); // deletes ball from array
      }
    }
  }

//function to check if balls ore touching the paddle
    function checkCollision() {
      for(let i = balls.length - 1; i >= 0; i--) {
        balls.alive = true;
        if(balls[i].loc.x > paddle.loc.x &&
           balls[i].loc.x < (paddle.loc.x + w) &&
           balls[i].loc.y > (paddle.loc.y) &&
           balls[i].loc.y < (paddle.loc.y + h)) {

             //check if balls are alive or dead
             balls.alive = false;
              w = w + 5 //when a ball touches the paddle the paddle

        }   
        // if(balls[i].loc.y < (paddle.loc.y + h) && balls[i].vel.y === 400) {
        //   noLoop();
        // }
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

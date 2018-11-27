//sanke variable
var snake;
//snake segments array
var body = [];

var food;

var w = 20;
var speed = 20;

function setup() {
    frameRate(10);
    var cnv = createCanvas(800, 800);
    cnv.position(windowWidth-width)/(2, 30);
    background(20, 20, 20);

    cols = width/w;
    rows = height/w;
    var loc = createVector(random(cols) * w, random(rows) * w);
    food = new Foods(loc);

    cols = width/w;
    rows = height/w;
    var col = color(255, 0, 0)
    var loc = createVector(cols *20, rows * 20);
    var vel = createVector(w, 0);
    snake = new Snake(loc, vel, col);
}

//  The draw function is called @ 30 fps
function draw() {
  background(0, 0, 0);
  snake.run();
  food.run();
  //call the control function
  keyPressed();
  segments();
}

//create segments function to add segments to the Snake
function segments(){
  //calls function eatFood
  eatFood();
}
//create event function where once snake touches food for   F   U   E   L  that returns a true or false
function eatFood(){
  if(snake.loc.x === food.loc.x && sanke.loc.y === food.loc.y){
    null;
  }
}

//create control function so that the player can control the Snake
function keyPressed(){
  //if function for if UPARROW is pressed
  if(keyCode === UP_ARROW){

    snake.vel = createVector(0, -speed);
  }
  //if function for if DOWNARROW is pressed
  if(keyCode === DOWN_ARROW){

    snake.vel = createVector(0, speed);
  }
  //if function for if RIGHTARROW is pressed
  if(keyCode === RIGHT_ARROW){

    snake.vel = createVector(speed, 0);
  }
  //if function for if LEFTARRROW is pressed POGGGGG
  if(keyCode === LEFT_ARROW){

    snake.vel = createVector(-speed, 0);
  }
}

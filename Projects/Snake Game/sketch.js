//sanke array
var snake;
//snake segments array
var w = 2;

function setup() {
    frameRate(10);
    var cnv = createCanvas(800, 800);
    cnv.position(windowWidth-width)/(2, 30);
    background(20, 20, 20);
    cols = width/w;
    rows = height/w;
    var col = color(255, 255, 255);
    var loc = createVector(width/2, height/2);
    var vel = createVector(1, 0);
    snake = new Snake(loc, vel);
}

//  The draw function is called @ 30 fps
function draw() {
  background(0, 0, 0);
  snake.run();
  //call the control function
  keyPressed();
}

//create segments function to add segments to the Snake
function segments(){
  //calls function eatFood
  eatFood();
}
//create event function where once snake touches food for   F   U   E   L  that returns a true or false
function eatFood(){

}


//create control function so that the player can control the Snake
function keyPressed(){
  //if function for if UPARROW is pressed
  if(keyCode === UP_ARROW){
    snake.loc.add(snake.vel);
    snake.vel = createVector(0, -w);
  }
  //if function for if DOWNARROW is pressed
  if(keyCode === DOWN_ARROW){
    snake.loc.add(snake.vel);
    snake.vel = createVector(0, w);
  }
  //if function for if RIGHTARROW is pressed
  if(keyCode === RIGHT_ARROW){
    snake.loc.add(snake.vel);
    snake.vel = createVector(w, 0);
  }
  //if function for if LEFTARRROW is pressed POGGGGG
  if(keyCode === LEFT_ARROW){
    snake.loc.add(snake.vel);
    snake.vel = createVector(-w, 0);
  }
}

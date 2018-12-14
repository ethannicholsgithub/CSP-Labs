//sanke variable
var snake;

var food;

var w = 20;
var speed = 20;

function setup() {
  frameRate(10);
  var cnv = createCanvas(800, 800);
  cnv.position(windowWidth-width)/(2, 30);
  background(20, 20, 20);

  var loc = createVector(width / 2 - Math.floor(Math.random()*16-8)*w, height / 2+Math.floor(Math.random()*12-6)*w);
  var col2 = color(255, 0, 0);
  food = new Foods(loc, col2);

  var headloc = createVector(200, 200);
  var vel = createVector(20, 0);
  var col = color(0, 255, 0);
  snake = new Snake(headloc, vel, col);

  cols = width/w;
  rows = height/w;

}

//  The draw function is called @ 30 fps
function draw() {
  background(0, 0, 0);

  snake.run();
  food.run();

}


function restart(){
  snake.segments = [];
  food.loc = createVector(width / 2 - Math.floor(Math.random()*16-8)*w, height / 2+Math.floor(Math.random()*12-6)*w);
  snake.loc = createVector(200, 200);
}




//create control function so that the player can control the Snake
function keyPressed(){
  //if function for if UPARROW is pressed
  if(keyCode === 38){
    snake.vel = createVector(0, -speed);
  }

  //if function for if DOWNARROW is pressed
  if(keyCode === 40){
    snake.vel = createVector(0, speed);
  }

  //if function for if RIGHTARROW is pressed
  if(keyCode === 39){
    snake.vel = createVector(speed, 0);
  }

  //if function for if LEFTARRROW is pressed POGGGGG
  if(keyCode === 37){
    snake.vel = createVector(-speed, 0);
  }
}

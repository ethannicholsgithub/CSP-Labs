//sanke variable
var snake = [];
//snake segments array

var food = [];

var w = 20;
var speed = 20;

function setup() {
    frameRate(10);
    var cnv = createCanvas(800, 800);
    cnv.position(windowWidth-width)/(2, 30);
    background(20, 20, 20);

    loadFood(1);
    loadSnake(1);

    cols = width/w;
    rows = height/w;
}

//  The draw function is called @ 30 fps
function draw() {
  background(0, 0, 0);

  for(var i = 0; i < snake.length; i++){
    snake[i].run();
  }
  for(var i = 0; i < food.length; i++){
    food.run();
  }

  //call the control function
  keyPressed();
}



//create control function so that the player can control the Snake
function keyPressed(){
  //if function for if UPARROW is pressed
  if(keyCode === 38){
    snake[0].vel = createVector(0, -speed);
  }

  //if function for if DOWNARROW is pressed
  if(keyCode === 40){
    snake[0].vel = createVector(0, speed);
  }

  //if function for if RIGHTARROW is pressed
  if(keyCode === 39){
    snake[0].vel = createVector(speed, 0);
  }

  //if function for if LEFTARRROW is pressed POGGGGG
  if(keyCode === 37){
    snake[0].vel = createVector(-speed, 0);
  }
}

function loadSnake(numSnake) {
  for(var i = 0; i < numSnake; i++)
    var col = color(255, 0, 0)
    var loc = createVector(width / 2, height / 2);
    var vel = createVector(w, 0);
    s = new Snake(loc, vel);
    snake.push(s);
}

function loadFood(numFood) {
  for(var i = 0; i < numFood; i++)
    var loc = createVector(width / 2 - Math.floor(Math.random()*16-8)*w, height / 2+Math.floor(Math.random()*12-6)*w);
    f = new Foods(loc)
    snake.push(f);
}

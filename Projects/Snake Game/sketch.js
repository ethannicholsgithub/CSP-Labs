//sanke variable
var snake;

var food = [];

var body = [];
var numBod = 1

var w = 20;
var speed = 20;

function setup() {
  frameRate(10);
  var cnv = createCanvas(800, 800);
  cnv.position(windowWidth-width)/(2, 30);
  background(20, 20, 20);

  loadFood(1);
  loadSnake();
  loadBody(numBod);

  cols = width/w;
  rows = height/w;
}

//  The draw function is called @ 30 fps
function draw() {
  background(0, 0, 0);

  snake.run();
  for(var i = 0; i < food.length; i++){
    food[i].run();
  }

  for(var i = 0; i < body.length; i++){
    body[i].run();
  }

  collide();
  follow();

}

function loadSnake(){
  var loc = createVector(200, 200);
  var vel = createVector(0, 0);
  snake = new Snake(loc, vel);
}


function loadFood(numFood) {
  for(var i = 0; i < numFood; i++)
  var col2 = color(255, 0, 0);
  var loc = createVector(width / 2 - Math.floor(Math.random()*16-8)*w, height / 2+Math.floor(Math.random()*12-6)*w);
  f = new Foods(loc, col2)
  food.push(f);
}


//create event function where once snake touches food for   F   U   E   L  that returns a true or false
function collide(){
  for(var i = 0; i < food.length; i++){
    var distX = food[i].loc.x - snake.loc.x;
    var distY = food[i].loc.y - snake.loc.y;
    if(distX == 0 && distY == 0){
      food.splice(i, 1);
      numBod = numBod + 1;
      loadFood(1);
    }
  }
}

function loadBody(numBod){
  var loc = createVector(0 , 0);
  b = new Segments(loc)
}

//create segments function to add segments to the Snake
 function follow(){
   for(var i = 0; i < body.length; i++){
     body[i].x = snake.loc.x - w;
     body[i].y = snake.loc.y - w;

     if(body.length >= 2){
       body[i - 1].x = snake.loc.x - w;
       body[i - 1].y = snake.loc.y - w;
     }
   }
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

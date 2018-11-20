//sanke array
var snake = [];
//snake segments array
var w = 20

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);

  //for lood of the Snake
  for(var i = 0; i < snake.length; i++){
    //run the snake function with things inside the array
    snake[i].run();
  }
}

//  The draw function is called @ 30 fps
function draw() {
  //call the control function
  control();
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
function control(){
  //if function for if UPARROW is pressed
  //if function for if DOWNARROW is pressed
  //if function for if RIGHTARROW is pressed
  //if function for if LEFTARRROW is pressed POGGGGG
}

//create function
function createSnake(loc, vel, col){
  //define perameters
  loc = createVector(width / 2 , height / 2);
  vel = createVector(1 , 0);
  col = color(255)
  //create a new snake
  b = new Snake(loc, vel, col);
  //push the snake into the snake array
  snake.push(b);
}

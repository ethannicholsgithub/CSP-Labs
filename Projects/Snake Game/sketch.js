snake = [];
var w = 20

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);

  for(var i = 0; i < snake.length; i++){
    snake[i].run();
  }
}

//  The draw function is called @ 30 fps
function draw() {
}

function createSnake(loc, vel, col){
  loc = createVector(0 , 0);
  vel = createVector(0 , 0);
  col = color(255)
  b = new Snake(loc, vel, col);
  snake.push(b);
}

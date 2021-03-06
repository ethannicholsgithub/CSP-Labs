//Global variables
var b1;
var boids = [];

//creates all boids and canvas to run code
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  b1 = new Boids(createVector(width / 2, height / 2), createVector(mouseX, mouseY), 25, color(0255, 255, 255));
  var n = 100;
  loadBoids(n);

}

//  The draw function is called @ 30 fps
function draw() {
  background(20, 20, 20);
  b1.run();
  for(var i = 0; i < boids.length; i++){
    boids[i].run();
  }
}

function loadBoids(numBoids) {
  for(var i = 0; i < numBoids; i++){
    var loc = createVector(random(width), random(height));
    var vel = createVector(random(-2, 2), random(-2, 2));
    var clr = color(random(0, 255), random(0, 255), random(0, 255));
    var b = new Boids(loc, vel, clr);
    boids.push(b);
  }
}

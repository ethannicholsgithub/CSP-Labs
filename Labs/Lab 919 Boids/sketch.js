
var b1;
var boids = [];

//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  b1 = new Boids(createVector(width / 2, height / 2), createVector(mouseX, mouseY), 25, color(0, 255, 0));
  var n = 50;
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
    var vel = createVector(random(-3, 3), random(-3, 3));
    var clr = color(random(0, 255), random(0, 255), random(0, 255));
    var b = new Boids(loc, vel, clr);
    boids.push(b);
  }
}

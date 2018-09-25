//  Global variables
var boids = [];

// put setup code here
function setup() {

  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20,20,20);
  location = createVector(0, 0);
  color = color(random(255, 0), random(255, 0), random(255, 0));
  loadBoids(50);

}

function draw() {
  background(20, 20, 20, 1);
  for(var i = 0; i < boids.length; i = i + 1){
      boids[i].run();
  }
}

function loadBoids(numBoids){

    for(var i = 0; i < numBoids; i++){

        var loc = createVector(random(width), random(height));
        var vel = createVector(random(-3,3), random(-3,3));
        var radius = 20;
        var col = color(random(255), random(255), random(255));
        var b = new Boid(loc, vel, radius, col);
        boids.push(b);

    }

}

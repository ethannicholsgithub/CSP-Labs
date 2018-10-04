//boid function
function Boids(loc, vel, clr) {
// defining variables
  this.loc = loc;
  this.vel = vel;
  this.clr = clr;
  this.acc = createVector(0, .1);

//runs the whole boids code when function is called
  this.run = function(){
    this.checkEdges();
    this.update();
    this.render();
  }

//repulsion and movement
  this.update = function() {
    var dist = this.loc.dist(vel);
    var steeringForce = p5.Vector.sub(this.loc, b1.loc);
    if(dist = 1){
      steeringForce.normalize();
      steeringForce.mult(0.09);
      this.vel.add(steeringForce);
    }
    this.loc.add(this.vel);
    var mouseLoc = createVector(mouseX + mouseY, mouseY - mouseX);
    b1.loc = p5.Vector.lerp(mouseLoc ,this.loc);
  }

//makes boids bounce off of edges
  this.checkEdges = function(){
    if(this.loc.x < 0) this.vel.x = -this.vel.x;
    if(this.loc.x > width) this.vel.x = -this.vel.x;
    if(this.loc.y < 0) this.vel.y = -this.vel.y;
    if(this.loc.y > width) this.vel.y = -this.vel.y;
  }

// gives shape and color of boids
  this.render = function() {
    fill(this.clr);
    push()
      translate(this.loc.x, this.loc.y);
      rotate(this.loc);
      triangle(-15, 0, 15, 0, 0, -45);
    pop()
  }
}

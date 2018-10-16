// Ball function
function Ball(loc, vel, clr) {

  // letiables for the function
  this.loc = loc; //location
  this.vel = vel; //velocity
  this.clr = clr; //color
  radius = 10;
  this.acc = createVector(0, 0.1)

  // When the run function is called all of the other functions are called and runs
  this.run = function() {
    this.update();
    this.checkEdges();
    this.render();
  }

  // checkEdges function checks if the object has hit a wall and bounces it in the right direction
  this.checkEdges = function() {
    if(this.loc.x < 0) this.vel.x = -this.vel.x;
    if(this.loc.x > width) this.vel.x = -this.vel.x;
    if(this.loc.y < 0) this.vel.y = -this.vel.y;
    if(this.loc.y > width) this.vel.y = -this.vel.y;
  }

  // The update function updates the location / velocity of both the paddle and the objects
  this.update = function() {
    // code makes the paddles fall as if they have gravity
    this.loc.x = this.loc.x + this.vel.x;
    this.loc.y = this.loc.y + this.vel.y;
    this.vel.add(this.acc);
    this.loc.add(this.vel);
  }

  // Gives the object a shape and color
  this.render = function() {
    fill(this.clr);
    push()
      ellipse(this.loc.x, this.loc.y, radius, radius);
    pop()
  }

  
}

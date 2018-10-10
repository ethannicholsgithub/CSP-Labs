
// Ball function
function Ball(loc, vel, clr) {

  // variables for the function
  this.loc = loc; //location
  this.vel = vel; //velocity
  this.clr = clr; //color
  this.acc = createVector(0, 0.1)

  // When the run function is called all of the other functions are called and runs
  this.run = function() {
    this.checkEdges();
    this.render();
    this.update();
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
      translate(this.loc.x, this.loc.y);
      rect(10, 10, 10, 10);
    pop()
  }
}

function Paddle(loc, vel, clr2){

  // variables for the function
  this.loc = loc; //location
  this.vel = vel; //velocity
  this.clr = clr2; //color
  this.acc = createVector(0, 0.1)

  // When the run function is called all of the other functions are called and runs
  this.run = function() {
    this.render();
    this.update();
  }

  // The update function updates the location / velocity of both the paddle and the objects
  this.update = function() {
    // This code has the paddle move along with the mouse
    var mouseLoc = createVector(mouseX, mouseY);
    paddle.loc = p5.Vector.lerp(mouseLoc,this.loc);
    var dist = this.loc.dist(vel);
  }

  // Gives the object a shape and color
  this.render = function() {
    fill(this.clr);
    push()
      translate(this.loc.x, this.loc.y);
      rect(10, 10, 10, 10);
    pop()
  }

}

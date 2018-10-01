

/*
**   Boid constructer function
**   Ethan Nichols
**   Aug 21, 2018
*/
function Boid(loc, vel, col){

  // Instance variables
  this.loc = loc;
  this.vel = vel;
  this.col = col;
  this.acc = createVector(0, 2);

  // This function calls other functions
  this.run = function(){
    this.checkEdges();
    this.update();
    this.render();
  }

  // This function changes the location of the Boid
  // by adding speed to x and
  this.update = function() {
    }

  //checkEdges() reverses speed when the Boid touches an edge
  this.checkEdges = function(){
    if(this.loc.x < 0) this.vel.x = -this.vel.x;
    if(this.loc.x > width) this.vel.x = -this.vel.x;
    if(this.loc.y < 0) this.vel.y = -this.vel.y;
    if(this.loc.y > height) this.vel.y = -this.vel.y;
  }

  // render() draws the Boid at the new location
  this.render = function(){
    fill(this.col);
    triangle(-5, 0, 5, 0, 0, -15);
  }

}

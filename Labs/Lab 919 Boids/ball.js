

/*
**   Ball constructer function
**   Ethan Nichols
**   Aug 21, 2018
*/
function Ball(location, velocity, radius, col){

  // Instance variables
  this.loc = location;
  this.vel = velocity;
  this.rad = radius;
  this.col = col;
  this.acc = createVector(0, .1);

  // This function calls other functions
  this.run = function(){
    this.checkEdges();
    this.update();
    this.render();
  }

  // This function changes the location of the ball
  // by adding speed to x and
  this.update = function() {
    if(this != b1) {
      var d = this.loc.dist(b1.loc)
      if (d > 100) {
        var steeringforce = p5.Vector.sub(b1.loc, this.loc);
        steeringforce.normalize();
        steeringforce.mult(0.05);
        this.vel.add(steeringforce);
      }
      if (d < 50) {
        var steeringforce = p5.Vector.sub(this.loc, b1.loc);
        steeringforce.normalize();
        steeringforce.mult(0.05);
        this.vel.add(steeringforce);
      }
      this.loc.add(this.vel);
    }
  }

  //checkEdges() reverses speed when the ball touches an edge
  this.checkEdges = function(){
    if(this.loc.x < 0) this.vel.x = -this.vel.x;
    if(this.loc.x > width) this.vel.x = -this.vel.x;
    if(this.loc.y < 0) this.vel.y = -this.vel.y;
    if(this.loc.y > height) this.vel.y = -this.vel.y;
  }

  // render() draws the ball at the new location
  this.render = function(){
    fill(this.col);
    ellipse(this.loc.x, this.loc.y, this.rad, this.rad);
  }

}


// Paddle function
function Paddle(loc, clr2){
  // letiables for the function
  this.loc = loc; //location
  this.clr2 = clr2; //color (specifically for the paddle)
  w = 50;
  h =  13;

  // When the run function is called all of the other functions are called and runs
  this.run = function() {
    this.render();
    this.update();
  }

  // The update function updates the location / velocity of both the paddle and the objects
  this.update = function() {
    // This code has the paddle move along with the mouse
    this.loc.x = lerp(this.loc.x, mouseX, 0.5);
  }

  // Gives the object a shape and color
  this.render = function() {
    fill(this.clr2);
    rect(this.loc.x, this.loc.y, w, h);
  }

}

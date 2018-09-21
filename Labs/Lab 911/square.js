

/*
**  Square Constructor Function::
**  eettlin
**  Sept. 11, 2018
*/

//  Add perameters to your constructor function
function Sqr(location, side, color){
  this.loc = location;
  this.side = side;
  this.col = color;
//  Add instance variables to your constructor Function
//What does a square need to know about itself??

  this.render = function(){
    fill(this.col);
    rect(this.loc.x, this.loc.y, this.side, this.side);
  }

}//  End of Square constructor function

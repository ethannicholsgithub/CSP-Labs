function Bars(loc, r, g, b, col) {
  this.loc = loc;
  this.r = random(0, 255);
  this.g = random(0, 255);
  this.b = random(0, 255);
  this.col = col;

  this.bar = function(){
    rect(10, 10, 10, 10);
  }

  this.run = function(){
    this.bar();
  }
}

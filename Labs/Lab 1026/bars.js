function Bars(loc, r, g, b, col) {
  this.loc = loc;
  this.r = random(0, 255);
  this.g = random(0, 255);
  this.b = random(0, 255);
  this.col = color(this.r, this.g, this.b);

  this.bar = function(){
    fill(this.col);
    console.log(this.color);
    rect(10, 10, 10, 10);
  }

  this.run = function(){
    this.bar();
  }
}

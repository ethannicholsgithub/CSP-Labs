function colorbar(loc, w, h, clr){
  this.loc = loc;
  this.w = w;
  this.h = h;
  this.clr = clr;

  this.run = function(){
    this.render();
  }

  this.render = function(){
    fill(this.clr);
    rect(this.loc.x, this.loc.y, this.w, this.h);
  }

}

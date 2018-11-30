function Segments(loc){

  this.loc = loc;

  this.run = function(){
    this.render();
  }

  this.render = function(){
    rect(this.loc.x, this.loc.y, w, w);
    fill(color(255));
  }

}

function Foods(loc, col2){

  this.loc = loc;
  this.col2 = col2

  this.run = function(){
    this.render();
  }

  this.render = function(){
    noStroke();
    rect(this.loc.x, this.loc.y, 20, 20);
  }

}

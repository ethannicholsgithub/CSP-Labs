function Foods(loc, col2){

  this.loc = loc;
  this.col2 = col2

  this.run = function(){
    this.bender();
  }

  this.bender = function(){
    fill(this.col2);
    rect(this.loc.x, this.loc.y, 20, 20);
  }

}

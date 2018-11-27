function Foods(loc, vel){

  this.loc = loc;
  this.vel = vel;

  this.run = function(){
    this.update();
    this.render2();
  }

  this.update = function(){
    this.loc.x = constrain(this.loc.x, 0, width-w)
    this.loc.y = constrain(this.loc.y, 0, width-w)
  }

  this.render2 = function(){
    rect(this.loc.x, this.loc.y, w, w);
  }

}

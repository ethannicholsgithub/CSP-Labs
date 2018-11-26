function Snake(loc, vel){

  this.loc = loc;
  this.vel = vel;

  this.run = function(){
    this.update();
    this.render();
  }

  this.update = function(){
    this.loc.add(this.vel);
    this.loc.x = constrain(this.loc.x, 0, width-w)
    if(this.loc.x = constrain(this.loc.x, 0, width-w)){
    }
    this.loc.y = constrain(this.loc.y, 0, width-w)
    if(this.loc.y = constrain(this.loc.y, 0, width-w)){
    }
  }

  this.render = function(){
    rect(this.loc.x, this.loc.y, w, w);
    fill(255, 255, 255);
  }

}

function Snake(loc, vel, col){
  this.loc = loc;
  this.vel = vel;
  this.col = col;

  this.update = function(){
    this.vel.mult(w);
    this.loc.add(this.vel);
  }

  this.render = function(){
    fill(this.col);
    rect(this.loc.x, this.loc.y, 25, 25);
  }

  this.run = function(){
    this.update();
    this.render();
  }

  function checkEdges(){
    if(this.loc.x >= windowWidth){
      this.loc.x = this.loc.x - 800
    }
  }
}

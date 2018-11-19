function Snake(loc, vel, col){
  this.loc = loc;
  this.vel = vel;
  this.col = col;

  this.update = function(){
    this.vel.mult(w);
    this.loc.add(this.vel);
  }

  this.render = function(){
    rect(400, 400, 25, 25);
    fill(this.col);
  }

  this.run = function(){
    this.update();
    this.render();
    this.checkEdges();
  }

  function checkEdges(){
    if(this.loc.x >= windowWidth){
      this.loc.x = this.loc.x - 800
    }
  }
}

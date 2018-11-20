
function Snake(loc, vel, col){
  this.loc = loc;
  this.vel = vel;
  this.col = col;

  this.update = function(){
    this.loc.add(this.vel);
    this.loc.x = constrain(this.loc.x, 0, width - w);
    this.loc.y = constrain(this.loc.y, 0, height - w);
    )
  }

  this.render = function(){
    rect(this.loc.x, this.loc.y, w, w);
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

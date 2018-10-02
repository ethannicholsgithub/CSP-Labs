function Boids(loc, vel, clr) {
  this.loc = loc;
  this.vel = vel;
  this.clr = clr;
  this.acc = createVector(0, .1);

  this.run = function(){
    this.checkEdges();
    this.update();
    this.render();
  }

  this.update = function() {

  }

  this.checkEdges = function(){
    if(this.loc.x < 0) this.vel.x = -this.vel.x;
    if(this.loc.x > width) this.vel.x = -this.vel.x;
    if(this.loc.y < 0) this.vel.y = -this.vel.y;
    if(this.loc.y > width) this.vel.y = -this.vel.y;
  }

  this.render = function() {
    fill(this.col);
    push()
      translate(this.loc.x, this.loc.y);
      rotate(0);
      triangle(-15, 0, 15, 0, 0, -15);
    pop()
  }
}

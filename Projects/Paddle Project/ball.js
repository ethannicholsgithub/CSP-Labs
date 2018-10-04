

function Ball(loc, vel, clr) {

  this.loc = loc;
  this.vel = vel;
  this.clr = clr;
  this.acc = createVector(0, 0.1)

  this.run = function() {
    this.checkEdges();
    this.render();
    this.update();
  }

  this.checkEdges = function() {
    if(this.loc.x < 0) this.vel.x = -this.vel.x;
    if(this.loc.x > width) this.vel.x = -this.vel.x;
    if(this.loc.y < 0) this.vel.y = -this.vel.y;
    if(this.loc.y > width) this.vel.y = -this.vel.y;
  }

  this.update = function() {
    this.loc.x = this.loc.x + this.vel.x;
    this.loc.y = this.loc.y + this.vel.y;
    this.vel.add(this.acc);
    this.loc.add(this.vel);
  }

  this.render = function() {
    fill(this.clr);
    push()
      translate(this.loc.x, this.loc.y);
      rect(10, 10, 10, 10);
    pop()
  }
}

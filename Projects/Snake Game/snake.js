function Snake(loc, vel, col){

  this.loc = loc;
  this.vel = vel;
  this.col = col;
  this.segments = [];
  this.segments.push(createVector(0, 0));


  this.run = function(){
    this.update();
    this.render();
  }

  this.update = function(){
    var headLoc = createVector(this.loc.x, this.loc.y);
    this.segments.push(headLoc);
    if(this.segments.length > this.length) {
      var remove = this.segments.shift();
      fill(0, 0, 0);
      rect(remove.x, remove.y, w, w);
    }

    this.loc.add(this.vel);
    this.loc.x = constrain(this.loc.x, 0, width-w);
    this.loc.y = constrain(this.loc.y, 0, width-w);
  }

  this.render = function(){
    fill(0,255,0);
    rect(this.loc.x, this.loc.y, w, w)
  }
}

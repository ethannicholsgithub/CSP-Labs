function Snake(loc, vel, col){

  this.loc = loc;
  this.vel = vel;
  this.col = col;
  this.segments = [];
  this.segments.push(createVector(0, 0));
  var headLoc = createVector(this.loc.x, this.loc.y);

  this.run = function(){
    this.render();
    this.update();
  }

  this.update = function(){
    this.segments.push(headLoc);

    }

    this.loc.add(this.vel);
    this.loc.x = constrain(this.loc.x, 0, width-w);
    this.loc.y = constrain(this.loc.y, 0, width-w);
  }

  this.render = function(){
    fill(this.col);
    rect(this.loc.x, this.loc.y, 0, 0);
  }

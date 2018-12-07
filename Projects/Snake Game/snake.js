function Snake(headloc, vel, col){

  this.vel = vel;
  this.col = col;
  this.segments = [];
  this.headloc = headloc;
  this.segments.push(createVector(0, 0));


  this.run = function(){

    this.update();
    this.render();
  }

  this.update = function(){
    this.segments[0].x = this.headloc.x
    this.segments[0].y = this.headloc.y
    for(var i = this.segments.length - 1; i >= 1; i--){
      this.segments[i].x = this.segments[i - 1].x;
      this.segments[i].y = this.segments[i - 1].y;

    }
    this.headloc.add(this.vel);
    this.headloc.x = constrain(this.headloc.x, 0, width-w);
    this.headloc.y = constrain(this.headloc.y, 0, width-w);

    //


    //once snake eats food then add a segment and move food location
    if(this.headloc.dist(food.loc) === 0){
      this.segments.push(createVector(0,0));
    }
  }

  this.render = function(){
    fill(this.col);
    rect(this.headloc.x, this.headloc.y, w, w);
    for(var i = 1; i <= this.segments.length - 1; i++){
      rect(this.segments[i].x, this.segments[i].y, w, w);
    }
  }

}

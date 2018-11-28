function Snake(loc, vel, col){

  this.loc = loc;
  this.vel = vel;
  this.col = col;

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
    fill(color(255, 0, 0));
  }

  //create event function where once snake touches food for   F   U   E   L  that returns a true or false
  function eatFood(){
    if(this.loc.y == food.loc.y && this.loc.x == food.loc.x){
      console.log("food");
    }
  }

  //create segments function to add segments to the Snake
  function segments(){
  }

}


  //  Global variables
  var b1;
  var b2;
  var b3;

  // setup code
function setup() {
    var cnv = createCanvas(800, 800);
    cnv.position((windowWidth-width)/2, 30);
    background(20,20,20);
    b1 = new Ball(random(width), random(height),random(15, 35), color(random(0,255), random(0,255), random(0,255)));
    b2 = new Ball(random(width), random(height),random(15, 35), color(random(0,255), random(0,255), random(0,255)));
    b3 = new Ball(random(width), random(height),random(15, 35), color(random(0,255), random(0,255), random(0,255)));
  }

function draw() {
    b1.run();
    b2.run();
    b3.run();
  }

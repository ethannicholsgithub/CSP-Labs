var colorBars = [];

//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);

  for(let i = 0; i < colorBars.length; i++){
    colorBars.run();
  }

  loadBars(10)
}

//  The draw function is called @ 30 fps
function draw() {

}

function loadBars() {
  for(let i = 0; i < 10; i++){
    loc = createVector(random(width), 100)
    col = color(Bars.r, Bars.g, Bars.b);
    let b = new Bars(loc, Bars.r, Bars.g, Bars.b, col);
    colorBars.push(b);
  }
}

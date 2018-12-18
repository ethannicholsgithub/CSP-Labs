var colorBars = [];

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  numBars = 40;
  loadBars(numBars);
  bubbleSort(colorBars);
}

function draw() {
  background(20, 20, 20, 6000);
  noStroke();
  for(var i = 0; i < colorBars.length; i++){
    colorBars[i].run();
  }
}

function loadBars(numBars){
  for(var i = 0; i < numBars; i++){
    var w = 800/numBars;
    var h = 250;
    var loc = createVector(0+(w*i), 150);
    var r = random(0, 255);
    var g = random(0, 255);
    var b = random(0, 255);
    var clr = color(red, green, blue);
    var bar = new colorbar(loc, w, h, clr);
    colorBars.push(bar);
  }
}

function bubbleSort(colorBars) {
    var length = colorBars.length;
    for (var i = 0; i < length; i++) {
      for (var j = 0; j < (length - i - 1); j++) {
        var a = colorBars[j].r;
        var b = colorbarBars[j+1].r;
        if(a > b) {
          var temp = colorBars[j];
          colorBars[j] = colorBars[j+1];
          colorBars[j+1] = temp;
            }
        }
    }
}

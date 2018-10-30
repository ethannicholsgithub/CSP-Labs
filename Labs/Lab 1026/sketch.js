var colorBars = [];
var numberOfBars = 100;
var barSize;
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  barSize = width / numberOfBars
  background(100);

  loadBars(100);

  for(let i = 0; i < colorBars.length; i++){
    colorBars[i].run();
  }
}

function loadBars() {
  let rowNum = 0;
  let columNum = 0;

  for(let row = 0; row < numberOfBars; row++){
    var y = 8 * row
  }
}

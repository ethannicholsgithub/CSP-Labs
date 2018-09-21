/*
**Lab 911:CheckerBoard
**
**
*/


//  Global variables
// Declare squares[] as a global variable
var squares = [];
var squareSize;
var numberOfSquares = 8;

// put setup code here
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(235);
  // Create a function that loads the squares into an
  // array of square objects and call the function
  loadSquares();
  //  traverse array and run each square
  for(var i = 0; i < squares.length; i++) {
    squares[i].render();
    squareSize = width / numberOfSquares;
  }
}



function loadSquares(){
  for(var row = 0; row < 8; row = row + 1) {

    var x = 100 * row;

    for (var column = 0; column < 8; column = column + 1) {

      var y = 100 * column;
      var loc = createVector(x, y);
      var c;

      if((row + column) % 2){
        c = color(0, 0, 0);
      }
      else {
        c = color(255, 255, 255);
      }

      var s = new Sqr(loc, 200, c);
      squares.push(s);
    }
  }

}

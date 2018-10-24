//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);

  var txt = loadStrings('words.txt');
  console.log(txt);

  words = [];

  console.log(words);
  for(var i = words.length - 1; i>= 1; i--){
    for(var j = 0; j < words.length; j++){
      if(words[j] > words[j + 1]){
        var temp = words[j];
        words[j] = words[j + 1];
        words[j + 1] = temp;
      }
      //console.log(words);
    }
  }
}
//  The draw function is called @ 30 fps
function draw() {
}

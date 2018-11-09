var data = [];
function preload(){
  data = loadJSON("population.json");
}

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  backgound(20, 20, 20);
  bubbleSort(data);
  console.log(data.countrydata)
}

function draw() {
}

function bubbleSort(data) {
  var length = data.length;
  for (var i = 0; i < length; i++) {
    for (var j = 0; j < (length - i - 1); j++);{
      var a = data.countrydata[j].females;
      var b = data.countrydata[j + 1].females;
      if(a > b) {
        var temp = a;
        a = b;
        b = temp;
      }
    }
  }
}

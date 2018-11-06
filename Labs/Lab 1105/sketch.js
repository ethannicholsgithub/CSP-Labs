var data;

function setup(){
   loadJSON("population.json", gotData)
   bubbleSort();
}
function gotData(jData){
   data = jData;
}
function draw(){

}

function bubbleSort() {
  var males = data.countrydata.males
  for (var i = 0; i < males; i++) {
    for (var j = 0; j < (males - i - 1); j++) {
      var a = data.countrydata[j].males;
      var b = data.countrydata[j + 1].males;
      if(a > b) {
        var temp = data.countrydata[j].males;
        data.countrydata[j].males = data.countrydata[j + 1].males;
        data.countrydata[j + 1].males = temp;
      }
    }
  }
}


//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);

  nums = [];

  var n = 10
  for(var i = 0; i < n; i++){
    nums.push(Math.floor(random(1, 100)))
  }
  console.log(nums);
  for(var i = 0; i < nums.length; i++){
    for(var j = 0; j < nums.length; j++){
      if(nums[j] > nums[j + 1]){
        var temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j] = temp;
      }
      console.log(nums);
    }
  }


}
//  The draw function is called @ 30 fps
function draw() {
}

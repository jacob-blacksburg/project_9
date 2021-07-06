
function setup() {
  createCanvas(400,400);
}

function draw() 
{
  background(30);
if(keyDown("w")){
  background("pink");
}
if(keyDown("a")){
  background("green");
}
if(keyDown("s")){
  background("orange");
}
if(keyDown("d")){
  background("yellow");
}
}





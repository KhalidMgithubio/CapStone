// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let Battlemap2;
let unit;
function preload(){
  Battlemap2 = loadImage("Assests/Battlemap2.jpg");
  
}
function setup() {
  createCanvas(1350, 900);
  unit = new  Units(45,45);
}

function draw() {
  background(220);
  image(Battlemap2,0,0);
  unit.update();
  unit.show();

  
}
function keyPressed(){


}


function collidePointRec (pointX, pointY, x, y, xW, yW) {
  //2d
  if (pointX >= x &&         // right of the left edge AND
      pointX <= x + xW &&    // left of the right edge AND
      pointY >= y &&         // below the top AND
      pointY <= y + yW) {    // above the bottom
          return true;
  }
  return false;
  }
function mousePressed(){
  if(collidePointRec(mouseX,mouseY,unit.pos.x,unit.pos.y,unit.width,unit.height)){

  }
}
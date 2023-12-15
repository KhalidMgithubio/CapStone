// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let Battlemap2;
let unit;
let check = false;
let check2 = false;
let unit2;


function preload(){
  Battlemap2 = loadImage("Assests/Battlemap2.jpg");
  
}
function setup() {
  createCanvas(1350, 900);
  unit = new  UnitsCav(45,45); //unit Ca
  unit2 = new UnitsCav(200,200);

}


function draw() {
  background(220);

  
  image(Battlemap2,0,0);//where it starts to make the background pic
  unit.update();//updates units place
  unit2.show();

  unit.show();//shows them
  if(check){
    unit.pos.x = mouseX  - unit.width/2;// mouse corner with mouse
    unit.pos.y = mouseY - unit.height/2 ;//
  }

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

  if(collidePointRec(mouseX,mouseY,unit.pos.x,unit.pos.y,unit.width,unit.height) && check === false){
    check = true;
   
 
  }
  else if (collidePointRec(mouseX,mouseY,unit.pos.x,unit.pos.y,unit.width,unit.height) && check === true){
    check = false;

    if(unit.pos.x%45 !== 0){
      unit.pos.x = round(unit.pos.x/45) * 45;
    }
    if(unit.pos.y%45 !== 0){
      unit.pos.y = round(unit.pos.y/45) * 45;
    }
  }

}


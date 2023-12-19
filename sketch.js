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
let units = [];
let example;
function preload(){
  Battlemap2 = loadImage("Assests/Battlemap2.jpg");
  example = loadImage("Assests/Cav.png");
  
}
function setup() {
  createCanvas(1350, 900);

  for(let i = 0 ; i < 23; i++){
    units[i] = new UnitsCav(random(width), random(height));
  }

}


function draw() {
  background(220);

  
  image(Battlemap2,0,0);//where it starts to make the background pic



  for(let i = 0 ; i < 23; i++){
    units[i].show(example);
    units[i].update();
  }

}



function mousePressed(){

  for(let i = 0 ; i < 23; i++){
    units[i].checkMouse();
   
  }

  // if(collidePointRect(mouseX,mouseY,unit.pos.x,unit.pos.y,unit.width,unit.height) && check === false){
  //   check = true;
   
 
  // }
  // else if (collidePointRect(mouseX,mouseY,unit.pos.x,unit.pos.y,unit.width,unit.height) && check === true){
  //   check = false;

  //   if(unit.pos.x%45 !== 0){
  //     unit.pos.x = round(unit.pos.x/45) * 45; //x part of 45
  //   }
  //   if(unit.pos.y%45 !== 0){
  //     unit.pos.y = round(unit.pos.y/45) * 45; //y part of 45
  //   }
  // }

}


class  UnitsCav{//talks about  this look/place
  constructor(x,y){
    this.pos = createVector(x,y);
    this.width = 90;
    this.height = 45;
    this.check = false;
  }

  update(){
    if(this.check){
      this.pos.x = mouseX  -  this.width/2;// mouse corner with mouse
      this.pos.y = mouseY -  this.height/2 ;//---/
    }
  }
  checkMouse(){
    if(collidePointRect(mouseX,mouseY,this.pos.x,this.pos.y,this.width,this.height) && this.check === false){
      this.check = true;
     
   
    }
    else if (collidePointRect(mouseX,mouseY,this.pos.x,this.pos.y,this.width,this.height) && this.check === true){
      this.check = false;
  
      if(this.pos.x%45 !== 0){
        this.pos.x = round(this.pos.x/45) * 45; //x part of 45
      }
      if(this.pos.y%45 !== 0){
        this.pos.y = round(this.pos.y/45) * 45; //y part of 45
      }
    }
  }
  show(e){
    image(e,this.pos.x,this.pox.y);
    // fill(0);
    // noStroke();

    // rect(this.pos.x,this.pos.y,this.width,this.height);
    // stroke(255);
    // strokeWeight(3);
    // line(this.pos.x,this.pos.y,this.width-2+this.pos.x,this.pos.y+this.height-2);

    
  }
}



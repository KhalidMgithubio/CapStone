class UnitsCav{//talks about unit look/place
  constructor(x,y){
    this.pos = createVector(x,y);
    this.width = 90;
    this.height = 45;
  }
  update(){
    //this.pos.x +=1;
  }
  show(){
    fill(0);
    noStroke();
    rect(this.pos.x,this.pos.y,this.width,this.height);
    stroke(255);
    strokeWeight(3);
    line(this.pos.x,this.pos.y,this.width-2+this.pos.x,this.pos.y+this.height-2);
    
    
    
  }
}

class UnitsIn{//talks about unit look/place
  constructor(x,y){
    this.pos = createVector(x,y);
    this.width = 90;
    this.height = 45;
  }
  update(){
    //this.pos.x +=1;
  }
  show(){
    fill(0);
    noStroke();
    rect(this.pos.x,this.pos.y,this.width,this.height);
    stroke(255);
    strokeWeight(3);
    line(this.pos.x,this.pos.y,this.width-2+this.pos.x,this.pos.y+this.height-2);
    stroke(255);
    strokeWeight(3);
    line(this.width-2+this.pos.x,this.pos.y+this.height-2,this.pos.x,this.pos.y);
    
    
  }
}

class UnitsLIn{//talks about unit look/place
  constructor(x,y){
    this.pos = createVector(x,y);
    this.width = 90;
    this.height = 45;
  }
  update(){
    //this.pos.x +=1;
  }
  show(){
    fill(0);
    noStroke();
    rect(this.pos.x,this.pos.y,this.width,this.height);
    stroke(255);
    strokeWeight(3);
    line(this.pos.x,this.pos.y,this.width-2+this.pos.x,this.pos.y+this.height-2);
    
    
    
  }
}

class UnitsLCav{//talks about unit look/place
  constructor(x,y){
    this.pos = createVector(x,y);
    this.width = 90;
    this.height = 45;
  }
  update(){
    //this.pos.x +=1;
  }
  show(){
    fill(0);
    noStroke();
    rect(this.pos.x,this.pos.y,this.width,this.height);
    stroke(255);
    strokeWeight(3);
    line(this.pos.x,this.pos.y,this.width-2+this.pos.x,this.pos.y+this.height-2);
    
    
    
  }
}
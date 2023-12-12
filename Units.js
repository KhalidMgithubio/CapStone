class Units{
  constructor(x,y){
    this.pos = createVector(x,y);
    this.width = 90;
    this.height = 45;
  }
  update(){
    //this.pos.x +=1;
  }
  show(){
    noStroke();
    fill(0);
    rect(this.pos.x,this.pos.y,this.width,this.height);
   
  }
}
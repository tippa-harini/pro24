class Paper {
    constructor(x,y,r){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2

        }
        this.image=loadImage("paper.png");

        this.body=Bodies.circle(x,y,r/2,options);
        this.r=r;
        World.add(world,this.body);
   }
   display(){

       var pos =this.body.position;

       push()
       translate(pos.x,pos.y);
       rectMode(CENTER);
       strokeWeight(3);
       imageMode(CENTER);
       image(this.image,paper.x,paper.y,0,0);
       fill(225);
       ellipse(0,0,this.r,this.r);
       pop();
   }
}
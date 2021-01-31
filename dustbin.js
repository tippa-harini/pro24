class Dustbin {
    constructor(x, y, width, height) {
      var options = {
          isStatic:true
      }
      this.image=loadImage("dustbin.png");
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(225,0,225);
      imageMode(CENTER);
      image(this.image,1200,550,200,200)
      rect(pos.x,pos.y , this.width, this.height);
    }
}
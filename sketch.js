
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper;
var d1,d2,d3;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground=new Ground(600,650,1500,10);

	paper=new Paper(20,640,40);

	d1=new Dustbin(1200,640,200,15);
	d2=new Dustbin(1300,570,15,150);
	d3=new Dustbin(1100,570,15,150);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  paper.display();
  d1.display();
  d2.display();
  d3.display();
  drawSprites();
  keyPressed();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-85})
	}
}




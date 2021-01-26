
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
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground=new Ground(400,650,800,10);

	paper=new Paper(250,640,0.5);

	d1=new Dustbin(600,640,100,20);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  paper.display();
  d1.display();
  drawSprites();
  keyPressed();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
	}
}




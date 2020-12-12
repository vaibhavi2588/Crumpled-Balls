var paper , dustbin1 , dustbin2 , dustbin3, ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(600,500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(250,250,50);
	//dustbin1 = new Dustbin(300,400,20,100);
	dustbin2 = new Dustbin(400,410,100,150);
	//dustbin3 = new Dustbin(400,463,200,20);
	ground = new Ground(300,480,600,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  paper.display();
  //dustbin1.display();
  dustbin2.display();
  //dustbin3.display();
  ground.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyDown(UP_ARROW)){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:180,y:-280})
	}

}


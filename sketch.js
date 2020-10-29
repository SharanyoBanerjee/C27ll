var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400,100,500,50)

	bob1 = new Bob(250,500,40); 
	bob2 = new Bob(290,500,40); 
	bob3 = new Bob(330,500,50);
	bob4 = new Bob(390,500,50);
	bob5 = new Bob(430,500,50);

	rope1 = new Rope(bob1.body,roof.body,0,0);
	rope2 = new Rope(bob2.body,roof.body,40,0);
	rope3 = new Rope(bob3.body,roof.body,80,0);
	rope4 = new Rope(bob4.body,roof.body,120,0);
	rope5 = new Rope(bob5.body,roof.body,160,0);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  rope2.display()
  rope1.display()
  rope3.display()
  rope4.display()
  rope5.display()

  roof.display()

  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()

   
  
  drawSprites();
 
}




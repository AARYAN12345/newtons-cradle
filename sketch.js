
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1,ball2,ball3,ball4,ball5
var roof 
var rope1,rope2,rope3,rope4,rope5
function preload()
{
	
}

function setup() {
	createCanvas(1000,500);
	ball1=new Ball(100,300)
	ball2=new Ball(300,300)
	ball3=new Ball(500,300)
	ball4=new Ball(700,300)
	ball5=new Ball(900,300)

	engine = Engine.create();
	world = engine.world;

    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ball1.display()
  ball2.display()
  ball3.display()
  ball4.display()
  ball5.display()



  drawSprites();
 
}




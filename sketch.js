
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, leftwall,rightwall,ball

function preload()
{
	
}

function setup() {
	createCanvas(1200,700);

	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,690,1200,20)
	leftwall = new Ground(800,620,20,160)
	rightwall = new Ground(1000,620,20,160)
	
	var ballOptions = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	ball = Bodies.circle(200,200,20,ballOptions)
	World.add(world,ball)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS)
  background(0)


  drawSprites();
  ground.show();
  leftwall.show()
  rightwall.show()
  ellipse(ball.position.x,ball.position.y,20)
}

function keyPressed(){
	if(keyDown("up")){
		Matter.Body.applyForce(ball,ball.position,{x:70,y:-70})
	}
}


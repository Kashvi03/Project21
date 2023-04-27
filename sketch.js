
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}

	groundObj= new Ground(width/2,670,width,20);
	leftSide= new Ground(1100,600,20,120);
	rightSide= new Ground(1300,600,20,120);
	ball = Bodies.circle(10,10,10,ball_options)
	World.add(world,ball)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

	groundObj.display();
	rightSide.display();
	leftSide.display();
	ellipseMode(RADIUS);
	ellipse(ball.position.x,ball.position.y,20,20);

  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:23,y:-23});
	}
}




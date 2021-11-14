
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundObj =new Ground(400,670,800,20);
	leftSide=new Ground(500,600,10,120);
	rightSide=new Ground(700,600,10,120)

     ball_options={
		isStatic: false,
		resitution: 0.3,
		friction: 0,
		density: 1.2
	}
    ball = Matter.Bodies.circle(200,100,20,ball_options);
	World.add(world,ball);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(51);
  ellipse(ball.position.x,ball.position.y,20);
  
  if(keyCode === RIGHT_ARROW){

	//write code here to apply force on body
	
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.5,y:-4});
	
}
  groundObj.display();
  leftSide.display();
  rightSide.display();
  drawSprites();
 
}

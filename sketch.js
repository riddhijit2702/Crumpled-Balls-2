const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,dustbin,ground;

function preload(){
  
}
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   ball=new Ball(100,663,30)
  ground=new Ground(400,680,800,20)
  dustbin=new Dustbin(600,650,200,20)
 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(300);

  ball.display();
  ground.display();
  dustbin.display();
 
 
}

function keyPressed() {
 
    if(keyCode===UP_ARROW){
     Matter.Body.applyForce(ball.body,ball.body.position,{x:250,y:-250})
    }
}








const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,dustbin,ground;

function preload(){
  
}
function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   ball=new Ball(100,663,30)
   
  ground=new Ground(400,680,2500,20)
  dustbin=new Dustbin(1200,650,200,20)
 
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
     Matter.Body.applyForce(ball.body,ball.body.position,{x:800,y:-600})
    }
}














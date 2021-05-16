
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var dust,dust2,dust3;
var rope
function preload()
{
	
}

function setup() {
createCanvas(1400, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball=new Ball(226,576,30)
ground=new Ground (400,height,2000,20)
dust=new dustbin(1190,570,150,20)
dust2=new dustbin(1256,510,20,150)
dust3=new dustbin(1110,510,20,150)
createEdgeSprites();
}

function draw() {
  background("yellow");
  Engine.update(engine);
  text(mouseX+','+mouseY,mouseX,mouseY)
ball.display();
ground.display();
dust.display();
dust2.display();
dust3.display();
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce( ball.body, ball.body.position,{x:70,y:-80});
	}
}



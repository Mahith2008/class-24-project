const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var paper;
var binright,binleft,bindown


function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 
  ground = new Ground(600,550,1200);
  paper = new Paper(100,500,30);
  binleft = new Dustbin(800,460,20,130)
  binright = new Dustbin(950,460,20,130)
  bindown = new Dustbin(875,530,170,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");

  //Engine.update(engine)

  ground.display();
  paper.display();
  binleft.display();
  binright.display();
  bindown.display();
 
}

function keyPressed(){

  if(keyCode === UP_ARROW){

    Matter.Body.applyForce(paper.body,paper.body.position,{x:46,y:-39} );

  }

}




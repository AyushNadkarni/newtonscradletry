
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5,roofObject,rope1,rope2,rope3,rope4,rope5;


function setup(){

	createCanvas(800,700);
	engine = Engine.create();
	world = engine.world;

  bob1 = new Bob(200,160)
  bob2 = new Bob(300,200)
  bob3 = new Bob(400,220)
  bob4 = new Bob(500,240)
  bob5 = new Bob(600,250)

  roofObject  = new Roof(100,200)
 
 rope1 = new Rope(bob1.body,roofObject.body,20,50)
 rope2 = new Rope(bob2.body,roofObject.body,40,50)
 rope3 = new Rope(bob3.body,roofObject.body,40,50)
 rope4 = new Rope(bob4.body,roofObject.body,40,50)
 rope5 = new Rope(bob5.body,roofObject.body,20,50)

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("grey");
  Engine.update(engine);

 
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roofObject.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();




 strokeWeight(2);
  line(bob1.body.position.x,bob1.body.position.y,200,50)

  line(bob2.body.position.x,bob2.body.position.y,300,50)

  line(bob3.body.position.x,bob3.body.position.y,400,50)

  line(bob4.body.position.x,bob4.body.position.y,500,50)

  line(bob5.body.position.x,bob5.body.position.y,600,50)

  //calling the function
  keyPressed();

  }

function keyPressed(){
  if (keyPressed === UP_ARROW){
    Matter.Body.applyForce (bob1.body.position.x,bob1.body.position.y,{x:-500,y:100});

  }
}

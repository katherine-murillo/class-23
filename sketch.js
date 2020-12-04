const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var ball;

var engine, world, ground
function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  
  
 ground=new Ground();
box=new Box(200,300,50,80);
 box1=new Box(230,100,50,50)
}

function draw() {
  background(0);
  Engine.update(engine);  
 ground.display();
 box.display();
 box1.display();
}
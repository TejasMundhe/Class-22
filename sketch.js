const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world, object, ground;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var object_options = {
    restitution: 1.0
  }
  var ground_options = {
    isStatic: true
  }
  object = Bodies.rectangle(200,100,50,50, object_options);
  World.add(world, object);

  ground = Bodies.rectangle(200,370,400,30, ground_options);
  World.add(world, ground);
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  ellipse(object.position.x, object.position.y, 20,20);
  
  rect(ground.position.x, ground.position.y, 400, 30);
  
}
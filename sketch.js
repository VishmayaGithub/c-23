const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,ground1,box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    
    box1 = new Box(200,300,50,50);
    ground1 = new Ground(200,350,400,10)
    box2 = new Box (240,100,50,50)
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    ground1.display();
   box2.display()
}
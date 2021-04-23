const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Render = Matter.Render;
const Events = Matter.Events;

var engine, world;
var ground, groundImg;
var particles = [];
var snow;
var holder1, holder2;

function preload(){
  groundImg = loadImage("snow3.jpg");

}

function setup() {

  engine = Engine.create();
  world = engine.world;

  createCanvas(1200,800);
 
  ground = createSprite(600, 400);
  ground.addImage("background", groundImg);
 
  holder1 = createSprite(600, 800, 1000, 80);
  holder1.shapeColor = "lightBlue";

  holder2 = createSprite(600, 0, 1000, 80);
  holder2.shapeColor = "darkBlue";

}

function draw() {
  background(255, 255, 255);
  Engine.update(engine);
 
  drawSprites();

  if(frameCount % 10 === 0){
    snow = new Snow(random(150, 1050), 0);
    particles.push(snow);
  }

  for (var i = 0; i < particles.length; i++) {
    particles[i].display();
  }

}
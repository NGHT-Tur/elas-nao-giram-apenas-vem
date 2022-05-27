const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var iris;
var palpebra;
var pupila;
var cilios;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  var irisConfig = {
    restitution: 0.95,
    frictionAir: 0.03
  }

  iris = Bodies.circle(100,10,20,irisConfig);
  World.add(world,iris);
   
  var palpebraConfig = {
    isStatic: true
  }

  palpebra = Bodies.rectangle(200,390,400,20,palpebraConfig);
  World.add(world,palpebra);
  
  var pupilaConfig = {
    restitution: 0.90,
    frictionAir: 0.01
  }

  pupila = Bodies.circle(300,10,20,pupilaConfig);
  World.add(world,pupila);

  var ciliosConfig = {
    isStatic: true
  }

  cilios = Bodies.rectangle(300,200,200,20,ciliosConfig);
  World.add(world,cilios);

  rectMode(CENTER);
  ellipseMode(RADIUS);

}


function draw() 
{
 Engine.update(engine);
 background("grey");

 ellipse(iris.position.x, iris.position.y, 20);
 rect(palpebra.position.x, palpebra.position.y, 400, 20);
 ellipse(pupila.position.x, pupila.position.y, 20);
 rect(cilios.position.x, cilios.position.y, 200, 20);
}


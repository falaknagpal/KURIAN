const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body;


var canvas;
var dave;
var ground,edge1,edge2,edge3;
var plat1,plat2,plat3,plat4;
var plat5,plat6,plat7,plat8;
function preload(){

}

function setup(){
  canvas=createCanvas(1000,300)
  engine = Engine.create();
  world = engine.world;
  
  dave = new Box(30,250,70,70);
  ground = new Ground(0,270,1000,100);
  
  edge1= new Plat2(0,150,25,900);
  edge2=new Plat2(985,150,25,1000);
  edge3=new Plat(500,0,1000,25)
  
  
  plat1= new Plat(200,220,150,25);
  plat2= new Plat(250,170,30,25);
  plat3= new Plat(350,100,30,25);
  plat4= new Plat(10,100,30,30);

  
}

function draw(){
Engine.update(engine)
  background("grey");
  
 

  dave.display();
  ground.display();
  edge1.display();
  edge2.display();
  edge3.display()
  
  plat1.display();
  plat2.display();
  plat3.display();
  plat4.display();


  text(mouseX+":"+mouseY,20,10);
}
  
function keyPressed(){
  if(keyIsDown(UP_ARROW)){

    Matter.Body.setVelocity(dave.body,{x:0,y:-5})
  }
  if(keyIsDown(DOWN_ARROW)){

    Matter.Body.setVelocity(dave.body,{x:0,y:5})
  }
  if(keyIsDown(LEFT_ARROW)){

    Matter.Body.setVelocity(dave.body,{x:-5,y:0})
  }
  if(keyIsDown(RIGHT_ARROW)){

    Matter.Body.setVelocity(dave.body,{x:5,y:0})
  }
}


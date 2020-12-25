const Engine = Matter.Engine,
 World = Matter.World,
 Events = Matter.Events,
 Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score = 0;
var particle;
var turn = 0;
var PLAY = 1;
var END = 0;
var gameState = 1;
var yellowLine;

function setup() {
  createCanvas(900, 900);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  yellowLine = createSprite(450,500,900,15);
  fill("yellow");

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");

  strokeWeight(2);
  stroke("red");
  fill("yellow");
  textSize(30)
  text("Score : " + score,20,40);

  Engine.update(engine);
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     noStroke();
     divisions[k].display();
   }

   if(particle !== null){
    particle.display();

     if(particle.body.position.y > 760){
       if(particle.body.position.x < 300){
         score = score + 500;
         particle = null;
         if(count >= 5) gameState = 0;
       }
     }
   }

   if(particle !== null){
    particle.display();

    if(particle.body.position.y > 760){
      if(particle.body.position.x > 301 && particle.body.position.x < 600){
        score = score + 100;
        particle = null;
        if(count >= 5) gameState = 0;
      }
    }
  }
  if(particle !== null){
    particle.display();

    if(particle.body.position.y > 760){
      if(particle.body.position.x > 601 && particle.body.position.x < 900){
        score = score + 200;
        particle = null;
        if(count >= 5) gameState = 0;
      }
    }
  }

   drawSprites();

   fill("white");
   noStroke();
   text("500",15,650);

   fill("white");
   noStroke();
   text("500",95,650);

   fill("white");
   noStroke();
   text("500",175,650);

   fill("white");
   noStroke();
   text("500",255,650);

   fill("white");
   noStroke();
   text("100",335,650);

   fill("white");
   noStroke();
   text("100",415,650);

   fill("white");
   noStroke();
   text("100",495,650);

   fill("white");
   noStroke();
   text("200",575,650);

   fill("white");
   noStroke();
   text("200",655,650);

   fill("white");
   noStroke();
   text("200",735,650);

   fill("white");
   noStroke();
   text("200",815,650);
}

function mousePressed(){
  if(gameState !== "end"){
    count++;
    particle = new Particle(mouseX,10,10,10);
  }
}
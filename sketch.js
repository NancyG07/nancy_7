var trex ,trex_running;
var ground;
var groundImage, invisibleGround;
var cloudImage;
function preload (){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groungImage = loadImage("ground2.png")
 cloudImage = loadImage("cloud.png")

}

  function setup(){
 createCanvas(600,200)

  
  //crear sprite de Trex
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);

 //agregar tamaño y posicion al trex
 trex.scale = 0.5;

 //crear sprite del suelo
 ground = createSprite(200,180,400,20);
 ground.addImage("ground", groundImage);

 invisibleGround = createSprite(200,190,400,10);
 invisibleGround.visible = false;
var rad = Math.round(random(1,100));
console.log(rand)
} 
function draw(){
 background("white")

 ground.velocityX = -2;
 //console.log(frameCount);

 if(ground.x<0){
   ground.x = ground.width/2;
}

   if(keyDown("space") && trex.y >=100 ) {
    trex.velocityY = -10;
  }
  trex.velocityY = trex.velocityY + 0.5;

  //trex choca con el suelo
  trex.collide(invisibleGround);
  
  //llamado de la funcion de nubes 
  spawnClouds();

  drawSprites();
  }
  function spawnClouds(){
    if(frameCount % 60 === 0) {
  cloud = createSrite(600,100,40,10);
  cloud.addImage(cloudImage)
   cloud.y = Math.round(random(10,60));
  cloud.scale = 0.4;
  cloud.velocitX = -3;
  
  }
}

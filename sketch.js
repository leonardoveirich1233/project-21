  
var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"


function preload(){
  towerImg = loadImage("imagem_2022-10-16_152315233.png");
  doorImg = loadImage("imagem_2022-10-16_145455047 (3).png");
  climberImg = loadImage("imagem_2022-10-16_145455047 (2).png");
  ghostImg = loadImage("wonder-day-among-us-21.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600,600);
  //spookySound.loop();
  tower = createSprite(200,200);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
  doorsGroup = new Group();
  climbersGroup = new Group();
  invisibleBlockGroup = new Group();
  
  ghost = createSprite(200,200,50,50);
  ghost.scale = 0.05;
  ghost.addImage("ghost", ghostImg);
}


function draw() {
  background(255);
 if(tower.y >400 ){
      tower.y = 300
    } 
  
  if (gameState === "play") {
    
    if(keyDown("left_arrow")){
        ghost.x = ghost.x - 5;

      // escreva o código para mover para a esquerda quando a tecla para a esquerda for pressionada
    }
    if(keyDown("right_arrow")){
  
          ghost.x = ghost.x + 5;

      // escreva o código para mover para a direita quando a tecla para a direita for pressionada
      
    }
    if(keyDown("space")){
  
         ghost.velocityY = -15;

      // escreva o código para mover para cima quando a tecla espaço for pressionada
      
    }
  
  ghost.velocityY = ghost.velocityY + 0.8;
  
   
      //escreva uma condição para a torre de rolagem infinita
    
      spawnDoors();

  
//escreva um código para fazer invisibleBlockGroup (grupo de bloco invisível) colidir com o fantasma, destruir o fantasma e mudar o estado do jogo para end.
     if(climbersGroup.isTouching(ghost)){
      ghost.velocityY = 6;
    }
    if(invisibleBlockGroup.isTouching(ghost) || ghost.y > 600){
      ghost.destroy();
      gameState = "end"
    }
    
  
  drawSprites();
}
  if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250)
  }
}

function spawnDoors()
 {
  //escreva o código aqui para gerar as nuvens
  if (frameCount % 240 === 0) {
    var door = createSprite(200, -50);
    var climber = createSprite(200,10);
    var invisibleBlock = createSprite(200,15);
    invisibleBlock.width = climber.width;
    invisibleBlock.height = 2;
    //adicione a função aleatória
    door.x = Math.round(random(120,400));
    climber.x = door.x ;
   invisibleBlock.x =door.x;
    door.addImage(doorImg);
    climber.addImage(climberImg);
    
    door.velocityY = 7;
    climber.velocityY = 7;
    invisibleBlock.velocityY = 7;

    //mude a profundidade do fantasma e da porta
    
     
ghost.depth = door.depth;
    ghost.depth =1;
    
    //atribuir tempo de vida para a porta, escalador e bloco invisível

   door.lifetime = 800;
   climber.lifetime = 800;
   invisibleBlock.lifetime = 800;
    //adicione cada obstáculo ao grupo obstaclesGroup.add(obstacle); aqui os obstáculos são as portas, o escalador e o bloco invisível
    
     doorsGroup.add(door);
    invisibleBlock.debug = true;
    climbersGroup.add(climber);
    invisibleBlockGroup.add(invisibleBlock);
  }
}


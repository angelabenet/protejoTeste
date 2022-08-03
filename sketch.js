var bird, raven;
var obstaclePredio;
var food;
var birdImage,foodImage,obstaclePredioImage;
var obstacleGroup,foodGroup;
var bg;
var ravenImg, ravenGroup;
var score;
var lives;
var gameOver;
var gOI;
let font;
var litleBirds;
var sad;

var bgMusic
var win;
var w = window.innerWidth; //alterações para publicação na PlayStore
var h = window.innerHeight; //alterações para publicação na PlayStore


var PLAY = 1;
var gameState = PLAY;
var END = 0


function preload(){
birdImage = loadImage("./assets/passaro.png")
foodImage = loadImage("./assets/fruta.png")
obstaclePredioImage = loadImage("./assets/predio.png")
bg = loadImage("./assets/bg1.png")
ravenImg = loadImage("./assets/corvo.png")
bgMusic = loadSound("./assets/som.mp3")
// win = loadSound("./assets/win.mp3")
font = loadFont("./assets/MouseMemoirs-Regular.ttf")
litleBirds = loadImage("./assets/birdzim.png")
// sad = loadSound("./assets/sad.mp3 ")

}


function setup() {

  // createCanvas(windowWidth, windowHeight);
  
  createCanvas(w,h);
  bgMusic.play();
  bgMusic.setVolume(0.6);
 
  bird = createSprite(200,200,20,20);
  bird.addImage(birdImage)
  bird.scale = 0.06
  ravenGroup = new Group();
  obstacleGroup = new Group();
  foodGroup = new Group();
  lives = 10
  score = 0; 
  

  
}

  function draw (){
 background("white");

    image(bg,0,-30,1600,750-25);

    textSize(35);
    fill("black")
    textFont(font)
    text("COMIDAS - "+score,50,50);
    text("VIDA - " + lives, 50,90)
  


if(gameState === PLAY){ 


  
  bird.setCollider("circle",0,0,600);
  // bird.debug = true; 


  // score = score + Math.round(frameCount/60);
  

    if(keyIsDown(LEFT_ARROW )){
      bird.position.x=bird.position.x -2;
    }
    
    if(keyIsDown(UP_ARROW )){
      bird.position.y=bird.position.y -2;
    }

   
    
    if(keyIsDown(DOWN_ARROW )){
      bird.position.y=bird.position.y +2;
    
    }
    if(keyIsDown(RIGHT_ARROW )){
      bird.position.x = bird.position.x +2;
    }
    


    if(foodGroup.isTouching(bird)){
      score +=1
      food.remove();
    }
    
 
 

    obstacle();
    SpawnRaven();
    comida();
   


}







if(score === 10 && lives > 0){

textSize(100);
fill("white");
stroke("#000");
textFont(font);
text("Parabéns", 610,150);
 text("Você alimentou os filhotes! ", 610,290);
 var passarinho = createSprite(450,350,200,400)
 passarinho.addImage("passarinho1", litleBirds);


//  win.play();

 ravenGroup.setVelocityEach(0);
 foodGroup.setVelocityEach(0);
 obstacleGroup.setVelocityEach(-1);
}


    
if(score <= 5 && lives <= 0) {

  textSize(100);
  fill("white");
  stroke("#000");
  textFont(font);
  text("Poxa vida ",200,150);
  text("Os filhotes ficaram sem comida hj ;( ", 200,290);
  var passarinho = createSprite(450,350,200,400);
  passarinho.addImage("passarinho", litleBirds);



  bird.velocityX = 0;
  bird.velocityY = 0;
  ravenGroup.setVelocityEach(-1);
  foodGroup.setVelocityEach(-1);
  obstacleGroup.setVelocityEach(-1);
}

drawSprites();

  }








function obstacle(){
  if(frameCount%100===0){
    obstaclePredio = createSprite(800,500,30,250);
    obstaclePredio.velocityX = -3;
    obstaclePredio.shapeColor = "green";
    obstaclePredio.x = Math.round(random(1200,800));
    obstaclePredio.addImage(obstaclePredioImage);
    obstaclePredio.scale = 0.10;
  
    obstacleGroup =new Group();
    obstacleGroup.add(obstaclePredio)
  }
}
function comida(){
 if(frameCount%80===0){
  food = createSprite(1200,0,10,10);
  food.velocityX = -5;
  food.y = Math.round(random(0,350));
  food.x = Math.round(random(0,1200));
  food.addImage(foodImage);
  food.scale = 0.03;
  foodGroup.add(food);
}
}

function SpawnRaven(){
  if(frameCount%30===0){
    raven = createSprite(350,0,10,10);
    raven.velocityY = 2;
    raven.y = Math.round(random(0,750));
    raven.x = Math.round(random(0,1000));
    raven.addImage(ravenImg);
    raven.scale = 0.25;

    

    ravenGroup.add(raven);

    
    if(ravenGroup.isTouching(bird)  || obstacleGroup.isTouching(bird)){
      bird.x = 10;
      lives =  lives - 1;
    } 
    

    
    
}

}


















 

  
    



  



  

  


  











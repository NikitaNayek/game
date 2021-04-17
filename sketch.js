var PLAY=1;
var END=0;
var gameState=PLAY;
var bg, bgimg,goImg,go;
var music,music2,bgmusic;
var btile,wtile;
var tilesGroup,tiles1Group;
var sc,edges;
var score = 0;

function preload() {
 bgimg = loadImage("pianotilesbg1.png");
 music = loadSound("Song1.mp3");
 music2=loadSound("gameover.wav");
 bgmusic=loadSound("song.mp3");
 goImg=loadImage("go1.png")
 //edges=createEdgeSprites();
}

function setup() {
  createCanvas(1200,800);

 bg =  createSprite(600, 750);
 bg.addImage("background",bgimg)
 bg.velocityY=2;
 bg.scale=2.5;
 go=createSprite(600, 300, 300, 70)
 go.addImage("game over", goImg);
 //go.scale;
 btilesGroup = new Group();
 wtilesGroup=new Group();
 bgmusic.play(); 
 laxmanrekha=createSprite(600,800,595,20);
 laxmanrekha.visible=false;
 //go.depth=btilesGroup.depth;
 //go.depth=go.depth+1
}

function draw() {
  background(0); 
 
 textSize(30)
 fill("red")
 text("Score :" +score, 1000,50)
 //score = score + Math.round(frameCount/60);
  if(gameState===PLAY)
  {
  go.visible=false;

    if(bg.y>400)
    {
  bg.y= bg.height/2
    }

  btiles();
  wtiles();

if(mousePressedOver(btile))
{
  music.play();
  btilesGroup.destroyEach(); 
  score=score+1;
 
}
if(btilesGroup.isTouching(laxmanrekha))
  {
    gameState=END
    music2.play();
   
  }
}
else if(gameState===END)
{
    go.visible=true;
    bgmusic.pause();
    btilesGroup.setVelocityYEach(0);
    bg.velocityY=0;
    wtilesGroup.setVelocityYEach(0);
    //btilesGroup.destroyEach(); 
    //wtilesGroup.destroyEach(); 
    wtilesGroup.setLifetimeEach(-1);
    btilesGroup.setLifetimeEach(-1);
}

  drawSprites();

}


function btiles() {
  if(frameCount%50 === 0){
    btile = createSprite(random(400, 800), 50, 80, 140 )
    btile.velocityY = 12;
    btile.shapeColor=("black");
    btile.lifetime=800;
    btile.depth=go.depth;
    go.depth=go.depth+1
    btilesGroup.add(btile);

  }
  
}
function wtiles() {
   if(frameCount%20 === 0){ 
  
   
     wtile = createSprite(random(340, 850), 50, 80, 140) 
  wtile.velocityY = 7; 
  wtile.shapeColor=("white"); 
  wtile.lifetime=800;
  wtile.depth=go.depth;
    go.depth=go.depth+1
  wtilesGroup.add(wtile); 
 
}
 }
 /*function gameOver()
{
  //gameState=END;
 bgmusic.end();
  
} */

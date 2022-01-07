var player,score=0;
var wormGroup;




function setup() {
  createCanvas(600,600);
  player=createSprite(40,550,30,30);
  wormGroup=new Group();
}

function draw() {
  background("black");  
  stroke("red");
  noFill();
  ellipse(100,350,40,30);
  player.x=mouseX;
  player.y=mouseY;

  if(player.x<150 && player.x>90 && player.y<380 && player.y>320){
    text("No Cheating!!",200,200);
    player.x=30;
    player.y=30;

  }
  generateworms();
  
  for(var i=0;i<(wormGroup).length;i++){
    var t=(wormGroup).get(i);
    if (player.isTouching(t)){
      score++;
      t.destroy();
      t=null;
    }
  }
drawSprites();
textSize(20);
text("worms destroyed:"+score,320,50);
}

function generateworms(){
  if (frameCount % 30===0){
    console.log(frameCount);
    var worm=createSprite(100,350,40,5);
    worm.shapeColor="green";
    worm.velocityX=random(-4,4);
    worm.velocityY=random(-4,4);
    wormGroup.add(worm);
  }
}

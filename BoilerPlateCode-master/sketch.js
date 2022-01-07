var player, target, edges;




function setup() {
  createCanvas(600,600);
  edges=createEdgeSprites;
  player=createSprite(40,550,30,30);
  target=createSprite(560,40,30,30);
  o1=createSprite(300,120,100,20);
  o1.velocityX=5;
  o2=createSprite(300,320,100,20);
  o2.velocityX=-5;
  target.shapeColor="blue";
  o1.shapeColor="red";
  o2.shapeColor="red";
 
}

function draw() {
  background("black");  
  
  player.bounceOff(edges[0]);
  player.bounceOff(edges[1]);
  player.bounceOff(edges[2]);
  player.bounceOff(edges[3]);
  o1.bounceOff(edges[1]);
  o1.bounceOff(edges[0]);
  o2.bounceOff(edges[1]);
  o2.bounceOff(edges[0]);
  







  if (keyDown("up")){
    player.y=player.y-3
  }
  if (keyDown("down")){
    player.y=player.y+3
  }
  if (keyDown("left")){
    player.x=player.x-3
  }
  if (keyDown("right")){
    player.x=player.x+3
  }
  if(player.isTouching(target)){
    text("YOU WIN",200,200);
  }
  if(player.isTouching(o1)){
    o1.velocityX=0;
    text("YOU LOSE",200,200);
  }
  if(player.isTouching(o2)){
    o2.velocityX=0;
    text("YOU LOSE",200,200);
  }
  drawSprites();
}

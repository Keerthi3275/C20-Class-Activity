var fixedRect,movingRect;

function setup() 
{
  createCanvas(800,400);
  fixedRect=createSprite(200,200,50,50);
  fixedRect.shapeColor="green";
  movingRect=createSprite(400,200,50,50);
  movingRect.shapeColor="green";
}

function draw()
{
  background("yellow");  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  console.log(movingRect.x-fixedRect.x);
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2)
  {
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }
  else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }
  drawSprites();
}
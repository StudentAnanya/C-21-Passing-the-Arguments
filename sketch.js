var fixedrect,movingrect;

function setup() {
  createCanvas(1200,800);
  fixedrect=createSprite(400,200,50,80);
  fixedrect.shapeColor = "green";
  movingrect=createSprite(400,800,80,30);
  movingrect.shapeColor="green";

 /* gameObject1 = createSprite(100, 100, 50, 50);
  gameObject1.shapeColor = "green";
  
  gameObject2 = createSprite(200,100,50,50);
  gameObject2.shapeColor = "green";

  gameObject3 = createSprite(300,100,50,50);
  gameObject3.shapeColor = "green";

  gameObject4 = createSprite(400,100,50,50);
  gameObject4.shapeColor = "green";
  */

movingrect.velocityY=-5;
fixedrect.velocityY=5;
}

function draw() {
  background(0);  
 // movingrect.y=World.mouseY;
 // movingrect.x=World.mouseX;

 /*if(isTouching(movingrect,gameObject1)){
  movingrect.shapeColor="pink";
  gameObject1.shapeColor="pink";
  } else {
    movingrect.shapeColor="green";
    gameObject1.shapeColor="green";
   }
*/

 bounceOff(movingrect,fixedrect);
   
  drawSprites();
}


 
/*if(movingrect.x-fixedrect.x<=(fixedrect.width+movingrect.width)/2
   && fixedrect.x-movingrect.x<=(fixedrect.width+movingrect.width)/2){
    movingrect.velocityX=movingrect.velocityX*(-1);
    fixedrect.velocityX=fixedrect.velocityX*(-1);
   }
   
   if(movingrect.y-fixedrect.y<=(fixedrect.height+movingrect.height)/2
  && fixedrect.y-movingrect.y<=(fixedrect.height+movingrect.height)/2){
    movingrect.velocityY=movingrect.velocityY*(-1);
    fixedrect.velocityY=fixedrect.velocityY*(-1);
  }*/
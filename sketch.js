var fixedrect, movingrect
var gameObject1
var gameObject2
function setup() {
  createCanvas(1200,800);
  createSprite(400, 200, 50, 50);
  fixedrect = createSprite(600,400,50,80);
  fixedrect.shapeColor = "green";
  fixedrect.debug = true;
  movingrect = createSprite(400,200,80,30);
  movingrect.shapeColor = "green";
  movingrect.debug = true;
  gameObject1 = createSprite(100,100,50,50);
  gameObject1,shapeColor = "green";
  gameObject2 = createSprite(200,100,50,50);
  gameObject2.shapeColor = "green";
}

function draw() {
  background(255,255,255);  
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;
  if(isTouching(movingrect,gameObject1)){
      movingrect.shapeColor = "blue";
      gameObject1.shapeColor = "blue";
    }
else{
      movingrect.shaapeColor = "green";
      gameObject1.shapeColor = "green";
    }
  drawSprites();
}
function isTouching(object1,object2){
  if(object1.x - object2.x < object2.width/2 + object1.width/2 &&
    object2.x - object1.x < object2.width/2 + object1.width/2 &&
    object1.y - object2.y < object2.height/2 + object1.height/2 &&
      object2.y - object1.y < object2.height/2 + object1.height/2 ){
        return true;
      }
      else{
        return false;
      }
    }
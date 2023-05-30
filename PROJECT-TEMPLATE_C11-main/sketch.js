var  sea;
var ship;
function preload(){
  shipImg1 = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png")
  seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400)
  
  sea = createSprite(100,200)
  sea.addImage(seaImg)
  sea.scale = 0.3
  sea.x = 50
  ship = createSprite(200,200);
  ship.addAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
  ship.scale = 0.3
}
  
function draw() {
  background("blue");
  if(seaImg.x < 0){
    seaImg.x = seaImg.width / 2;
  }
    drawSprites();

}
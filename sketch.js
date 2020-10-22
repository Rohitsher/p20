var car
var wall
function setup() {
  createCanvas(800,200);
  var car = createSprite(100,100,30,30);
  var wall = createSprite(780,100,90,20)
}


function draw() {
  background(0);  
if(keyDown("space")){
car.velocityX=6;
}
if(wall.x-car.x < (car.width+wall.width)/2){
  car.velocityX=0;
  var deformation = 0.5*2260*60*60/22500
  if(deformation>180){
    car.shapeColor=(255,0,0)
  }
  if(deformation<180 && deformation>100){
  car.shapeColor=(230,230,0)
  }
  if(deformation<100){
    car.shapeColor=(0,255,0)
  }
}

  drawSprites();
}
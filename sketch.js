var car, car1, car2, wall;
var speed, speed2, weight;

function setup() {
  createCanvas(1600, 400);
  createSprite(400, 200, 50, 50);

  speed = random(35,90);
  weight = random(400,1500);

  speed2 = random(20,45);
  
  car = createSprite(50,200,50,50);
  car1 = createSprite(50,270,50,50);
  wall = createSprite(1500,200,60,500);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(255,255,255);  
  

  car.velocityX = speed;
  car1.velovityX = speed2;
  if(wall.x-car.x < (car.width + wall.width)/2 || 
  wall.x-car1.x < (car1.width + wall.width)/2)
  {
    car.velocityX = 0;
    car1.velocityX = 0;
    var deformation = 0.5*weight*speed* speed/25000;
    var deformation1 = 0.5*weight*speed2* speed2/25000;

    if(deformation>180 || deformation1>180)
    {
      car.shapeColor = color(225,0,0);
    }

    else if(deformation<180 && deformation>100 
      || deformation1<180 && deformation1>100)
    {
      car.shapeColor = color(230,230,0);
    }

    else if(deformation<100 || deformation1<100)
    {
      car.shapeColor = color(255, 0 ,0);
    }
  }
  drawSprites();
}
/*
function cars()
{
  car = createSprite(50,200,50,50);
  cars.add(car);
} */
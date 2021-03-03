var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bottomRedGroundSprite, leftRedSide, rightRedSide;
var bottomRedGroundBody;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
    bottomRedGround = createSprite(width/2,height-45,200,20);
	bottomRedGround.shapeColor = color(255,0,0);

	leftRedSide = createSprite(300, 560, 20, 200);
	leftRedSide.shapeColor = color(255,0,0);

	rightRedSide = createSprite(500, 560, 20, 200);
	rightRedSide.shapeColor = color(255,0,0);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
 
	bottomRedGroundBody = Bodies.rectangle(width/2, height-45, 200, 20 , {isStatic:true} );
 	World.add(world, bottomRedGroundBody);
    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false);
	packageSprite.y=packageSprite.y-4;
	packageBody.y=packageBody.y-4;
	packageBody.collide(bottomRedGroundSprite);
	packageSprite.collide(bottomRedGroundSprite);
  }
}




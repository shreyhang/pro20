
function preload() {
    //load the images here
    bg=loadImage("images/garden.png");
    cat1=loadImage("images/cat1.png");
    cat2=loadAnimation("images/cat2.png","images/cat3.png")
    cat4=loadImage("images/cat4.png");
    mouse1=loadImage("images/mouse1.png");
    mouse2=loadImage("images/mouse2.png","images/mouse3.png");
    mouse4=loadImage("images/mouse4.png");


}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(870,600);
    cat.addImage("catsleeping",cat1);
    cat.scale=0.2;
    mouse=createSprite(200,600);
    mouse.addImage("mousestanding",mouse1);
    mouse.scale=0.15

}

function draw() {

    background(bg);
    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
{
    cat.velocityX=0;
cat.addAnimation("catLastImage", cat4);
cat.x =300;
cat.scale=0.2;
cat.changeAnimation("catLastImage");
mouse.addAnimation("mouseLastImage", mouse4);
mouse.scale=0.15;
mouse.changeAnimation("mouseLastImage");

}
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode==LEFT_ARROW){
      cat.velocityX=-5;
      cat.addAnimation("catrunning",cat2);
      cat.changeAnimation("catrunning")
      mouse.addAnimation("mouseteasing",mouse2)
      mouse.frameDelay=25;
      mouse.changeAnimation("mouseteasing");
  }


}

function preload() {
    //load the images here
    bg = loadImage("garden.png");
    catImg = loadAnimation("cat1.png");
    catWalk = loadAnimation("cat3.png", "cat2.png");
    catHappy = loadAnimation("cat4.png")
    mouseImg = loadAnimation("mouse2.png");
    mouseImg2 = loadAnimation("mouse3.png");
    mouseHappy = loadAnimation("mouse1.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(875, 675);
    cat.addAnimation("cat", catImg);
    cat.scale = 0.1;
    // cat.debug = true;
    cat.setCollider("rectangle", 0, 0, 900, 900);


    mouse = createSprite(175, 675);
    mouse.addAnimation("mouse", mouseImg);
    mouse.scale = 0.1;
    // mouse.debug = true;
    mouse.setCollider("rectangle", 0, 0, 600, 900);

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    keyPressed();
    console.log(cat.x, "  ", mouse.x, "  ", cat.width, "  ", mouse.width)
    if (cat.x - mouse.x < (cat.width + mouse.width)/2) {
            cat.velocityX = 0;
            mouse.addAnimation("mousehappy", mouseHappy);
            mouse.changeAnimation("mousehappy");
            cat.addAnimation("cathappy", catHappy);
            cat.changeAnimation("cathappy");

    }
    drawSprites();
}


function keyPressed(){

//   For moving and changing animation write code here
  if(keyDown(LEFT_ARROW))  
  {
      mouse.addAnimation("teasing", mouseImg2);
      mouse.changeAnimation("teasing");
      mouse.frameDelay = 25;
      cat.addAnimation("walk", catWalk);
      cat.changeAnimation("walk");
      cat.frameDelay = 15;
      cat.velocityX = -4;

  }

}

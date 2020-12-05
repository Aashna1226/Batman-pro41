const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;

var UmbObj;
var drops = [];
var thunder1_img, thunder2_img, thunder3_img, thunder4_img;
var walk1_img, walk2_img, walk3_img, walk4_img, walk5_img, walk6_img, walk7_img, walk8_img;
var thunder;
var thunderGroup;
var maxDrops=100;

var thunderCreatedFrame=0;

function preload(){
    thunder1_img= loadImage("images/thunderbolt/1.png");
    thunder2_img= loadImage("images/thunderbolt/2.png");
    thunder3_img= loadImage("images/thunderbolt/3.png");
    thunder4_img= loadImage("images/thunderbolt/4.png");
}

function setup(){
   createCanvas(500,800);
   engine = Engine.create();
   world = engine.world;
    
   UmbObj = new Umbrella(200,600)

   var maxDrops=100;
   if(frameCount % 70 ===0){
    for(var i=0; i<maxDrops; i++){
        drops.push(new Drop(random(0,400), random(0,400)));
    }
   }
   
}

function draw(){
    Engine.update(engine);
    background(0);

    if(frameCount % 100 === 0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(80,600), 80, 200, 200);
        thunder.velocity = 2;
        var light = Math.round(random(1,4));
        switch(light){
            case 1 :thunder.addImage("thunder1", thunder1_img);
            break;
            case 2: thunder.addImage("thunder2", thunder2_img);
            break;
            case 3: thunder.addImage("thunder3", thunder3_img);
            break;
            case 4: thunder.addImage("thunder4", thunder4_img);
            break;
        }
        thunder.scale = random(0.3,0.5)
    }
    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }
   

    UmbObj.display();

    //displaying rain drops
    for(var i = 0; i<maxDrops; i++){
        drops[i].update();
        drops[i].display()
        
    }

    drawSprites();
    
}   


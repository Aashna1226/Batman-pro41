class Umbrella{
    constructor(x,y,r){
        var options={
            isStatic:true
        }
        this.r=r;
        this.umbrella = Bodies.circle(x,y,50,options);
        this.image = loadImage("images/Walking Frame/walking_1.png");
        this.radius=50;
        World.add(world, this.umbrella);
    }

    display(){
        var pos = this.umbrella.position;
   // var angle = this.body.angle;

   //     push();
    //    translate(pos.x, pos.y);
    //    rotate(angle);
        imageMode(CENTER);
        image(this.image,pos.x, pos.y+70, 300, 300);
     //   pop();
    }
}
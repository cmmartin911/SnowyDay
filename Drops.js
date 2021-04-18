class drop {
    constructor(x, y, r) {
        var options = {
            'restitution':0,
            'friction':1.0,
            'density':0.0000000001
        }
        this.body=Bodies.circle(x, y, r, options);
        this.r=r;
        this.image = loadImage("snow5.webp");
        World.add(world, this.body);
      }

      update(){
          if(this.body.position.y>620){
             Matter.Body.setPosition(this.body, {x:random(0,800), y:-10})
             Body.setVelocity(this.body, {x: 0, y: 3});
          }
      }

      display(){
        Body.setVelocity(this.body, {x: 0, y: 3});
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 40, 40);
        pop();
      }
};
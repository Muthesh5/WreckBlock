class Block{
    constructor(x, y) {
        var options = {
            'restitution':0.4,
            'friction':1.5,
            'density':1.3
        }
        this.body = Bodies.rectangle(x, y, 30,40, options);
        this.width = 30;
        this.height = 40;
        World.add(world, this.body);
      }
      display(){
        push();
        fill("cyan")
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
      }
  }
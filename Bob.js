class Bob{

    constructor(x, y){

        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }
    this.body = Bodies.circle(x, y, 50, options);
    this.radius = 50;
    fill("pink");
  
    
    World.add(world, this.body);
    
    }

    display(){
        fill("pink");
        ellipseMode(CENTER);
        ellipse(this.body.position.x, this.body.position.y, this.radius);
    }
}

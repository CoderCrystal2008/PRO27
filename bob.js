class Bob {
    constructor(x,y,radius){
        var options = {
            'isStatic':false,
            'restitution':1,
            'density':1.2,
            'friction':0
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body);    
    }
    display(){
        var pos = this.body.position;
        var radius = this.radius;
        
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        fill("purple");
        ellipse(0,0,radius,radius);
        pop();
    }
}
class Bob {
    constructor(x,y,r){
        var options = {
            isStatic:false,
            restitution:0.5,
            friction:0.5,
            density:1.0
        }
        this.x = x;
        this.y = y;
        this.r = r;
    this.body = Bodies.circle(this.x,this.y,this.r/2,options)
    World.add(world,this.body);

    }
    display(){
        var bobpos = this.body.position;

        push()
        translate(bobpos.x,paperpos.y);
        rectMode(CENTER)
        strokeWeight(3);
        fill(225,0,225)
        ellipse(0,0,this.r,this.r);
        pop()
    }
}
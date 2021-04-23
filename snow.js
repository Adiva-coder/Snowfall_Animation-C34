class Snow{
    constructor(x, y){
        var options={
            isStatic: false
        };
        this.image = loadImage("snow4.webp");
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width = 50;
        this.height = 50;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;

        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 50, 50);
    
    }
}
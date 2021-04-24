class Snow{
    constructor(x, y, width, height) {
        var options = {
            isStatic: false,
            restitution :0.4,
            friction :0.0
        }
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width = 50;
        this.height = 50;
        this.image = loadImage("snow4.webp");
        World.add(world, this.body);
        this.Visibility = 255;
      }
      display(){
        
        if(this.body.position.y > 730){
            var pos= this.body.position;
            World.remove(world, this.body);
            push();
            tint(255, this.Visibility);
            this.Visibility = this.Visibility - 50;
            imageMode(CENTER);
            image(this.image, pos.x,pos.y,50, 50);
            pop(); 
        }
        else{
         var pos= this.body.position;
          var angle = this.body.angle;
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          imageMode(CENTER);
          image(this.image, 0, 0, this.width, this.height);
          pop();

        }
        
        
      }
  }

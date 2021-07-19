class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("Images/brick_2.jpg");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      for(var i=0;i<=this.width;i++){
        image(this.image,pos.x, pos.y, this.width, this.height)
      }
    }
  };

class Box extends BaseClass {
  constructor(x, y, width, height){
    var options = {
      friction:13,
      'density':5,
      
  }
    super(x,y,width,height,options);
    World.add(world, this.body);
  
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("turquoise");
    rect(pos.x, pos.y, this.width, this.height);
  }
};

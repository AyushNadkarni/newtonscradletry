class Bob{

    constructor(x,y){

 var options= {
    isStatic:false,
    restitution:0.5,
    friction:0.5,
    density:2.0
 
 }

 this.body = Bodies.circle(x,y,50,options);
 World.add(world,this.body);

}

display(){
 
  ellipseMode(RADIUS);
  fill("blue")
  
  ellipse(this.body.position.x,this.body.position.y,35,35)
}


}

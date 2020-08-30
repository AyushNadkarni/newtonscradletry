class Roof {

    constructor(x,y){

 this.body = Bodies.rectangle(400,50,20,20,{isStatic:true,restitution:1.0} );
World.add(world, this.body);

    }
    display(){
       rectMode(CENTER)

       fill("black")

       rect(this.body.position.x,this.body.position.y,600,20)
    }


   }

class Rope{

constructor(body1,body2,offsetX,offsetY)
{
this.offsetX = offsetX/2;
this.offsetY = offsetY/2;
var options = {
    bodyA:body1,
    bodyB:body2,
    pointB:{x:this.offsetX/2, y:this.offsetY/2}
}

this.rope = Constraint.create(options);
World.add(world,this.rope);

}
display()
{
    var pointA = this.rope.bodyA;
    var pointB = this.rope.bodyB;

    strokeWeight(2);

    var Anchor1X = pointA.bodyA
    var Anchor1Y = pointA.bodyB

    var Anchor2X = pointB.bodyA+this.offsetbodyA
    var Anchor2Y = pointB.bodyB+this.offsetbodyB


    line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);

}
}
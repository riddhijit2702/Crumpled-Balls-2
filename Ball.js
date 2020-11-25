class Ball{

constructor(x,y,r)
{
var options={
    isStatic:false,
    density:1.2,
    restitution:1,
    friction:1,
}
this.x=x
this.y=y
this.r=r
this.body=Bodies.circle(this.x,this.y,r/0.5,options)
World.add(world,this.body)
this.image=loadImage("paper.png")
}
display(){

var paperpos=this.body.position

push()
translate(paperpos.x,paperpos.y)
rectMode(CENTER)
//stroke("red")
//strokeWeight(2)
//fill("pink")
//ellipse(0,0,this.r,this.r)
imageMode(CENTER);
 image(this.image,0,40,70,70);

pop()




}


}
class BaseClass{
    constructor(x,y,width,height){
        var options={
            friction:1.0,
            restitution:0.8,
            density:1.0
        }
        this.image=loadImage('sprites/base.png')
        this.body=Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body)
        this.width=width
        this.height=height
        }
        display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        fill('green')
        imageMode(CENTER)
        image(this.image,0,0,this.width,this.height)
        pop()
        }
}
class Brick extends Element {
    constructor(x, y, width, height){
        super(x,y,width,height);
    }
    
    paint(g){
        g.fillRect(this.x,this.y,this.width,this.height);
    }
}
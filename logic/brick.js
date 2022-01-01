class Brick extends Element {
    constructor(x, y, width, height){
        super(x,y,width,height);
    }
    
    paint(g){
        g.fillRect(this.x,this.y,this.width,this.height);
        g.strokeStyle = "rgb(128, 128, 128)";
        g.strokeRect(this.x+3, this.y+3, this.width-7, this.height-5);
    }
}
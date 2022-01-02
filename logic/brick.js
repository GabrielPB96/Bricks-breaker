class Brick extends Element {
    constructor(x, y, width, height, color){
        super(x,y,width,height, color);
        this.estatico = false;
    }
    
    paint(g){
        g.fillStyle = this.color;
        g.fillRect(this.x,this.y,this.width,this.height);
        g.strokeStyle = "rgb(128, 128, 128)";
        g.strokeRect(this.x+3, this.y+3, this.width-7, this.height-5);
        this.resetColor(g);
    }

    clone() {
        var cloneBrick = new Brick(this.x, this.y, this.width, this.height, this.color);
        cloneBrick.visible = this.visible;
        cloneBrick.estatico = this.estatico;
        return cloneBrick;
    }
}
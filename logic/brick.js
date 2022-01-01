class Brick extends Element {
    constructor(x, y, width, height){
        super(x,y,width,height);
        this.estatico = false;
    }
    
    paint(g){
        var colorFill = g.fillStyle;
        var colorStroke = g.strokeStyle;
        if(this.estatico) {
            g.fillStyle = "rgb(141, 73, 37)";
        }
        g.fillRect(this.x,this.y,this.width,this.height);
        g.strokeStyle = "rgb(128, 128, 128)";
        g.strokeRect(this.x+3, this.y+3, this.width-7, this.height-5);
        g.fillStyle = colorFill;
        g.strokeStyle = colorStroke;
    }

    clone() {
        var cloneBrick = new Brick(this.x, this.y, this.width, this.height);
        cloneBrick.visible = this.visible;
        cloneBrick.estatico = this.estatico;
        return cloneBrick;
    }
}
class Ball extends Element {
    constructor(x, y, radio, color){
        super(x,y,radio*2,radio*2, color);
        this.radio = radio;
    }
    
    paint(g){
        g.beginPath();
        g.arc(this.x,this.y,this.radio,0,Math.PI*2,false);
        g.fill();
        //g.stroke();
        this.resetColor(g);
    }

    clone() {
        return new Ball(this.x, this.y, this.radio, this.color);
    }
}
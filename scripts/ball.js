class Ball extends Element {
    constructor(x, y, radio){
        super(x,y,radio*2,radio*2);
        this.radio = radio;
    }
    
    paint(g){
        g.beginPath();
        g.arc(this.x,this.y,this.radio,0,Math.PI*2,false);
        g.fill();
        //g.stroke();
    }
}
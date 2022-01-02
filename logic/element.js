class Element {
    constructor(x, y, width, height, color = "black"){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.visible = false;
        this.color = color;
    }
    
    paint(g){
        throw "paint(g) Undefined";
    }
    
    setVisible(v){
        this.visible = v;
    }

    setX(nX) {
        this.x = nX;
    }

    setBounds(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
    }
    
    moveX(dis){
        this.x = this.x + dis;
    }
    
    moveY(dis){
        this.y = this.y + dis;
    }
    
    clone() {
        throw "clone() Undefined";
    }

    toString(){
        return "X: "+this.x+", Y: "+this.y;
    }

    resetColor(g) {
        g.fillStyle = "#000000";
        g.strokeStyle = "#000000";
    }
}
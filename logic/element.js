class Element {
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.visible = false;
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
    
    moveTop(){
        this.moveY(-1);
    }
    
    moveBottom(){
        this.moveY(1);
    }
    
    moveLeft(){
        this.moveX(-1);
    }
    
    moveRight(){
        this.moveX(1);
    }
    
    moveRightDigTop(){
        this.moveX(1);
        this.moveY(-1);
    }
    
    moveRightDigBottom(){
        this.moveX(1);
        this.moveY(1);
    }
    
    moveLeftDigTop(){
        this.moveX(-1);
        this.moveY(-1);
    }
    
    moveLeftDigBottom(){
        this.moveX(-1);
        this.moveY(1);
    }
    
    toString(){
        return "X: "+this.x+", Y: "+this.y;
    }
}
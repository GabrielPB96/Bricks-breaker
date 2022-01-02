class Bonus extends Element {
    constructor(x, y, width, height, color){
        super(x,y,width,height, color);
    }

    down() {
        this.moveY(1);
    }
}

function caer(object) {
    setInterval(function ca() {
        object.down();
        b.repaint();
    }, 20);   
}
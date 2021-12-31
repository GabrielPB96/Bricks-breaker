class Panel {
    constructor(canvas){
        this.canvas = canvas;
        this.width = canvas.width;
        this.height = canvas.height;
        this.lienzo = canvas.getContext("2d");
        this.elem = [];
        this.paint();
    }
    
    repaint(){
        this.lienzo.clearRect(0,0,this.width,this.height);
        for(let e of this.elem){
            if(e.visible == true)
                e.paint(this.lienzo);
        }
    }
    
    add(e){
        this.elem.push(e);
    }
    
    paint(){
        for(let e of this.elem){
            if(e.visible == true)
                e.paint(this.lienzo);
        }
    }
}
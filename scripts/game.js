let direction = 1;
let df = 0;
const FILAS = 10;
const COLUMNAS = 14;

class Game {
    constructor(){
        this.board = new Array();
        this.initBoard();
        this.barra = null;
        this.ball = null;
        this.d = 1;
        this.panel = null;
    }
    
    setPanel(p){
        this.panel = p;
        this.panel.add(this.ball);
        this.panel.add(this.barra);
    }
    
    initBoard(){
      for(let f=0;f<FILAS;f++){
        for(let c=0;c<COLUMNAS;c++){
          let nB=new Brick(c*21+5,f*11+10, 20,10);
          nB.setVisible(true);
          this.board.push(nB);
        }
      }
    }
    
    setBarra(nBarra){
        this.barra = nBarra;
        this.board.push(this.barra);
    }
    
    setBall(nBall){
        this.ball = nBall;
    }
    
    colision(){
        let col = false;
        for(let b of this.board){
            if(b.visible == true){
                let x,y;
                x = this.ball.x;
                y = this.ball.y;
            
                if(x < b.x) x = b.x;
                if(x > b.x + b.width) x = b.x+b.width;
            
                if(y < b.y) y = b.y;
                if(y > b.y+b.height) y = b.y+b.height;
            
                let d = Math.sqrt(Math.pow((this.ball.x-x),2)+Math.pow((this.ball.y-y),2));
            
                if(d < this.ball.radio){
                    if(b!=this.barra) b.setVisible(false);
                    col = true;
                }
          }
        }
        if(this.ball.y-this.ball.radio < 0) {
            this.ball.y+=2;
            col =  true;
        }
        if(this.ball.y+this.ball.radio > this.panel.height) {
            this.ball.y-=2;
            col =  true;
        }

        if(this.ball.x+this.ball.radio > this.panel.width) {
            col =  true;
            this.ball.x-=2;
        }
        if(this.ball.x-this.ball.radio < 0) {
            this.ball.x+=2;
            col =  true;
        }
        return col;
    }

    reset() {
        for (const e of this.board) {
            e.setVisible(true);
        }
        this.panel.repaint();
    }

    run(){  
        if(direction < 17 && direction > 12){
            this.ball.moveX(1);
            this.ball.moveY(1);
        }else if(direction < 13 && direction > 8){
            this.ball.moveX(1);
            this.ball.moveY(-1);
        }else if(direction < 9 && direction > 4){
            this.ball.moveX(-1);
            this.ball.moveY(-1);
        }else{
            this.ball.moveX(-1);
            this.ball.moveY(1);
        }
       this.panel.repaint();
       if(this.colision()==true){
            do{
                df = parseInt(Math.random() * 16 + 1);
            }while(direction == df);
            direction = df;
            console.log(direction);
            //this.d *= -1;
       }
    }
}
let direction = 1;
const FILAS = 10;
const COLUMNAS = 14;

let dy = 1;
let dx = 1;

class Game {
    constructor(){
        this.board = new Array();
        this.initBoard();
        this.barra = null;
        this.ball = null;
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
          let nB=new Brick(c*23+5,f*13+10, 20,10);
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
        let col = 0;
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
                    if(b!=this.barra){
                        sco += 10;
                        score.innerHTML = "Score: "+sco;
                        b.setVisible(false);
                    }
                        if(this.ball.y > y || this.ball.y < y){
                            col = 1
                        }
                        if(this.ball.x > x || this.ball.x < x){
                            col = 2;
                    }
                }
            }
        }
        if(this.ball.y-this.ball.radio < 0){
            col = 1;
        }
        if(this.ball.y+this.ball.radio > this.panel.height){
            col = 5;
        }
        if(this.ball.x-this.ball.radio < 0 || this.ball.x+this.ball.radio > this.panel.width){
            col = 2;
        }
        return col;
    }

    reset() {
        clearInterval(timer);
        sco = 0;
        score.innerHTML = "Score: "+sco;
        barra.setBounds(130,255,40,5);
        ball.setBounds(150,250,5);
        for (const e of this.board) {
            e.setVisible(true);
        }
        this.panel.repaint();
    }

    run(){  
        this.ball.moveY(dy);
        this.ball.moveX(dx);
        this.panel.repaint();
        let dir = this.colision();
        if(dir!=0){
            if(dir == 1){
                dy *= -1;
                this.ball.y += (3*dy);
            }else if(dir == 2){
                dx *= -1;
                this.ball.x += (3*dx);
            }else if(dir == 5) {
                enJuego = false;
            }
        }
    }
}
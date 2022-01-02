let direction = 1;
const FILAS = 10;
const COLUMNAS = 14;

let dy = 1;
let dx = 1;

let cloneBoard = [];

let N = 1;

var removeItemFromArr = ( arr, item ) => {
    var i = arr.indexOf( item );
    i !== -1 && arr.splice( i, 1 );
};

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

    loadLevel() {
        this.panel.removeAll();
        this.copyBoard();
        this.panel.add(this.ball);
        this.panel.add(this.barra);
        for(let e of cloneBoard){
            this.panel.add(e);
        }
        
        this.panel.repaint();
    }
    
    initBoard(){
      for(let f=0;f<FILAS;f++){
        for(let c=0;c<COLUMNAS;c++){
          let nB=new Brick(c*23+5,f*13+10, 20,10, "black");
          nB.setVisible(true);
          this.board.push(nB);
        }
      }
    }
    
    setBarra(nBarra){
        this.barra = nBarra;
        //this.board.push(this.barra);
    }
    
    setBall(nBall){
        this.ball = nBall;
    }
    
    colision(){
        let col = 0;
        for(let b of cloneBoard){
            if(b.visible){
                let x,y;
                x = this.ball.x;
                y = this.ball.y;
            
                if(x < b.x) x = b.x;
                if(x > b.x + b.width) x = b.x+b.width;
            
                if(y < b.y) y = b.y;
                if(y > b.y+b.height) y = b.y+b.height;
            
                let d = Math.sqrt(Math.pow((this.ball.x-x),2)+Math.pow((this.ball.y-y),2));
            
                if(d < this.ball.radio){
                    if(b!=this.barra && !b.estatico){
                        sco += 10;
                        score.textContent = "Score: "+sco;
                        b.setVisible(false);
                        //removeItemFromArr(cloneBoard, b);
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
        score.textContent = "Score: "+sco;
        barra.setBounds(130,255,40,5);
        ball.setBounds(150,250,5);
        this.loadLevel();
        this.panel.repaint();
    }

    run(){  
        this.ball.moveY(dy);
        this.ball.moveX(dx);
        this.panel.repaint();
        let dir = this.colision();
        if(dir!=0){
            if(this.win()) {
                this.panel.repaint();
                enJuego = false;
                alert("Ganaste");
                this.actualizarNivel();
            }else{
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

    actualizarNivel() {
        if(N < Level.niveles.length) {
            N++;
            console.log(N);
        }else{
            N = 1;
        }
        nivelA.textContent = "Level "+N;
        this.setLevel(Level.niveles[N-1]);
        this.loadLevel();
    }

    win() {
        for(let e of cloneBoard) {
            if(e.visible && e != barra && !e.estatico) {
                return false;
            }
        }
        return true;
    }

    setLevel(nuevoLevel) {
        this.board = nuevoLevel.getBoard();
    }

    copyBoard(){
        cloneBoard = [];
        for(let e of this.board) {
            var cloneElem = e.clone();
            cloneBoard.push(cloneElem);
        }
        cloneBoard.push(this.barra);
    }
}
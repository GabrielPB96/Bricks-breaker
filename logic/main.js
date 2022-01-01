var game = new Game();
let pause = false;
let enJuego = false;
let sco = 0;

var barra = new Brick(130,255,40,5);
var ball = new Ball(150,250,5);

var timer;

var score;

function init(){
    barra.setVisible(true);
    ball.setVisible(true);
    
    var ele = document.getElementById("lienzo");
    score = document.getElementById("score");

    ele.addEventListener("mousemove", moveBarra, false);
    ele.addEventListener("touchmove",moveBarra,false);
    
    var b = new Panel(ele);
    
    game.setBall(ball);
    game.setBarra(barra);

    for(let e of game.board){
        b.add(e);
    }
    
    game.setPanel(b);
    game.panel.repaint();
}

function moveBarra(event){
    let X,Y;
    if(enJuego) {
        event.preventDefault();
        if (event.changedTouches == undefined) { 
            X = event.layerX;
            Y = event.layerY; 
        } else {
            X = event.changedTouches[0].pageX;
            Y = event.changedTouches[0].pageY; 
        }
        X = parseInt(X);
        Y = parseInt(Y);
        barra.setX(X-parseInt(barra.width/2));
    }
}

function reset(){
    pause = false;
    enJuego = false;
    game.reset();
}

function run(){
    pause = false;
    if(!enJuego) {
        enJuego = true;
        timer = setInterval(function(){
            if(!pause && enJuego) {
                game.run();
            }else{
                if(!enJuego){
                    reset();
                    clearInterval(timer);
                    inicio = true;
                }
            }
        },5);
    }
}

function pausar() {
    pause = true;
}

window.addEventListener("load",init,false);
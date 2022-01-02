var game = new Game();
let pause = false;
let enJuego = false;
let sco = 0;

var barra = new Brick(130,255,40,5, "black");
var ball = new Ball(150,250,5, "black");
var star = new Star(100, 100, 20, 20, "yellow");
star.setVisible(true);

var timer;

var score;
var nivelA;

var b;

function init(){
    Level.initNiveles();

    barra.setVisible(true);
    ball.setVisible(true);
    
    var ele = document.getElementById("lienzo");
    score = document.getElementById("score");
    nivelA = document.getElementById("nivel");

    ele.addEventListener("mousemove", moveBarra, false);
    ele.addEventListener("touchmove",moveBarra,false);
    
    b = new Panel(ele);
    
    game.setBall(ball);
    game.setBarra(barra);
    
    game.setPanel(b);
    game.setLevel(Level.niveles[0]);
    game.loadLevel();
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
                }
            }
        },10);
    }
}

function pausar() {
    pause = true;
}

window.addEventListener("load",init,false);
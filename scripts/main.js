var game = new Game();
let pause = false;
let enJuego = false;

function init(){
    var r = new Brick(138,255,25,5);
    var c = new Ball(150,250,5);
    r.setVisible(true);
    c.setVisible(true);
    
    var ele = document.getElementById("lienzo");
    var lienzo = ele.getContext("2d");
    
    var b = new Panel(ele);
    
    game.setBall(c);
    game.setBarra(r);

    for(let e of game.board){
        b.add(e);
    }
    
    game.setPanel(b);
    game.panel.repaint();
}

function run(){
    pause = false;
    if(!enJuego) {
        enJuego = true;
        var timer = setInterval(function(){
            if(!pause && enJuego) {
                game.run();
            }else{
                if(!enJuego){
                    init();
                    game.reset();
                    clearInterval(timer);
                }
            }
        },5);
    }
}

function pausar() {
    pause = true;
}

window.addEventListener("load",init,false);
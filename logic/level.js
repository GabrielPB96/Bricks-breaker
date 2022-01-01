class Level {
    static niveles = [];
    constructor(filas, columnas) {
        this.filas = filas;
        this.columnas = columnas;
        this.tablero = [];
        this.initBoard();
    }

    initBoard() {
        for(let f=0; f < this.filas; f++) {
            for(let c=0; c < this.columnas; c++) {
                this.tablero.push(new Brick(c*23+5,f*13+10, 20,10));
            }
        }
    }

    createLevel(patron){
        if(patron.length == this.filas && patron[0].length == this.columnas) {
            let pos = 0;
            for(let f=0; f < this.filas; f++) {
                for(let c=0; c < this.columnas; c++) {
                    if(patron[f][c] == 1) {
                        this.tablero[pos].setVisible(true);
                    }else if(patron[f][c] == 2) {
                        this.tablero[pos].setVisible(true);
                        this.tablero[pos].estatico = true;
                    }
                    pos++;
                }
            }
        }else{
            throw "patron no valido";
        }
    }

    show() {
        let pos = 0;
        for(let f=0; f < this.filas; f++) {
            let report = "";
            for(let c=0; c < this.columnas; c++) {
                if(this.tablero[pos].visible) {
                    report += 1+" ";
                }else{
                    report += 0+" ";
                }
                pos++;
            }
            console.log(report);
        }
    }

    getBoard() {
        var cloneB = [];
        for(let e of this.tablero) {
            cloneB.push(e.clone());
        }
        return cloneB;
    }

    static initNiveles(){
        var n1 = new Level(10, 14);
        var patron1 = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                      [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
                      [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
                      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                      [0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0],
                      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
        n1.createLevel(patron1);

        var n2 = new Level(10, 14);
        var patron2 = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                      [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
                      [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
                      [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
                      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                      [0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0],
                      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
        n2.createLevel(patron2);

        var n3 = new Level(10, 14);
        var patron3 = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                      [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
                      [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
                      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                      [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
                      [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
                      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                      [0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0],
                      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
        n3.createLevel(patron3);

        Level.niveles.push(n1);
        Level.niveles.push(n2);
        Level.niveles.push(n3);
    }
}

function prueba() {
    var level = new Level(4, 4);
    var patron = [[1, 1, 0, 1],[1, 0, 0, 1],[1, 0, 0, 0],[1, 1, 1, 1]];
    level.createLevel(patron);
    level.show();
}
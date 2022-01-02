class Star extends Bonus{
    constructor(x, y, width, height, color) {
        super(x, y, width, height, color);
    }

    paint(g) {
        g.fillStyle = this.color;
        g.fillRect(this.x, this.y, this.width, this.height);
        this.resetColor(g);
    }
}
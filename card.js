class Card {
    //create card class when doing webgl builds of these -> for now 2d
    constructor(src, x, y, w, h, angle){
        this.src = src;
        this.x = x;
        this.y = y;
        this.angle = angle;
        this.w = w;
        this.h = h;
    }

    image(){
        image(this.src, this.x, this.y, this.w, this.h);
    }
}
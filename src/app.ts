class Fanto {
    SLOW: number;
    MEDIUM: number;
    FAST: number;
    private SPEED: number;
    private ON: boolean;
    private RADIUS: number;
    private COLOR: string;
    constructor() {
        this.SLOW = 1;
        this.MEDIUM = 2;
        this.FAST = 3;
        this.SPEED = 1;
        this.ON = false;
        this.RADIUS = 5;
        this.COLOR = "blue";
    }
    toString() {
        if (this.ON == false) {
            return `Color:${this.COLOR} , Radius:${this.RADIUS}, "fan is off"`;
        } else if (this.ON == true) {
            return `Speed:${this.SPEED}, Color:"yellow" , Radius:${this.RADIUS}, "fan is on"`;
        }
    }

    set setSpeed(speed: number) {
        this.SPEED = speed;
    }
    set setRadius(radius: number) {
        this.RADIUS = radius;
    }
    set setOn(on: boolean) {
        this.ON = on;
    }
}

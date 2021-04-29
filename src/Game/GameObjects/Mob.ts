import GameObject from "../GameObject";

export default class Mob extends GameObject {
    private maxSpeed: number = 50;
    private xSpeed: number = 0;
    private ySpeed: number = 0;

    constructor(x: number, y: number) {
        super(x, y, 0, 32, 32);
        this.setRandomSpeed();

        setTimeout(() => this.setRandomSpeed, 5000);
    }

    public OnDraw(deltaTime: number, heldKeys: Array<string>): void {
        this.context.fillStyle = "red";
        this.context.fillRect(this.X, this.Y, this.Width, this.Height);
    }

    public OnTick(deltaTime: number, heldKeys: Array<string>): void {
        if(this.IsFree(this.X + this.xSpeed * deltaTime, this.Y))
            this.X += this.xSpeed * deltaTime;

        if(this.IsFree(this.X, this.Y + this.ySpeed * deltaTime))
            this.Y += this.ySpeed * deltaTime;
    }

    private setRandomSpeed() {
        this.xSpeed = Math.round(Math.random() * this.maxSpeed * 2) - this.maxSpeed;
        this.ySpeed = Math.round(Math.random() * this.maxSpeed * 2) - this.maxSpeed;

        setTimeout(() => this.setRandomSpeed, 2000);
    }
}
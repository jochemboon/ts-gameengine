import GameObject from "../GameObject";

export default class Mob extends GameObject {
    private _maxSpeed: number = 50;
    private _xSpeed: number = 0;
    private _ySpeed: number = 0;

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
        if(this.IsFree(this.X + this._xSpeed * deltaTime, this.Y))
            this.X += this._xSpeed * deltaTime;

        if(this.IsFree(this.X, this.Y + this._ySpeed * deltaTime))
            this.Y += this._ySpeed * deltaTime;
    }

    private setRandomSpeed() {
        this._xSpeed = Math.round(Math.random() * this._maxSpeed * 2) - this._maxSpeed;
        this._ySpeed = Math.round(Math.random() * this._maxSpeed * 2) - this._maxSpeed;

        setTimeout(() => this.setRandomSpeed, 2000);
    }
}
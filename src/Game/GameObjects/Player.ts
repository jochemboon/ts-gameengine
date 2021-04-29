import GameObject from '../GameObject';

export default class Player extends GameObject {
    private speed = 200;

    constructor(x: number, y: number) {
        super(x, y, 0, 32, 32);
    }

    public OnDraw(deltaTime: number, heldKeys: Array<string>): void {
        this.context.fillStyle = "blue";
        this.context.fillRect(this.X, this.Y, this.Width, this.Height);
    }

    public OnTick(deltaTime: number, heldKeys: Array<string>) {
        if(heldKeys.includes("a") && this.IsFree(this.X - this.speed * deltaTime, this.Y))
            this.X -= this.speed * deltaTime;
            
        if(heldKeys.includes("d") && this.IsFree(this.X + this.speed * deltaTime, this.Y))
            this.X += this.speed * deltaTime;

        if(heldKeys.includes("w") && this.IsFree(this.X, this.Y - this.speed * deltaTime))
            this.Y -= this.speed * deltaTime;

        if(heldKeys.includes("s") && this.IsFree(this.X, this.Y + this.speed * deltaTime))
            this.Y += this.speed * deltaTime;

        if(heldKeys.length == 0) {
            this.X = Math.round(this.X);
            this.Y = Math.round(this.Y);
        }
    }
}
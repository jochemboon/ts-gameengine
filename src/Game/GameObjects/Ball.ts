import GameObject from '../GameObject';

export default class Ball extends GameObject {
    constructor(x: number, y: number) {
        super(x, y, 0, 32, 32);
    }

    public OnDraw(deltaTime: number, heldKeys: Array<string>): void {
        this.context.fillStyle = "black";
        this.context.fillRect(this.X, this.Y, this.Width, this.Height);
    }

    public OnTick(deltaTime: number, heldKeys: Array<string>): void {
        if(this.IsFree(this.X + 10 * deltaTime, this.Y))
            this.X += 10 * deltaTime;
    }
}
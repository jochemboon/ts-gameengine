import GameObject from '../GameObject';

export default class Wall extends GameObject {
    constructor(x: number, y: number) {
        super(x, y, 0, 32, 32);
    }

    public OnDraw(deltaTime: number, heldKeys: Array<string>): void {
        this.context.fillStyle = "green";
        this.context.fillRect(this.X, this.Y, this.Width, this.Height);
    }

    public OnTick(deltaTime: number, heldKeys: Array<string>): void {
    }
}
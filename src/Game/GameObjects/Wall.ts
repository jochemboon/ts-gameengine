import GameObject from '../GameObject';
import ViewPort from "../ViewPort";
import {RectType} from "../RectType";

export default class Wall extends GameObject {
    constructor(x: number, y: number) {
        super(x, y, 0, 32, 32);
        this.Type = "Wall";
    }

    public OnDraw(deltaTime: number, heldKeys: Array<string>, viewPort: ViewPort): void {
        viewPort.DrawSquare(this.X, this.Y, this.Width, this.Height, "black", RectType.Fill)
    }

    public OnTick(deltaTime: number, heldKeys: Array<string>): void {
    }
}
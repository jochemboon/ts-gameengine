import GameObject from '../GameObject';
import ViewPort from "../ViewPort";
import {RectType} from "../RectType";

export default class Player extends GameObject {
    private _speed = 200;

    constructor(x: number, y: number) {
        super(x, y, 0, 32, 32);
        this.Type = "Player";
    }

    public OnDraw(deltaTime: number, heldKeys: Array<string>, viewPort: ViewPort): void {
        viewPort.SetPosition(this.X - viewPort.Width / 2, this.Y - viewPort.Height / 2);
        viewPort.DrawSquare(this.X, this.Y, this.Width, this.Height, "blue", RectType.Fill)
        viewPort.DrawSquare(0, 0, 800, 600, "black", RectType.Stroke);
        viewPort.DrawTextAbsolute(32, 32, `p x: ${this.X}, p y: ${this.Y}`, "black");
    }

    public OnTick(deltaTime: number, heldKeys: Array<string>) {
        if(heldKeys.includes("a") && this.IsFree(this.X - this._speed * deltaTime, this.Y))
            this.X -= this._speed * deltaTime;
            
        if(heldKeys.includes("d") && this.IsFree(this.X + this._speed * deltaTime, this.Y))
            this.X += this._speed * deltaTime;

        if(heldKeys.includes("w") && this.IsFree(this.X, this.Y - this._speed * deltaTime))
            this.Y -= this._speed * deltaTime;

        if(heldKeys.includes("s") && this.IsFree(this.X, this.Y + this._speed * deltaTime))
            this.Y += this._speed * deltaTime;
    }
}
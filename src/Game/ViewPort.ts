import {RectType} from "./GameObjects/RectType";

export default class ViewPort {
    public Width: number;
    public Height: number;
    public X: number;
    public Y: number;

    private _canvas: HTMLCanvasElement;
    private _context: CanvasRenderingContext2D;

    constructor(x: number, y: number, width: number, height: number, canvas: HTMLCanvasElement) {
        this.Width = width;
        this.Height = height;

        this.X = x;
        this.Y = y;

        this._canvas = canvas;
        this._context = canvas.getContext("2d") as CanvasRenderingContext2D;
    }

    public Clear() {
        this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
    }

    public DrawSquare(x: number, y: number, width: number, height: number, colorCode: string, type: RectType) {
        let drawX: number = x - this.X;
        let drawY: number = y - this.Y;

        if (x >= this.X + this.Width || x + width < this.X )
            return false;

        if (y >= this.Y + this.Height || y + height < this.Y )
            return;

        // TODO: maybe perform this with a delegate instead
        this._context.fillStyle = colorCode;

        switch(type) {
            case RectType.Clear: {
                this._context.clearRect(drawX, drawY, width, height);
                break;
            }
            case RectType.Fill: {
                this._context.fillRect(drawX, drawY, width, height);
                break;
            }
            case RectType.Stroke: {
                this._context.strokeRect(drawX, drawY, width, height);
                break;
            }
            default: {
                this._context.rect(drawX, drawY, width, height);
            }
        }
    }

    public DrawTextAbsolute(x: number, y: number, text: string, colorCode: string) {
        this._context.fillStyle = colorCode;
        this._context.fillText(text, x, y);
    }

    public SetPosition(x: number, y: number) {
        this.X = x;
        this.Y = y;
    }

    // Circle
    // Rectangle
    // Line
    // Text
    // Image
    // Rotation?
}
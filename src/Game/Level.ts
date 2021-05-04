import GameObject from './GameObject';

export default class Level {
    public Name: string;
    public GameObjects: Array<GameObject>;
    private _canvas: HTMLCanvasElement;
    private _context: CanvasRenderingContext2D;
    public lastTick: number = 0;
    public lastDraw: number = 0;

    constructor(name: string, gameObjects: Array<GameObject>, canvas: HTMLCanvasElement) {
        this.Name = name;
        this._canvas = canvas;
        this._context = canvas.getContext("2d") as CanvasRenderingContext2D;
        this.GameObjects = new Array<GameObject>();

        if (gameObjects != null && gameObjects != undefined) {
            gameObjects.forEach(gameObject => {
                gameObject.SetLevel(this);
                this.GameObjects.push(gameObject);
            });
        }            
    }

    public GetCanvas(): HTMLCanvasElement {
        return this._canvas;
    }

    public ClearCanvas(): void{
        this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
    }

    public AddGameObject(gameObject: GameObject): void {
        gameObject.SetLevel(this);
        this.GameObjects.push(gameObject);
    }

    public RemoveGameObject(gameObject: GameObject): void {
        // TODO: Implement
    }
}
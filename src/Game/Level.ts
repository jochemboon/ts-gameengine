import GameObject from './GameObject';

export default class Level {
    public Name: string;
    public GameObjects: Array<GameObject>;
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;
    public lastTick: number = 0;
    public lastDraw: number = 0;
    public wrapsOutOfBounds: boolean = true;
    public width: number = 800;
    public height: number = 600;

    constructor(name: string, gameObjects: Array<GameObject>, canvas: HTMLCanvasElement) {
        this.Name = name;
        this.canvas = canvas;
        this.context = canvas.getContext("2d") as CanvasRenderingContext2D; 
        this.GameObjects = new Array<GameObject>();

        if (gameObjects != null && gameObjects != undefined) {
            gameObjects.forEach(gameObject => {
                gameObject.SetLevel(this);
                this.GameObjects.push(gameObject);
            });
        }            
    }

    public GetCanvas(): HTMLCanvasElement {
        return this.canvas;
    }

    public ClearCanvas(): void{
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    public AddGameObject(gameObject: GameObject): void {
        gameObject.SetLevel(this);
        this.GameObjects.push(gameObject);
    }

    public RemoveGameObject(gameObject: GameObject): void {
        // TODO: Implement
    }
}
import Level from './Level';
import ViewPort from "./ViewPort";
import Game from "./Game";

export default abstract class GameObject {
    public X: number;
    public Y: number;
    public Z: number;
    public Width: number;
    public Height: number;

    // TODO: Find a better way to pass these references. Currently they can modified after the creation of the instance, this should not be possible.
    protected Type: string;
    protected level: Level = undefined;
    protected context: CanvasRenderingContext2D = undefined;

    constructor(x: number, y: number, z: number, width: number, height: number) {
        this.X = x;
        this.Y = y;
        this.Z = z;
        this.Width = 32;
        this.Height = 32;
    }

    /** Sets the GameObject's level. Should only be used to pass the current level reference.
     * @param level The reference to the current level.
     */
    public SetLevel(level: Level) {
        this.level = level;
    }

    /** Checks for a collision between this and any other GameObject at a given position.
     * @param x X Coordinate of the position.
     * @param y Y Coordinate of the position.
     * @param other The other GameObjects to check the collision with. 
     * @returns True if there would be a collision, false if there would not be a collision.
     */
    public IsFree(x: number, y: number) {
        let gameObjects: Array<GameObject> = this.level.GameObjects.filter(gameObject => gameObject != this);

        let i = 0;
        while(i < gameObjects.length) {
            if (this.IsCollisionWith(x, y, gameObjects[i]))
                return false;

            i++;
        }
        
        return true;
    }

    /** Checks for a collision between this and another GameObject at a given position.  
     * @param x X Coordinate of the position.
     * @param y Y Coordinate of the position.
     * @param other The other GameObject to check the collision with. 
     * @returns True if there would be a collision, false if there would not be a collision.
     */
    public IsCollisionWith(x: number, y:number, other: GameObject): boolean {
        if (x >= other.X + other.Width || x + this.Width < other.X )
            return false;

        if (y >= other.Y + other.Height || y + this.Height < other.Y )
            return false;

        return true
    }

    public GetType(): string {
        return this.Type;
    }

    /** Executed each tick. Use this to define behavior. */
    public OnTick(deltaTime: number, heldKeys: Array<string>) { }

    /** Executed each draw cycle. Use this to draw visuals. */
    public OnDraw(deltaTime: number, heldKeys: Array<string>, viewPort: ViewPort) { }

    public OnKeyDown(e: KeyboardEvent) {}

    public OnKeyUp(e: KeyboardEvent) {}

    public OnClick(e: MouseEvent) {}
}
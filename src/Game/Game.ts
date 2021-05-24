import GameObject from "./GameObject";
import Level from "./Level";
import ViewPort from "./ViewPort";

export default class Game {
    private _heldKeys: Array<string> = new Array<string>();
    private _deltaTimes: Array<number> = new Array<number>();
    private _lastTimeStamp: number = 0;
    private _level: Level;
    private _viewPort: ViewPort;

    public Start(): void {
        this._lastTimeStamp = 0;
        window.requestAnimationFrame((ts) => this.iterate(ts));
    }

    public SetLevel(level: Level): void {
        this._level = level;
    }

    public SetViewPort(viewPort: ViewPort): void {
        this._viewPort = viewPort;
    }

    private iterate(timeStamp: number): void {
        // Calculate delta time
        let deltaTime = (timeStamp - this._lastTimeStamp) / 1000;
        this._lastTimeStamp = timeStamp;
        this._deltaTimes.push(deltaTime);

        // Execute game logic
        let i: number = 0;
        while(i < this._level.GameObjects.length) {
            this._level.GameObjects[i].OnTick(deltaTime, this._heldKeys);
            i++;
        }

        this._viewPort.Clear();

        i = 0;
        while(i < this._level.GameObjects.length) {
            this._level.GameObjects[i].OnDraw(deltaTime, this._heldKeys, this._viewPort);
            i++;
        }

        // Request next frame
        window.requestAnimationFrame((ts) => this.iterate(ts));
    }

    // User input handlers
    public OnKeyDown(e: KeyboardEvent): void {
        if (!this._heldKeys.includes(e.key)) {
            this._heldKeys.push(e.key);
        }

        let i: number = 0;
        while(i < this._level.GameObjects.length) {
            this._level.GameObjects[i].OnKeyDown(e);
            i++;
        }
    }
    
    public OnKeyUp(e: KeyboardEvent): void {
        if (this._heldKeys.includes(e.key)) {
            let index = this._heldKeys.indexOf(e.key);
            this._heldKeys.splice(index, 1);
        }

        let i: number = 0;
        while(i < this._level.GameObjects.length) {
            this._level.GameObjects[i].OnKeyUp(e);
            i++
        }
    }

    public OnClick(e: MouseEvent): void {
        let x = e.offsetX;
        let y = e.offsetY;    
        console.log(`Mouse click at { ${x}, ${y}}`);

        let i: number = 0;
        while(i < this._level.GameObjects.length) {
            this._level.GameObjects[i].OnClick(e);
            i++;
        }
    }
}
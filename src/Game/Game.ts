import GameObject from "./GameObject";
import Level from "./Level";

export default class Game {
    private heldKeys: Array<string> = new Array<string>();
    private deltaTimes: Array<number> = new Array<number>();
    private lastTimeStamp: number = 0;
    private level: Level;

    public Start(): void {
        this.lastTimeStamp = 0;
        window.requestAnimationFrame((ts) => this.Iterate(ts));        
    }

    public SetLevel(level: Level): void {
        this.level = level;
    }

    private Iterate(timeStamp: number): void {
        // Calculate delta time
        let deltaTime = (timeStamp - this.lastTimeStamp) / 1000;        
        this.lastTimeStamp = timeStamp;
        this.deltaTimes.push(deltaTime);

        // Execute game logic
        let i: number = 0;
        while(i < this.level.GameObjects.length) {
            this.level.GameObjects[i].OnTick(deltaTime, this.heldKeys);
            i++;
        }

        this.level.ClearCanvas();

        i = 0;
        while(i < this.level.GameObjects.length) {
            this.level.GameObjects[i].OnDraw(deltaTime, this.heldKeys);
            i++;
        }

        // Request next frame
        window.requestAnimationFrame((ts) => this.Iterate(ts));
    }

    // User input handlers
    public onKeyDown(e: KeyboardEvent): void {
        if (!this.heldKeys.includes(e.key)) {
            this.heldKeys.push(e.key);
        }

        let i: number = 0;
        while(i < this.level.GameObjects.length) {
            this.level.GameObjects[i].onKeyDown(e);
            i++;
        }
    }
    
    public onKeyUp(e: KeyboardEvent): void {
        if (this.heldKeys.includes(e.key)) {
            let index = this.heldKeys.indexOf(e.key);
            this.heldKeys.splice(index, 1);
        }

        let i: number = 0;
        while(i < this.level.GameObjects.length) {
            this.level.GameObjects[i].onKeyUp(e);
            i++
        }
    }

    public onClick(e: MouseEvent): void {
        let x = e.offsetX;
        let y = e.offsetY;    
        console.log(`Mouse click at { ${x}, ${y}}`);

        let i: number = 0;
        while(i < this.level.GameObjects.length) {
            this.level.GameObjects[i].onClick(e);
            i++;
        }
    }
}
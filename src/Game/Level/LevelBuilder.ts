import LevelManager from "./LevelManager";
import Level from "../Level";
import Game from "../Game";
import GameObject from "../GameObject";

export default class LevelBuilder extends LevelManager {
    private _selectedGameObject: string;
    private _level: Level;

    constructor() {
        super();
        this._selectedGameObject = "Wall";
    }

    public SetLevel(level: Level): void {
        this._level = level;
    }

    public SetSelectedGameObject(gameObject: string): boolean {
        if(!this.availableGameObjects.includes(gameObject))
            return false;

        this._selectedGameObject = gameObject;
        return true;
    }

    public GetSelectedGameObject(): string {
        return this._selectedGameObject;
    }

    public OnClick(e: MouseEvent): void {
        let x = e.offsetX;
        let y = e.offsetY;

        // TODO: Calculate viewport offset

        let newGameObject: GameObject = this.createGameObject(this._selectedGameObject, x, y);
        this._level.AddGameObject(newGameObject);
    }
}
import GameObject from "../GameObject";
import Wall from "../GameObjects/Wall";
import Ball from "../GameObjects/Ball";
import Player from "../GameObjects/Player";
import Mob from "../GameObjects/Mob";

export default abstract class LevelManager {
    protected availableGameObjects: Array<string>;

    protected constructor() {
        this.availableGameObjects = new Array<string>();
        this.availableGameObjects.push(
            "Ball",
            "Mob",
            "Player",
            "Wall"
        );
    }

    /**
     *
     * @param type
     * @param x
     * @param y
     * @returns
     */
    protected createGameObject(type: String, x: number, y: number): GameObject {
        switch(type) {
            case "Wall":{
                return new Wall(x, y);
            }
            case "Ball": {
                return new Ball(x, y);
            }
            case "Player": {
                return new Player(x, y);
            }
            case "Mob": {
                return new Mob(x, y);
            }
            default: {
                break;
            }
        }
    }
}
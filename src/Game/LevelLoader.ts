import GameObject from "./GameObject";
import Ball from "./GameObjects/Ball";
import Mob from "./GameObjects/Mob";
import Player from "./GameObjects/Player";
import Wall from "./GameObjects/Wall";
import Level from "./Level";

export default class LevelLoader {
    /**
     * Converts a JSON object to a level.
     * @returns 
     */
    public Load(json: any, canvas: HTMLCanvasElement): Level {
        console.log("Loading " + json.name + "...");
        let objects = new Array<GameObject>();

        for (const gameObjectJson of json.gameObjects) {
            let gameObject = this.createGameObject(gameObjectJson.type, gameObjectJson.x, gameObjectJson.y);
            console.log("Creating " + gameObjectJson.type)
            objects.push(gameObject);
        }

        console.log(json.name + " loaded!")

        return new Level("Name", objects);
    }

    /**
     * 
     * @param type 
     * @param x 
     * @param y 
     * @returns 
     */
    private createGameObject(type: String, x: number, y: number): GameObject {
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

    /**
     * Converts a level to a JSON string, the level is converted in it's current state.
     * @param level
     * @returns 
     */
    public ToJson(level: Level): String {
        return ""
    }
}
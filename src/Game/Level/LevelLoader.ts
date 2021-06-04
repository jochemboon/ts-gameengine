import GameObject from "../GameObject";
import Level from "../Level";
import LevelManager from "./LevelManager";

export default class LevelLoader extends LevelManager {
    constructor() {
        super();
    }

    /**
     * Converts a JSON object to a level.
     * @returns 
     */
    public Load(json: any, canvas: HTMLCanvasElement): Level {
        console.log("Loading " + json.name + "...");
        let objects = new Array<GameObject>();

        for (const gameObjectJson of json.gameObjects) {
            if(!this.availableGameObjects.includes(gameObjectJson.type))
                continue;

            let gameObject = this.createGameObject(gameObjectJson.type, gameObjectJson.x, gameObjectJson.y);
            console.log("Creating " + gameObjectJson.type)
            objects.push(gameObject);
        }

        console.log(json.name + " loaded!")

        return new Level("Name", objects);
    }

    /**
     * Converts a level to a JSON string, the level is converted in it's current state.
     * @param level
     * @returns 
     */
    public ToJson(level: Level): String {
        let gameObjects = [];

        let i: number = 0;
        while(i < level.GameObjects.length) {
            let gameObjectJson = {
                type: level.GameObjects[i].GetType(),
                x: level.GameObjects[i].X,
                y: level.GameObjects[i].Y
            };

            gameObjects.push(gameObjectJson);
            i++;
        }

        return JSON.stringify(gameObjects);
    }
}
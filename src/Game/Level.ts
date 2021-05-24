import GameObject from './GameObject';

export default class Level {
    public Name: string;
    public GameObjects: Array<GameObject>;

    constructor(name: string, gameObjects: Array<GameObject>) {
        this.Name = name;
        this.GameObjects = new Array<GameObject>();

        if (gameObjects != null && gameObjects != undefined) {
            gameObjects.forEach(gameObject => {
                gameObject.SetLevel(this);
                this.GameObjects.push(gameObject);
            });
        }            
    }

    public AddGameObject(gameObject: GameObject): void {
        gameObject.SetLevel(this);
        this.GameObjects.push(gameObject);
    }

    public RemoveGameObject(gameObject: GameObject): void {
        // TODO: Implement
    }
}
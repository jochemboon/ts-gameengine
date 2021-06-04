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

        this.OrderDepth();
    }

    public OrderDepth(): void {
        this.GameObjects.sort((go1: GameObject, go2: GameObject) => {
           if (go1.Z > go2.Z)
               return 1;

           if(go1.Z < go2.Z)
               return -1;

           return 0;
        });
    }

    public AddGameObject(gameObject: GameObject): void {
        gameObject.SetLevel(this);
        this.GameObjects.push(gameObject);
    }

    public RemoveGameObject(gameObject: GameObject): void {
        // TODO: Implement
    }
}
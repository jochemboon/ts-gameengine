import Game from './Game/Game';
import LevelLoader from './Game/LevelLoader';
import * as LevelData from './testlevel.json';
import ViewPort from "./Game/ViewPort";

let canvas = document.getElementById("gamescreen") as HTMLCanvasElement;
const game = new Game();

// Register keyboard events
document.addEventListener('keydown', (e) => game.OnKeyDown(e), false);
document.addEventListener('keyup',  (e) => game.OnKeyUp(e), false);
canvas.addEventListener('click',  (e) => game.OnClick(e), false);

// Load level 
let levelLoader = new LevelLoader();
let level = levelLoader.Load(LevelData, canvas);
game.SetLevel(level);

let viewPort = new ViewPort(0, 0, canvas.width, canvas.height, canvas);
game.SetViewPort(viewPort);

// Start gamesd
game.Start();
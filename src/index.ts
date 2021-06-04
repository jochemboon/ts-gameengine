import Game from './Game/Game';
import LevelLoader from './Game/Level/LevelLoader';
import * as LevelData from './testlevel.json';
import ViewPort from "./Game/ViewPort";
import LevelBuilder from "./Game/Level/LevelBuilder";

let canvas = document.getElementById("gamescreen") as HTMLCanvasElement;
const game = new Game();

// Register keyboard events
document.addEventListener('keydown', (e) => game.OnKeyDown(e), false);
document.addEventListener('keyup',  (e) => game.OnKeyUp(e), false);
canvas.addEventListener('click',  (e) => game.OnClick(e), false);

let levelBuilder = new LevelBuilder();
canvas.addEventListener('click',  (e) => levelBuilder.OnClick(e), false);

// Load level 
let levelLoader = new LevelLoader();
let level = levelLoader.Load(LevelData, canvas);
game.SetLevel(level);
levelBuilder.SetLevel(level);

let levelJson = levelLoader.ToJson(level);
console.log(levelJson);

let viewPort = new ViewPort(0, 0, canvas.width, canvas.height, canvas);
game.SetViewPort(viewPort);

// Start games
game.Start();
import Game from './Game/Game';
import Level from './Game/Level'
import LevelLoader from './Game/LevelLoader';
import * as LevelData from './testlevel.json';

let canvas = document.getElementById("gamescreen") as HTMLCanvasElement;
const game = new Game();

// Register keyboard events
document.addEventListener('keydown', (e) => game.onKeyDown(e), false);
document.addEventListener('keyup',  (e) => game.onKeyUp(e), false);
canvas.addEventListener('click',  (e) => game.onClick(e), false);

// Load level 
let levelLoader = new LevelLoader();
let level = levelLoader.Load(LevelData, canvas);
game.SetLevel(level);

// Start game
game.Start();
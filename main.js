import './style.css'
import * as PIXI from 'pixi.js'
import { Board } from './game/board'
// create a new Sprite from an image path
const app = new PIXI.Application();
await app.init({ width: 900, height: 900 });

// add canvas to DOM
document.getElementById('app').appendChild(app.canvas);

const board = new Board(app, 90, 10);
app.stage.addChild(board.container);

import * as PIXI from 'pixi.js';

export class Board {
  constructor(app, slotSize, boardSize) {
    this.app = app;
    this.slotSize = slotSize;
    this.boardSize = boardSize;
    this.container = new PIXI.Container();
    this.createBoard();
    this.centerBoard();
  }

  createBoard() {
    for (let row = 0; row < this.boardSize; row++) {
      for (let col = 0; col < this.boardSize; col++) {
        const slot = new PIXI.Graphics();
        slot.fill(row % 2 === col % 2 ? 0x2F8C4B : 0x39AB5C);
        slot.rect(0, 0, this.slotSize, this.slotSize);
        slot.fill() // TODO: check why we need this 
        slot.x = col * this.slotSize;
        slot.y = row * this.slotSize;
        this.container.addChild(slot);
      }
    }
  }

  centerBoard() {
    this.container.x = (this.app.screen.width - this.container.width) / 2;
    this.container.y = (this.app.screen.height - this.container.height) / 2;
  }
}

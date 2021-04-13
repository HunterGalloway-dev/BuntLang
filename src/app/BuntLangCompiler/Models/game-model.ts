import { CardinalDirection } from './../Enums/cardinal-direction.enum';
import { Player } from './player';
import { Cell } from '../Enums/cell.enum';

const numRows = 20;
const numCols = 10;

export class GameModel {

  private rep: Cell[][] = [[]];
  private player: Player = new Player();

  constructor() {
    for(let r = 0; r < numRows; r++) {
      this.rep[r] = [];
      for(let c = 0; c < numCols; c++) {
        this.rep[r][c] = Cell.EMPTY;
      }
    }
    const intialPos = this.player.getPos();
    this.setCellAtLoc(intialPos, Cell.PLAYER);
  }

  movePlayer() {
    const intialPos = this.player.getPos();
    const nextMovePos = this.player.generateMovePos();

    if(nextMovePos[0] >= 0 && nextMovePos[1] >= 0 &&
        nextMovePos[0] < numRows && nextMovePos[1] < numCols) {
      let cellAtPos: Cell = this.getCellAtLoc(nextMovePos);

      switch(cellAtPos) {
        case Cell.EMPTY: {
          this.player.setPos(nextMovePos);

          this.setCellAtLoc(intialPos, Cell.EMPTY);
          this.setCellAtLoc(nextMovePos, Cell.PLAYER);

          break;
        }
        default: {
        }
      }
    }
  }

  turnLeft() {
    this.player.turnLeft();
  }

  turnRight() {
    this.player.turnRight();
  }

  turn180() {
    this.player.turn180();
  }

  getCellAtLoc(pos: number[]): Cell {
    return this.rep[pos[0]][pos[1]];
  }

  setCellAtLoc(pos: number[], cell: Cell) {
    this.rep[pos[0]][pos[1]] = cell;
  }

  getPlayerDirection(): CardinalDirection {
    return this.player.getDirection().dir;
  }

  prettyPrint() {
    let out = "";
    let tmp = ""
    for(let r = 0; r < numRows; r++) {
      for(let c = 0; c < numCols; c++) {
        tmp += (this.rep[r][c] + " ");
      }
      out += "{ " + tmp + "}\n";
      tmp = "";
    }

    console.log(out);
  }
}

export {numRows, numCols};

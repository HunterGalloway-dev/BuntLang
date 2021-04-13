import { CardinalDirection } from '../Enums/cardinal-direction.enum';
import { Cell } from '../Enums/cell.enum';
import { Direction } from './direction';
import { GameModel } from './game-model';
export class Player {

  private direction: Direction = new Direction();
  private curPos: number[] = [0,0];
  private inFront: Cell = Cell.EMPTY;

  public setPos(newPos: number[]) {
    this.curPos = newPos;
  }

  public getPos(): number[] {
    return this.curPos;
  }

  public getDirection(): Direction {
    return this.direction;
  }

  public turnLeft() {
    this.direction.rotateLeft();
  }

  public turnRight() {
    this.direction.rotateRight();
  }

  public turn180() {
    this.direction.rotate180();
  }

  public generateMovePos(): number[] {
    let ret: number[] = [this.curPos[0],this.curPos[1]];
    switch(this.direction.dir) {
      case CardinalDirection.North: {
        ret[0]--;
        break;
      }
      case CardinalDirection.East: {
        ret[1]++;
        break;
      }
      case CardinalDirection.South: {
        ret[0]++;
        break;
      }
      case CardinalDirection.West: {
        ret[1]--;
        break;
      }
    }

    return ret;
  }
}

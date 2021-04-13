import { CardinalDirection } from '../Enums/cardinal-direction.enum';
export class Direction {

  private direction: CardinalDirection = CardinalDirection.East;

  get dir(): CardinalDirection {
    return this.direction;
  }

  set dir(newDirection: CardinalDirection) {
    this.direction = newDirection
  }

  rotateLeft() {
    switch(this.direction) {
      case CardinalDirection.North: {
        this.direction = CardinalDirection.West;
        break;
      }
      case CardinalDirection.West: {
        this.direction = CardinalDirection.South;
        break;
      }
      case CardinalDirection.South: {
        this.direction = CardinalDirection.East;
        break;
      }
      case CardinalDirection.East: {
        this.direction = CardinalDirection.North;
        break;
      }
    }
  }

  rotateRight() {
    switch(this.direction) {
      case CardinalDirection.North: {
        this.direction = CardinalDirection.East;
        break;
      }
      case CardinalDirection.East: {
        this.direction = CardinalDirection.South;
        break;
      }
      case CardinalDirection.South: {
        this.direction = CardinalDirection.West;
        break;
      }
      case CardinalDirection.West: {
        this.direction = CardinalDirection.North;
        break;
      }
    }
  }

  rotate180() {
    switch(this.direction) {
      case CardinalDirection.North: {
        this.direction = CardinalDirection.South;
        break;
      }
      case CardinalDirection.South: {
        this.direction = CardinalDirection.North;
        break;
      }
      case CardinalDirection.West: {
        this.direction = CardinalDirection.East;
        break;
      }
      case CardinalDirection.East: {
        this.direction = CardinalDirection.West;
        break;
      }
    }
  }
}

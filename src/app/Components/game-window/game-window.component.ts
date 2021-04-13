import { Direction } from './../../BuntLangCompiler/Models/direction';
import { CardinalDirection } from './../../BuntLangCompiler/Enums/cardinal-direction.enum';
import { Player } from './../../BuntLangCompiler/Models/player';
import { createOfflineCompileUrlResolver } from '@angular/compiler';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Cell } from 'src/app/BuntLangCompiler/Enums/cell.enum';
import { GameModel, numCols, numRows } from 'src/app/BuntLangCompiler/Models/game-model';

@Component({
  selector: 'app-game-window',
  templateUrl: './game-window.component.html',
  styleUrls: ['./game-window.component.scss']
})
export class GameWindowComponent implements OnInit {

  private gameModel: GameModel = new GameModel();
  private cellSize: number = 40;

  public width = this.cellSize*numCols;
  public height = this.cellSize*numRows;

  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;

  private ctx: CanvasRenderingContext2D | null;

  constructor() {
  }

  ngAfterViewInit() {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.canvas.nativeElement.width = this.width;
    this.canvas.nativeElement.height = this.height;

    this.draw();
  }

  draw() {


    if(this.ctx != null) {
      this.ctx.lineWidth = 2;
      this.ctx.clearRect(0,0,this.width,this.height);
      for(let r = 0; r < numRows; r++) {
        for(let c = 0; c < numCols; c++) {

          let cell: Cell = this.gameModel.getCellAtLoc([r,c]);

          switch(cell) {
            case Cell.PLAYER: {
              this.ctx.fillStyle = 'red';
              break;
            } default: {
              this.ctx.fillStyle = 'white';
              break;
            }
          }

          let x = c*this.cellSize;
          let y = r*this.cellSize;

          this.drawTriangle(x,y,this.gameModel.getPlayerDirection());
          this.ctx.fill
          this.ctx.strokeRect(x,y,this.cellSize,this.cellSize);

        }
      }

      this.ctx?.strokeRect(1,1,this.width-2,this.height-2);
    }
  }

  drawTriangle(x: number, y: number, direction: CardinalDirection) {

    switch(direction) {
      case CardinalDirection.North: {
        this.ctx?.beginPath();
        this.ctx?.moveTo(x,y+this.cellSize);
        this.ctx?.lineTo(x+this.cellSize/2,y);
        this.ctx?.lineTo(x+this.cellSize,y+this.cellSize);
        this.ctx?.fill();
        break;
      }
      case CardinalDirection.East: {
        this.ctx?.beginPath();
        this.ctx?.moveTo(x,y+this.cellSize);
        this.ctx?.lineTo(x+this.cellSize,y+this.cellSize/2);
        this.ctx?.lineTo(x,y);
        this.ctx?.fill();
        break;
      }
      case CardinalDirection.West: {
        this.ctx?.beginPath();
        this.ctx?.moveTo(x+this.cellSize,y);
        this.ctx?.lineTo(x,y+this.cellSize/2);
        this.ctx?.lineTo(x+this.cellSize,y+this.cellSize);
        this.ctx?.fill();
        break;
      }
      case CardinalDirection.South: {
        this.ctx?.beginPath();
        this.ctx?.moveTo(x+this.cellSize,y);
        this.ctx?.lineTo(x+this.cellSize/2,y+this.cellSize);
        this.ctx?.lineTo(x,y);
        this.ctx?.fill();
        break;
      }
    }
  }

  turnLeft() {
    this.gameModel.turnLeft();
    this.update();
  }

  turnRight() {
    this.gameModel.turnRight();
    this.update();
  }

  turn180() {
    this.gameModel.turn180();
    this.update();
  }

  move() {
    this.gameModel.movePlayer();
    this.update();
  }

  update() {
    this.draw();
  }

  ngOnInit(): void {

  }

}

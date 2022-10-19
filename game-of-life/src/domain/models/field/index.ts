import { Cell } from '../cell/cell.abstract';
import { DeadCell } from '../cell/dead-cell';
import { LivingCell } from '../cell/living-cell';
import { FieldSize } from '../field-size';
import { LivingNeighboursCount } from '../living-neighbours';
import { Position } from '../position';

export class Field {
  private _cells: Cell[][];

  constructor(private readonly size: FieldSize) {
    this._cells = this.generateInitialCells();
  }

  private generateInitialCells(): Cell[][] {
    const cells: Cell[][] = new Array(this.size.height);

    for (let i = 0; i < cells.length; i++) {
      const line: Cell[] = new Array(this.size.width);
      for (let j = 0; j < line.length; j++) {
        line[j] = new DeadCell();
      }
      cells[i] = line;
    }

    return cells;
  }

  public getCells() {
    return this._cells;
  }

  public resurect(position: Position) {
    this._cells[position.y][position.x] = new LivingCell();
  }

  public kill(position: Position) {
    this._cells[position.y][position.x] = new DeadCell();
  }

  public passCycle() {
    for (let i = 0; i < this._cells.length; i++) {
      for (let j = 0; j < this._cells[i].length; j++) {
        const cell = this._cells[i][j];
        this._cells[i][j] = cell.evolve(
          this.getSurroundingLivingCellsCount(new Position({ x: j, y: i }))
        );
      }
    }
  }

  private getSurroundingLivingCellsCount({ x, y }: Position) {
    let surroundingLivingCellsCount = 0;

    surroundingLivingCellsCount += this.getOneIfAlive(
      new Position({ x: x - 1, y: y - 1 })
    );
    surroundingLivingCellsCount += this.getOneIfAlive(
      new Position({ x: x, y: y - 1 })
    );
    surroundingLivingCellsCount += this.getOneIfAlive(
      new Position({ x: x + 1, y: y - 1 })
    );

    surroundingLivingCellsCount += this.getOneIfAlive(
      new Position({ x: x - 1, y: y })
    );
    surroundingLivingCellsCount += this.getOneIfAlive(
      new Position({ x: x, y: y })
    );
    surroundingLivingCellsCount += this.getOneIfAlive(
      new Position({ x: x + 1, y: y })
    );

    surroundingLivingCellsCount += this.getOneIfAlive(
      new Position({ x: x - 1, y: y + 1 })
    );
    surroundingLivingCellsCount += this.getOneIfAlive(
      new Position({ x: x, y: y + 1 })
    );
    surroundingLivingCellsCount += this.getOneIfAlive(
      new Position({ x: x + 1, y: y + 1 })
    );

    return new LivingNeighboursCount(surroundingLivingCellsCount);
  }

  private getOneIfAlive({ x, y }: Position): 1 | 0 {
    if (this._cells.at(y)?.at(x)?.isAlive()) {
      return 1;
    }
    return 0;
  }
}

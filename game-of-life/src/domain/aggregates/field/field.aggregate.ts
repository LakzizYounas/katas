import { Cell } from './cell/cell.abstract';
import { DeadCell } from './cell/dead-cell';
import { LivingCell } from './cell/living-cell';
import { FieldSize } from './field-size';
import { LivingNeighboursCount } from './living-neighbours';
import { CellPosition } from './cell-position';

export class FieldAggregate {
  private _cells: Cell[][];

  constructor(private readonly size: FieldSize) {
    this._cells = this.generateInitialCells();
  }

  private generateInitialCells(): Cell[][] {
    const cells: Cell[][] = new Array(this.size.height);

    for (let i = 0; i < cells.length; i++) {
      const line: Cell[] = new Array(this.size.width);
      for (let j = 0; j < line.length; j++) {
        line[j] = new DeadCell(new CellPosition({ x: j, y: i }));
      }
      cells[i] = line;
    }

    return cells;
  }

  public getCells() {
    return this._cells;
  }

  public resurect(position: CellPosition) {
    this._cells[position.y][position.x] = new LivingCell(position);
  }

  public kill(position: CellPosition) {
    this._cells[position.y][position.x] = new DeadCell(position);
  }

  public passCycle() {
    this._cells.forEach((line, lineIndex) =>
      line.forEach((cell, cellIndex) => {
        const cellPosition = new CellPosition({ x: cellIndex, y: lineIndex });

        this._cells[lineIndex][cellIndex] = cell.evolve(
          this.getSurroundingLivingCellsCount(cellPosition)
        );
      })
    );
  }

  private getSurroundingLivingCellsCount({ x, y }: CellPosition) {
    let surroundingLivingCellsCount = 0;

    surroundingLivingCellsCount += this.returnsOneIfAlive(
      new CellPosition({ x: x - 1, y: y - 1 })
    );
    surroundingLivingCellsCount += this.returnsOneIfAlive(
      new CellPosition({ x: x, y: y - 1 })
    );
    surroundingLivingCellsCount += this.returnsOneIfAlive(
      new CellPosition({ x: x + 1, y: y - 1 })
    );

    surroundingLivingCellsCount += this.returnsOneIfAlive(
      new CellPosition({ x: x - 1, y: y })
    );
    surroundingLivingCellsCount += this.returnsOneIfAlive(
      new CellPosition({ x: x, y: y })
    );
    surroundingLivingCellsCount += this.returnsOneIfAlive(
      new CellPosition({ x: x + 1, y: y })
    );

    surroundingLivingCellsCount += this.returnsOneIfAlive(
      new CellPosition({ x: x - 1, y: y + 1 })
    );
    surroundingLivingCellsCount += this.returnsOneIfAlive(
      new CellPosition({ x: x, y: y + 1 })
    );
    surroundingLivingCellsCount += this.returnsOneIfAlive(
      new CellPosition({ x: x + 1, y: y + 1 })
    );

    return new LivingNeighboursCount(surroundingLivingCellsCount);
  }

  private returnsOneIfAlive({ x, y }: CellPosition): 1 | 0 {
    if (this._cells.at(y)?.at(x)?.alive) {
      return 1;
    }
    return 0;
  }
}

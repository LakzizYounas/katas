import { LivingNeighboursCount } from '../living-neighbours';
import { CellPosition } from '../cell-position';
import { Cell } from './cell.abstract';

type InstantiableCell = new (position: CellPosition) => Cell;

const ARBITRARY_POSITION = new CellPosition({ x: 4, y: 3 });

export class SUT {
  private cellToInstantiate!: InstantiableCell;
  private neighboursCount!: number;
  private evolvedCell!: Cell;

  public given = (cellToInstantiate: InstantiableCell) => {
    this.cellToInstantiate = cellToInstantiate;

    return { andNeighbours: this.andNeighbours };
  };

  private andNeighbours = (neighboursCount: number) => {
    this.neighboursCount = neighboursCount;

    return { whenEvolving: this.whenEvolving };
  };

  private whenEvolving = () => {
    const cell = new this.cellToInstantiate(ARBITRARY_POSITION);

    const evolvedCell = cell.evolve(
      new LivingNeighboursCount(this.neighboursCount)
    );

    this.evolvedCell = evolvedCell;
    return {
      expectCellToBeAlive: this.expectCellToBeAlive,
      expectCellToBeDead: this.expectCellToBeDead,
    };
  };

  private expectCellToBeAlive = () => {
    const isAlive = this.evolvedCell.alive;
    expect(isAlive).toBeTrue();
  };

  private expectCellToBeDead = () => {
    const isAlive = this.evolvedCell.alive;
    expect(isAlive).toBeFalse();
  };
}

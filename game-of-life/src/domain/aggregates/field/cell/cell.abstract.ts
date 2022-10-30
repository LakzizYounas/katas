import { LivingNeighboursCount } from '../living-neighbours';
import { CellPosition } from '../cell-position';

export abstract class Cell {
  public abstract evolve(livingNeighboursCount: LivingNeighboursCount): Cell;
  public abstract alive: boolean;
  public abstract position: CellPosition;
}

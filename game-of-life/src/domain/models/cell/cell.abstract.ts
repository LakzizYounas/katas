import { LivingNeighboursCount } from '../living-neighbours';
import { Position } from '../position';

export abstract class Cell {
  public abstract evolve(livingNeighboursCount: LivingNeighboursCount): Cell;
  public abstract isAlive(): boolean;
  public abstract position: Position;
}

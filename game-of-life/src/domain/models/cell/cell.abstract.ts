import { LivingNeighboursCount } from '../living-neighbours';

export abstract class Cell {
  public abstract evolve(livingNeighboursCount: LivingNeighboursCount): Cell;
  public abstract isAlive(): boolean;
}

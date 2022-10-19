import { LivingNeighboursCount } from '../living-neighbours';
import { Cell } from './cell.abstract';
import { LivingCell } from './living-cell';

export class DeadCell extends Cell {
  public evolve(livingNeighboursCount: LivingNeighboursCount): Cell {
    if (this.shouldResurect(livingNeighboursCount)) {
      return this.resurrects();
    }

    return this.stayDead();
  }

  public isAlive(): this is LivingCell {
    return false;
  }

  private stayDead(): DeadCell {
    return new DeadCell();
  }

  private shouldResurect(
    livingNeighboursCount: LivingNeighboursCount
  ): boolean {
    return livingNeighboursCount.get() === 3;
  }

  private resurrects(): LivingCell {
    return new LivingCell();
  }
}

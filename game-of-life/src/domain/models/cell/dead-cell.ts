import { LivingNeighboursCount } from '../living-neighbours';
import { Position } from '../position';
import { Cell } from './cell.abstract';
import { LivingCell } from './living-cell';

export class DeadCell implements Cell {
  constructor(public position: Position) {}

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
    return new DeadCell(this.position);
  }

  private shouldResurect(
    livingNeighboursCount: LivingNeighboursCount
  ): boolean {
    return livingNeighboursCount.get() === 3;
  }

  private resurrects(): LivingCell {
    return new LivingCell(this.position);
  }
}

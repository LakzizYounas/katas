import { LivingNeighboursCount } from '../living-neighbours';
import { CellPosition } from '../cell-position';
import { Cell } from './cell.abstract';
import { LivingCell } from './living-cell';

export class DeadCell implements Cell {
  public readonly alive = false;

  constructor(public readonly position: CellPosition) {}

  public evolve(livingNeighboursCount: LivingNeighboursCount): Cell {
    if (this.shouldResurect(livingNeighboursCount)) {
      return this.resurrects();
    }

    return this.stayDead();
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

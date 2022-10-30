import { LivingNeighboursCount } from '../living-neighbours';
import { CellPosition } from '../cell-position';
import { Cell } from './cell.abstract';
import { DeadCell } from './dead-cell';

export class LivingCell implements Cell {
  public readonly alive = true;

  constructor(public position: CellPosition) {}

  public evolve(livingNeighboursCount: LivingNeighboursCount): Cell {
    if (this.shouldSurvive(livingNeighboursCount)) {
      return this.survives();
    }

    return this.dies();
  }

  private dies(): DeadCell {
    return new DeadCell(this.position);
  }

  private shouldSurvive(livingNeighboursCount: LivingNeighboursCount): boolean {
    return [2, 3].includes(livingNeighboursCount.get());
  }

  private survives(): LivingCell {
    return new LivingCell(this.position);
  }
}

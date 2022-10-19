import { LivingNeighboursCount } from '../living-neighbours';
import { Cell } from './cell.abstract';
import { DeadCell } from './dead-cell';

export class LivingCell extends Cell {
  public evolve(livingNeighboursCount: LivingNeighboursCount): Cell {
    if (this.shouldSurvive(livingNeighboursCount)) {
      return this.survives();
    }

    return this.dies();
  }

  public isAlive(): true {
    return true;
  }

  private dies(): DeadCell {
    return new DeadCell();
  }

  private shouldSurvive(livingNeighboursCount: LivingNeighboursCount): boolean {
    return [2, 3].includes(livingNeighboursCount.get());
  }

  private survives(): LivingCell {
    return new LivingCell();
  }
}

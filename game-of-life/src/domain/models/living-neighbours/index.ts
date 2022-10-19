import { NoNegativeCount } from './no-negative-count.error';

export class LivingNeighboursCount {
  constructor(private readonly livingNeighboursCount: number) {
    if (livingNeighboursCount < 0) {
      throw new NoNegativeCount();
    }
  }

  get() {
    return this.livingNeighboursCount;
  }
}

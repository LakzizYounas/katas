import { SUT } from './cell.sut.spec';
import { DeadCell } from './dead-cell';
import { LivingCell } from './living-cell';

describe('Cell specs', () => {
  it('Living cell -> 0 neighbour = dies', () => {
    new SUT()
      .given(LivingCell)
      .andNeighbours(0)
      .whenEvolving()
      .expectCellToBeDead();
  });

  it('Living cell -> 2 neighbours = survives', () => {
    new SUT()
      .given(LivingCell)
      .andNeighbours(2)
      .whenEvolving()
      .expectCellToBeAlive();
  });

  it('Living cell -> 3 neighbours = survives', () => {
    new SUT()
      .given(LivingCell)
      .andNeighbours(3)
      .whenEvolving()
      .expectCellToBeAlive();
  });

  it('Dead cell -> 0 neighbours = stay dead', () => {
    new SUT()
      .given(DeadCell)
      .andNeighbours(0)
      .whenEvolving()
      .expectCellToBeDead();
  });

  it('Dead cell -> 3 neighbours = resurects', () => {
    new SUT()
      .given(DeadCell)
      .andNeighbours(3)
      .whenEvolving()
      .expectCellToBeAlive();
  });
});

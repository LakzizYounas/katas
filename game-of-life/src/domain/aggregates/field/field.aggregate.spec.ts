import { FieldAggregate } from './field.aggregate';
import { FieldSize } from './field-size';
import { CellPosition } from './cell-position';

describe('Game Of Life Field', () => {
  it('Newly created field should be full of dead cells', () => {
    const field = new FieldAggregate(new FieldSize({ width: 4, height: 4 }));

    const fieldCells = field.getCells();

    fieldCells.forEach((line) =>
      line.forEach((cell) => expect(cell.alive).toBeFalse())
    );
  });

  it('When resurecting a dead cell it should be alive', () => {
    const field = new FieldAggregate(new FieldSize({ width: 4, height: 4 }));
    const position = new CellPosition({ x: 2, y: 1 });

    field.resurect(position);

    const fieldCells = field.getCells();
    const resurectedCell = fieldCells.at(position.y)?.at(position.x);
    expect(resurectedCell?.alive).toBeTrue();
  });

  it('When killing an alive cell it should be dead', () => {
    const field = new FieldAggregate(new FieldSize({ width: 4, height: 4 }));
    const position = new CellPosition({ x: 2, y: 1 });

    field.resurect(position);
    field.kill(position);

    const fieldCells = field.getCells();
    const killedCell = fieldCells.at(position.y)?.at(position.x);
    expect(killedCell?.alive).toBeFalse();
  });

  it('Given a single living cell when we pass a cycle it should be dead', () => {
    const field = new FieldAggregate(new FieldSize({ width: 4, height: 4 }));
    const position = new CellPosition({ x: 2, y: 1 });

    field.resurect(position);
    field.passCycle();

    const fieldCells = field.getCells();
    const resurectedCell = fieldCells.at(position.y)?.at(position.x);
    expect(resurectedCell?.alive).toBeFalse();
  });
});

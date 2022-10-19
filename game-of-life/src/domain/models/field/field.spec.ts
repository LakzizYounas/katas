import { Field } from '.';
import { FieldSize } from '../field-size';
import { Position } from '../position';

describe('Game Of Life Field', () => {
  it('Newly created field should be full of dead cells', () => {
    const field = new Field(new FieldSize({ width: 4, height: 4 }));

    const fieldCells = field.getCells();

    fieldCells.forEach((line) => {
      line.forEach((cell) => {
        expect(cell.isAlive()).toBeFalse();
      });
    });
  });

  it('When resurecting a dead cell it should be alive', () => {
    const field = new Field(new FieldSize({ width: 4, height: 4 }));
    const position = new Position({ x: 2, y: 1 });

    field.resurect(position);

    const fieldCells = field.getCells();
    expect(fieldCells.at(position.y)?.at(position.x)?.isAlive()).toBeTrue();
  });

  it('When killing an alive cell it should be dead', () => {
    const field = new Field(new FieldSize({ width: 4, height: 4 }));
    const position = new Position({ x: 2, y: 1 });

    field.resurect(position);
    field.kill(position);

    const fieldCells = field.getCells();
    expect(fieldCells.at(position.y)?.at(position.x)?.isAlive()).toBeFalse();
  });

  it('Given a single living cell when we pass a cycle it should be dead', () => {
    const field = new Field(new FieldSize({ width: 4, height: 4 }));
    const position = new Position({ x: 2, y: 1 });

    field.resurect(position);
    field.passCycle();

    const fieldCells = field.getCells();
    expect(fieldCells.at(position.y)?.at(position.x)?.isAlive()).toBeFalse();
  });
});

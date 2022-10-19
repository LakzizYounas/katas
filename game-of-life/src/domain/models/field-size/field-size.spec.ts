import { FieldSize } from '.';
import { SizeNotAllowed } from './size-not-allowed.error';

describe('Field Size spec', () => {
  it("Field size shouldn't be less than 1", () => {
    const widthNotAllowed = () => new FieldSize({ width: 0, height: 2 });
    const heightNotAllowed = () => new FieldSize({ width: 2, height: -1 });

    expect(widthNotAllowed).toThrowError(SizeNotAllowed);
    expect(heightNotAllowed).toThrowError(SizeNotAllowed);
  });

  it('Field size should be accessed', () => {
    const fieldSize = new FieldSize({ width: 1, height: 2 });

    expect(fieldSize.width).toEqual(1);
    expect(fieldSize.height).toEqual(2);
  });
});

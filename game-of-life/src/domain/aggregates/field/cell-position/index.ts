interface Props {
  x: number;
  y: number;
}

export class CellPosition {
  private _x: number;
  private _y: number;

  constructor({ x, y }: Props) {
    this._x = x;
    this._y = y;
  }

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }
}

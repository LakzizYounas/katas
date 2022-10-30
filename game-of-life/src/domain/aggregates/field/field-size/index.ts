import { SizeNotAllowed } from './size-not-allowed.error';

interface Size {
  width: number;
  height: number;
}

export class FieldSize {
  private _width: number;
  private _height: number;

  constructor({ width, height }: Size) {
    if (width < 1 || height < 1) {
      throw new SizeNotAllowed();
    }
    this._width = width;
    this._height = height;
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }
}

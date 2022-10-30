export class SizeNotAllowed extends Error {
  constructor() {
    super('Size less than one not allowed');
  }
}

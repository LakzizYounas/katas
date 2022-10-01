import { NumberConvertor } from "./number-convertor";

export class GetRomanNumerals {
  private numberConvertor: NumberConvertor;

  constructor(private readonly decimal: number) {
    this.numberConvertor = NumberConvertor.fromDecimal(this.decimal);
  }

  public execute(): string {
    return this.numberConvertor.toRomanNumerals();
  }
}

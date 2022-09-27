import { RomanRoundNumber } from "./roman-round-number";

export class GetRomanNumerals {
  private romanRoundNumber: RomanRoundNumber;

  constructor(private readonly decimal: number) {
    this.romanRoundNumber = RomanRoundNumber.fromDecimal(this.decimal);
  }

  public execute(): string {
    return this.getRomanNumerals();
  }

  private getRomanNumerals() {
    let romanNumerals = "";

    for (let i = this.decimal; i > 0; i -= this.romanRoundNumber.decimal)
      romanNumerals += this.romanRoundNumber.toRomanNumeral();

    return romanNumerals;
  }
}

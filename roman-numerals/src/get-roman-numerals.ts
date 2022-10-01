import { BiggestRomanNumber } from "./biggest-roman-number";

export class GetRomanNumerals {
  constructor(private decimal: number) {}

  public execute(): string {
    return this.convertDecimalToRomanNumerals();
  }

  public convertDecimalToRomanNumerals() {
    let rest = this.decimal;
    let romanNumerals = "";

    do {
      const romanRoundNumber = BiggestRomanNumber.fromDecimal(rest);
      romanNumerals += romanRoundNumber.romanNumeral;
      rest -= romanRoundNumber.rest;
    } while (rest);

    return romanNumerals;
  }
}

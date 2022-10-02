import { RomanDecimal, RomanEquivalency } from "../roman-equivalency";
import { OnlyPositiveInteger } from "./only-positive.error";

export class BiggestRomanNumber {
  public roman = "";
  public decimal!: RomanDecimal;

  private constructor(decimalToConvert: number) {
    this.getBiggestRoman(decimalToConvert);
  }

  public static fromDecimal(decimal: number) {
    return new BiggestRomanNumber(decimal);
  }

  private getBiggestRoman(decimalToConvert: number) {
    const romanRoundDecimal =
      this.getNearestRomanDecimalSmallerThanDecimal(decimalToConvert);

    this.decimal = romanRoundDecimal;
    this.roman = RomanEquivalency.toRomanCharacter(romanRoundDecimal);
  }

  private getNearestRomanDecimalSmallerThanDecimal(
    decimal: number
  ): RomanDecimal {
    const romanRoundNumbers = RomanEquivalency.decimals;

    for (let i = romanRoundNumbers.length; i >= 0; i--)
      if (decimal >= romanRoundNumbers[i]) return romanRoundNumbers[i];

    throw new OnlyPositiveInteger();
  }
}

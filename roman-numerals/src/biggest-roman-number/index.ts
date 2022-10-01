const romanEquivalency: Record<number, string | undefined> = {
  1: "I",
  4: "IV",
  5: "V",
  9: "IX",
  10: "X",
  40: "XL",
  50: "L",
  90: "XC",
  100: "C",
  400: "CD",
  500: "D",
  900: "CM",
  1_000: "M",
};

export class BiggestRomanNumber {
  public romanNumeral: string;
  public rest = 0;

  private constructor(private decimal: number) {
    this.romanNumeral = this.getBiggestRoman();
  }

  public static fromDecimal(decimal: number) {
    return new BiggestRomanNumber(decimal);
  }

  private getBiggestRoman(): string {
    const romanRoundDecimal = this.getNearestRomanDecimalSmallerThanDecimal(
      this.decimal
    );

    this.decimal = this.decimal - romanRoundDecimal;
    this.rest = romanRoundDecimal;

    return romanEquivalency[romanRoundDecimal] ?? "";
  }

  private getNearestRomanDecimalSmallerThanDecimal(decimal: number) {
    const romanRoundNumbers = Object.keys(romanEquivalency).map((nb) => +nb);

    for (let i = romanRoundNumbers.length; i >= 0; i--) {
      if (decimal >= romanRoundNumbers[i]) {
        return romanRoundNumbers[i];
      }
    }

    return 0;
  }
}

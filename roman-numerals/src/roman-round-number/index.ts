type RomanRoundNumberType = 1 | 5 | 10 | 50 | 100 | 500 | 1_000;

const romanRoundNumbers: RomanRoundNumberType[] = [
  1, 5, 10, 50, 100, 500, 1_000,
];

const romanEquivalency: Record<number, string> = {
  1: "I",
  5: "V",
  10: "X",
  50: "L",
  100: "C",
  500: "D",
  1_000: "M",
};

export class RomanRoundNumber {
  private constructor(public decimal: number) {}

  public static fromDecimal(decimal: number) {
    return new RomanRoundNumber(decimal);
  }

  public popRomanNumeral(): string {
    const romanRoundNumber = this.getNearestRomanRoundNumberSmallerThanDecimal(
      this.decimal
    );

    this.decimal = this.decimal - romanRoundNumber;

    return romanEquivalency[romanRoundNumber];
  }

  private getNearestRomanRoundNumberSmallerThanDecimal(decimal: number) {
    for (let i = romanRoundNumbers.length; i >= 0; i--) {
      if (decimal >= romanRoundNumbers[i]) {
        return romanRoundNumbers[i];
      }
    }
    return 0;
  }
}

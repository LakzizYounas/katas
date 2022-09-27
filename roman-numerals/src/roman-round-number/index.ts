type RomanRoundNumberType = 1 | 5 | 10 | 50 | 100 | 500 | 1_000;

const romanRoundNumbers: RomanRoundNumberType[] = [
  1, 5, 10, 50, 100, 500, 1_000,
];

const romanEquivalency: Record<number, string | undefined> = {
  1: "I",
  5: "V",
  10: "X",
  50: "L",
  100: "C",
  500: "D",
  1_000: "M",
};

export class RomanRoundNumber {
  private constructor(public readonly decimal: RomanRoundNumberType) {}

  public static fromDecimal(decimal: number) {
    const romanRoundNumber =
      this.getNearestRomanRoundNumberSmallerThanDecimal(decimal);
    return new RomanRoundNumber(romanRoundNumber);
  }

  private static getNearestRomanRoundNumberSmallerThanDecimal(
    decimal: number
  ): RomanRoundNumberType {
    for (let i = romanRoundNumbers.length; i >= 0; i--) {
      if (decimal >= romanRoundNumbers[i]) {
        return romanRoundNumbers[i];
      }
    }
    return romanRoundNumbers[0];
  }

  public toRomanNumeral() {
    return romanEquivalency[this.decimal];
  }
}

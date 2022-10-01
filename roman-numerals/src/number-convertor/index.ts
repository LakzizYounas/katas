const romanEquivalency: Record<number, string> = {
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

export class NumberConvertor {
  private constructor(private decimal: number) {}

  public static fromDecimal(decimal: number) {
    return new NumberConvertor(decimal);
  }

  public toRomanNumerals() {
    let romanNumerals = "";

    for (
      let biggestRomanNumeral = this.getBiggest();
      biggestRomanNumeral;
      biggestRomanNumeral = this.getBiggest()
    )
      romanNumerals += biggestRomanNumeral;

    return romanNumerals;
  }

  private getBiggest(): string {
    const romanRoundNumber = this.getNearestRomanRoundNumberSmallerThanDecimal(
      this.decimal
    );

    this.decimal = this.decimal - romanRoundNumber;

    return romanEquivalency[romanRoundNumber];
  }

  private getNearestRomanRoundNumberSmallerThanDecimal(decimal: number) {
    const romanRoundNumbers = Object.keys(romanEquivalency).map((nb) => +nb);

    for (let i = romanRoundNumbers.length; i >= 0; i--) {
      if (decimal >= romanRoundNumbers[i]) {
        return romanRoundNumbers[i];
      }
    }
    return 0;
  }
}

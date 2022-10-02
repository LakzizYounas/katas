export type RomanDecimal =
  | 1
  | 4
  | 5
  | 9
  | 10
  | 40
  | 50
  | 90
  | 100
  | 400
  | 500
  | 900
  | 1000;

export class RomanEquivalency {
  public static readonly decimals: RomanDecimal[] = [
    1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1_000,
  ];

  private static romanEquivalency: Record<RomanDecimal, string> = {
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

  public static toRomanCharacter = (romanRoundDecimal: RomanDecimal) =>
    this.romanEquivalency[romanRoundDecimal];
}

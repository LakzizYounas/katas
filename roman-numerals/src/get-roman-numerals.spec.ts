import { GetRomanNumerals } from "./get-roman-numerals";

describe("Roman Numerals Getter", () => {
  describe("Simple", () => {
    it("1 -> I", expectNumberToEqualAsRoman(1, "I"));

    it("5 -> V", expectNumberToEqualAsRoman(5, "V"));

    it("10 -> X", expectNumberToEqualAsRoman(10, "X"));

    it("50 -> L", expectNumberToEqualAsRoman(50, "L"));

    it("100 -> C", expectNumberToEqualAsRoman(100, "C"));

    it("500 -> D", expectNumberToEqualAsRoman(500, "D"));

    it("1000 -> M", expectNumberToEqualAsRoman(1000, "M"));
  });

  describe("Addition", () => {
    it("2 -> II", expectNumberToEqualAsRoman(2, "II"));

    it("3 -> III", expectNumberToEqualAsRoman(3, "III"));

    it("20 -> XX", expectNumberToEqualAsRoman(20, "XX"));
  });
});

function expectNumberToEqualAsRoman(number: number, romanNumerals: string) {
  return function () {
    const res = new GetRomanNumerals(number).execute();

    expect(res).toEqual(romanNumerals);
  };
}

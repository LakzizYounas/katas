import { OnlyPositiveInteger } from "./biggest-roman-number/only-positive.error";
import { GetRomanNumerals } from "./get-roman-numerals";

describe("Roman Numerals Getter", () => {
  describe("Simple", () => {
    it("(1)    -> (I)", expectNumberToEqualAsRoman(1, "I"));
    it("(5)    -> (V)", expectNumberToEqualAsRoman(5, "V"));
    it("(10)   -> (X)", expectNumberToEqualAsRoman(10, "X"));
    it("(50)   -> (L)", expectNumberToEqualAsRoman(50, "L"));
    it("(100)  -> (C)", expectNumberToEqualAsRoman(100, "C"));
    it("(500)  -> (D)", expectNumberToEqualAsRoman(500, "D"));
    it("(1000) -> (M)", expectNumberToEqualAsRoman(1000, "M"));
  });

  describe("Simple Addition", () => {
    it("(2)    -> (II)", expectNumberToEqualAsRoman(2, "II"));
    it("(3)    -> (III)", expectNumberToEqualAsRoman(3, "III"));
    it("(20)   -> (XX)", expectNumberToEqualAsRoman(20, "XX"));
  });

  describe("Composed Addition", () => {
    it("(6)    -> (VI)", expectNumberToEqualAsRoman(6, "VI"));
  });

  describe("Simple Substraction", () => {
    it("(4)    -> (IV)", expectNumberToEqualAsRoman(4, "IV"));
    it("(9)    -> (IX)", expectNumberToEqualAsRoman(9, "IX"));
    it("(40)   -> (XL)", expectNumberToEqualAsRoman(40, "XL"));
    it("(90)   -> (XC)", expectNumberToEqualAsRoman(90, "XC"));
    it("(400)  -> (CD)", expectNumberToEqualAsRoman(400, "CD"));
    it("(900)  -> (CM)", expectNumberToEqualAsRoman(900, "CM"));
  });

  describe("Complex Number", () => {
    it(
      "(4987) -> (MMMMCMLXXXVII)",
      expectNumberToEqualAsRoman(4987, "MMMMCMLXXXVII")
    );
  });

  describe("Bound Cases", () => {
    it("(-1)   -> (OnlyPositiveInteger)", () => {
      const run = () => new GetRomanNumerals(-1).execute();
      expect(run).toThrow(OnlyPositiveInteger);
    });
  });
});

function expectNumberToEqualAsRoman(number: number, romanNumerals: string) {
  return function () {
    const res = new GetRomanNumerals(number).execute();

    expect(res).toEqual(romanNumerals);
  };
}

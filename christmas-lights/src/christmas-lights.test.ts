// import * as fc from "fast-check";

import { ChristmasLights } from "./christmas-lights";
import { Position } from "./position";
import { NegativeCoordinatesError } from "./position/not-positive-number.error";

describe("Christmas Lights Tests", () => {
  let christmasLights: ChristmasLights;

  beforeEach(() => {
    christmasLights = new ChristmasLights(100, 100);
  });

  it("On(0,0)->(0,0) === 1 brightness", () => {
    const startPos = Position.create({ x: 0, y: 0 });
    const endPos = Position.create({ x: 0, y: 0 });

    christmasLights.turnOn(startPos, endPos);

    const brightness = christmasLights.getBrightness();
    expect(brightness).toEqual(1);
  });

  it("On(0,0)->(0,1) === 2 brightness", () => {
    const startPos = Position.create({ x: 0, y: 0 });
    const endPos = Position.create({ x: 0, y: 1 });

    christmasLights.turnOn(startPos, endPos);

    const brightness = christmasLights.getBrightness();
    expect(brightness).toEqual(2);
  });

  it("On(0,0)->(99,99) === 10 000 brightness", () => {
    const startPos = Position.create({ x: 0, y: 0 });
    const endPos = Position.create({ x: 99, y: 99 });

    christmasLights.turnOn(startPos, endPos);

    const brightness = christmasLights.getBrightness();
    expect(brightness).toEqual(10_000);
  });

  it("On(0,0)->(0,0) & Off(0,0)->(0,0) === 0 brightness", () => {
    const startPos = Position.create({ x: 0, y: 0 });
    const endPos = Position.create({ x: 0, y: 0 });

    christmasLights.turnOn(startPos, endPos);
    christmasLights.turnOff(startPos, endPos);

    const brightness = christmasLights.getBrightness();
    expect(brightness).toEqual(0);
  });

  it("On(0,0)->(0,1) & Off(0,0)->(0,1) === 0 brightness", () => {
    const startPos = Position.create({ x: 0, y: 0 });
    const endPos = Position.create({ x: 0, y: 1 });

    christmasLights.turnOn(startPos, endPos);
    christmasLights.turnOff(startPos, endPos);

    const brightness = christmasLights.getBrightness();
    expect(brightness).toEqual(0);
  });

  it("On(0,0)->(99,99) & Off(0,0)->(99,99) === 0 brightness", () => {
    const startPosOn = Position.create({ x: 0, y: 0 });
    const endPosOn = Position.create({ x: 99, y: 99 });
    const startPosOff = Position.create({ x: 0, y: 0 });
    const endPosOff = Position.create({ x: 99, y: 99 });

    christmasLights.turnOn(startPosOn, endPosOn);
    christmasLights.turnOff(startPosOff, endPosOff);

    const brightness = christmasLights.getBrightness();
    expect(brightness).toEqual(0);
  });

  it("On(0,0)->(99,99) & Off(0,0)->(99,98) === 100 brightness", () => {
    const startPosOn = Position.create({ x: 0, y: 0 });
    const endPosOn = Position.create({ x: 99, y: 99 });
    const startPosOff = Position.create({ x: 0, y: 0 });
    const endPosOff = Position.create({ x: 98, y: 99 });

    christmasLights.turnOn(startPosOn, endPosOn);
    christmasLights.turnOff(startPosOff, endPosOff);

    const brightness = christmasLights.getBrightness();
    expect(brightness).toEqual(100);
  });

  it("Toggle(0,0)->(0,0) === 2 brightness", () => {
    const startPosToggle = Position.create({ x: 0, y: 0 });
    const endPosToggle = Position.create({ x: 0, y: 0 });

    christmasLights.toggle(startPosToggle, endPosToggle);

    const brightness = christmasLights.getBrightness();
    expect(brightness).toEqual(2);
  });

  it("Toggle(0,0)->(0,1) === 4 brightness", () => {
    const startPosToggle = Position.create({ x: 0, y: 0 });
    const endPosToggle = Position.create({ x: 0, y: 1 });

    christmasLights.toggle(startPosToggle, endPosToggle);

    const brightness = christmasLights.getBrightness();
    expect(brightness).toEqual(4);
  });

  it("Toggle(0,0)->(0,2) === 6 brightness", () => {
    const startPosToggle = Position.create({ x: 0, y: 0 });
    const endPosToggle = Position.create({ x: 0, y: 2 });

    christmasLights.toggle(startPosToggle, endPosToggle);

    const brightness = christmasLights.getBrightness();
    expect(brightness).toEqual(6);
  });

  it("Toggle(0,0)->(0,2) & Toggle(0,0)->(0,2) === 12 brightness", () => {
    const startPosToggle = Position.create({ x: 0, y: 0 });
    const endPosToggle = Position.create({ x: 0, y: 2 });

    christmasLights.toggle(startPosToggle, endPosToggle);
    christmasLights.toggle(startPosToggle, endPosToggle);

    const brightness = christmasLights.getBrightness();
    expect(brightness).toEqual(12);
  });

  it("Off(0,0)->(0,0) === 0 brightness", () => {
    const startPos = Position.create({ x: 0, y: 0 });
    const endPos = Position.create({ x: 0, y: 0 });

    christmasLights.turnOff(startPos, endPos);

    const brightness = christmasLights.getBrightness();
    expect(brightness).toEqual(0);
  });

  it("Negative positions -> NegativeCoordinatesError", () => {
    const INVALID_POS = -1;

    const createInvalidPos = () =>
      Position.create({ x: INVALID_POS, y: INVALID_POS });

    expect(createInvalidPos).toThrowError(NegativeCoordinatesError);
  });
  // it("Given one square to ligth on, brightness should be equal to square length times square width", () => {
  //   const numberFrom0To999: fc.Arbitrary<number> = fc.nat({ max: 99 });

  //   fc.assert(
  //     fc.property(
  //       numberFrom0To999,
  //       numberFrom0To999,
  //       numberFrom0To999,
  //       numberFrom0To999,
  //       (startX, startY, endX, endY) => {
  //         fc.pre(startX <= endX && startY <= endY);
  //         const christmasLights = new ChristmasLights(1_000, 1_000);

  //         const startPos = Position.create({ x: startX, y: startY });
  //         const endPos = Position.create({ x: endX, y: endY });

  //         christmasLights.turnOn(startPos, endPos);
  //         const brightness = christmasLights.getBrightness();

  //         const width = endX - startX + 1;
  //         const length = endY - startY + 1;
  //         expect(brightness).toEqual(width * length);
  //       }
  //     )
  //   );
  // });
});

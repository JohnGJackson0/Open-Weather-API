import { getFarenheight } from "./Conversion";

describe("get Farenheight", () => {
  it("is a function", () => {
    expect(getFarenheight).toBeInstanceOf(Function);
  });
  it("returns the correct value", () => {
    expect(parseFloat(getFarenheight(284.32))).toBeCloseTo(52.106);
  });
});

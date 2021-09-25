import { GetTempAPICall } from "./GetTempAPICall";

describe("Tempature API call", () => {
  it("is a function", () => {
    expect(GetTempAPICall).toBeInstanceOf(Function);
  });
});

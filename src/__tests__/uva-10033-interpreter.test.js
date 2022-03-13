var uva10033 = require("../uva-10033-interpreter");

describe("UVA 100033: Interpreter", () => {
  it("returns 16 for the sample", () => {
    expect(
      uva10033([
        "299",
        "492",
        "495",
        "399",
        "492",
        "495",
        "399",
        "283",
        "279",
        "689",
        "078",
        "100",
        "000",
        "000",
        "000",
      ])
    ).toBe(16);
  });
});

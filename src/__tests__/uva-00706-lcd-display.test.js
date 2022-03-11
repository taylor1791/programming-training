var uva00706 = require("../uva-00706-lcd-display");

describe("UVA 00706: LCD Display", () => {
  it("draws a zero of size 1", () => {
    expect(uva00706(1, "0")).toBe(" - \n| |\n   \n| |\n - ");
  });
});

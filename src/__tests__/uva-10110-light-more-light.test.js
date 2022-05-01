const uva10110 = require("../uva-10110-light-more-light");

describe("UVA 10110: Light, More Light", () => {
  it("light 3 is off", () => {
    expect(uva10110(3)).toBe(false);
  });

  it("light 6241 is on", () => {
    expect(uva10110(6241)).toBe(true);
  });

  it("light 8191 is off", () => {
    expect(uva10110(8191)).toBe(false);
  });
});

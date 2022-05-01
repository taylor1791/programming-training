const uva10110 = require("../uva-10110-light-more-light");

describe("UVA 10110: Light, More Light", () => {
  it("light 1 is on", () => {
    expect(uva10110(1)).toBe(true);
  });

  it("light 2 is off", () => {
    expect(uva10110(2)).toBe(false);
  });

  it("light 4 is on", () => {
    expect(uva10110(4)).toBe(true);
  });

  it("light 5 is off", () => {
    expect(uva10110(5)).toBe(false);
  });

  it("light 6 is off", () => {
    expect(uva10110(6)).toBe(false);
  });

  it("light 8 is off", () => {
    expect(uva10110(8)).toBe(false);
  });

  it("light 9 is on", () => {
    expect(uva10110(9)).toBe(true);
  });

  it("light 10 is off", () => {
    expect(uva10110(10)).toBe(false);
  });

  it("light 12 is off", () => {
    expect(uva10110(12)).toBe(false);
  });

  it("light 15 is off", () => {
    expect(uva10110(15)).toBe(false);
  });

  it("light 16 is off", () => {
    expect(uva10110(16)).toBe(true);
  });

  describe("samples", () => {
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
});

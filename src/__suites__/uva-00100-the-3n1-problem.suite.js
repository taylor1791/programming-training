var uva00100 = require("../uva-00100-the-3n1-problem");

describe("UVA 00100: The 3n + 1 Problem", () => {
  it("base case; supports identical i and j", () => {
    expect(uva00100(1, 1)).toBe(1);
  });

  it("even numbers increase the cycle length", () => {
    expect(uva00100(2, 2)).toBe(2);
  });

  it("each even number increase the cycle length", () => {
    expect(uva00100(4, 4)).toBe(3);
  });

  it("odd numbers increase the cycle length", () => {
    expect(uva00100(5, 5)).toBe(6);
  });

  it("each odd number increase the cycle length", () => {
    expect(uva00100(9, 9)).toBe(20);
  });

  it("is i-inclusive", () => {
    expect(uva00100(7, 8)).toBe(17);
  });

  it("is j-inclusive", () => {
    expect(uva00100(8, 9)).toBe(20);
  });

  it("supports j > i", () => {
    expect(uva00100(6, 5)).toBe(9);
  });

  it("does not overflow", () => {
    expect(uva00100(837799, 837799)).toBe(525);
  });

  describe("samples", () => {
    it("i = 1; j = 10", () => {
      expect(uva00100(1, 10)).toBe(20);
    });

    it("i = 100; j = 200", () => {
      expect(uva00100(100, 200)).toBe(125);
    });

    it("i = 201; j = 210", () => {
      expect(uva00100(201, 210)).toBe(89);
    });

    it("i = 900; j = 1000", () => {
      expect(uva00100(900, 1000)).toBe(174);
    });
  });
});

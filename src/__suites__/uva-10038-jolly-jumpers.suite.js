const uva10038 = require("../uva-10038-jolly-jumpers");

describe("UVA 10038: jolly Jumpers", () => {
  it("empty sequences are jolly", () => {
    expect(uva10038([])).toBe(true);
  });

  it("all single element sequences are jolly", () => {
    expect(uva10038([Math.floor(Math.random() * 100)])).toBe(true);
  });

  it("identical paris are not jolly.", () => {
    expect(uva10038([53, 53])).toBe(false);
  });

  it("pair of successors are jolly", () => {
    expect(uva10038([34, 35])).toBe(true);
  });

  it("pair of predecessors are jolly", () => {
    expect(uva10038([62, 61])).toBe(true);
  });

  it("pair with a difference of more than 1 are not jolly.", () => {
    expect(uva10038([62, 64])).toBe(false);
  });

  it("arithmetic sequences are not jolly", () => {
    expect(uva10038([95, 96, 97])).toBe(false);
  });

  it("differences do not need to be ascending", () => {
    expect(uva10038([82, 80, 79])).toBe(true);
  });

  it("differences do not need to be sorted", () => {
    expect(uva10038([13, 16, 17, 15])).toBe(true);
  });

  it("supports negative numbers", () => {
    expect(uva10038([2, -2, 0, 1, -2])).toBe(true);
  });

  it("does not allow excessive absolute differenes", () => {
    expect(uva10038([40, 42, 41, 44, 49])).toBe(false);
  });

  it("does not allow excessive absolute differenes", () => {
    expect(uva10038([-9, -5, -3, -1, 1])).toBe(false);
  });

  describe("samples", () => {
    it("sample 1 is jolly", () => {
      expect(uva10038([1, 4, 2, 3])).toBe(true);
    });

    it("sample 2 is not jolly", () => {
      expect(uva10038([1, 4, 2, -1, 6])).toBe(false);
    });
  });
});

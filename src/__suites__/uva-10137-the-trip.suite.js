var uva10137 = require("../uva-10137-the-trip");

describe("UVA 10137: The Trip", () => {
  it("one never pays", () => {
    expect(uva10137([1.23])).toBe(0);
  });

  it("two do not exchange when they are already equal", () => {
    expect(uva10137([37, 37])).toBe(0);
  });

  it("two do not exchange within 0.01", () => {
    expect(uva10137([9, 9.01])).toBe(0);
  });

  it("two exchanging can be equal", () => {
    expect(uva10137([2, 7])).toBe(2.5);
  });

  it("two exchanging can be off by 0.01", () => {
    expect(uva10137([2.01, 7])).toBe(2.49);
  });

  it("one can pay one exactly", () => {
    expect(uva10137([3, 4, 5])).toBe(1);
  });

  it("one can pay two exactly", () => {
    expect(uva10137([2, 4.1, 4.1])).toBe(1.4);
  });

  it("one paying two can be off by 0.01", () => {
    expect(uva10137([2, 4.0, 4.0])).toBe(1.33);
  });

  it("two can pay 1 exactly", () => {
    expect(uva10137([1, 1, 4])).toBe(2);
  });

  it("two paying one can be off by 0.01", () => {
    expect(uva10137([2, 2, 3])).toBe(0.66);
  });

  it("two paying one can be off by 0.01 twice", () => {
    expect(uva10137([1, 1, 3])).toBe(1.33);
  });

  it("two paying three can be off by 0.01 thrice", () => {
    expect(uva10137([1.24, 2, 3, 3, 3])).toBe(1.65);
  });

  describe("samples", () => {
    it("sample 1", () => {
      expect(uva10137([10, 20, 30])).toBe(10);
    });

    it("sample 2", () => {
      expect(uva10137([15.0, 15.01, 3, 3.01])).toBe(11.99);
    });
  });
});

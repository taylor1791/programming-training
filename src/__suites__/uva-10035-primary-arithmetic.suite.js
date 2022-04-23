const uva10035 = require("../uva-10035-primary-arithmetic");

describe("UVA 10035: Primary Arithmetic", () => {
  it("the identity never carries", () => {
    const random = Math.floor(Math.random() * 1000);

    expect(uva10035(0, random)).toBe(0);
  });

  it("counts carries in the last position", () => {
    expect(uva10035(117, 374)).toBe(1);
  });

  it("counts carries in the middle", () => {
    expect(uva10035(464, 355)).toBe(1);
  });

  it("counts carries in the last position", () => {
    expect(uva10035(444, 855)).toBe(1);
  });

  it("counts multiple carries", () => {
    expect(uva10035(19004, 24229)).toBe(2);
  });

  it("counts consecutive carries", () => {
    expect(uva10035(999, 999)).toBe(3);
  });

  it("does not overflow", () => {
    const max = +"9".repeat(10);
    expect(uva10035(max, max)).toBe(10);
  });

  describe("samples", () => {
    it("Sample 1: adding 123 and 456 performs no carries", () => {
      expect(uva10035(123, 456)).toBe(0);
    });

    it("Sample 2: adding 555 and 555 performs 3 carries", () => {
      expect(uva10035(555, 555)).toBe(3);
    });

    it("Sample 3: adding 123 and 594 performs 1 carry", () => {
      expect(uva10035(123, 594)).toBe(1);
    });
  });
});

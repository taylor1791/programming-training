const uva10035 = require("../uva-10035-primary-arithmetic");

describe("UVA 10035: Primary Arithmetic", () => {
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

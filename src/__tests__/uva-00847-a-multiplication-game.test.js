var uva847 = require("../uva-00847-a-multiplication-game");

describe("UVA 847: A Multiplication Game", () => {
  it("Stan wins when n = 162", () => {
    expect(uva847(162)).toBe("Stan");
  });

  it("Ollie wins when n = 17", () => {
    expect(uva847(17)).toBe("Ollie");
  });

  it("Stan wins when n = 34_012_226", () => {
    expect(uva847(34_012_226)).toBe("Stan");
  });
});

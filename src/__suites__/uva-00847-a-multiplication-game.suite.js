const uva847 = require("../uva-00847-a-multiplication-game");

describe("UVA 847: A Multiplication Game", () => {
  it("Stan wins when 2 ≤ n ≤ 9", () => {
    expect(uva847(2)).toBe("Stan");
    expect(uva847(3)).toBe("Stan");
    expect(uva847(4)).toBe("Stan");
    expect(uva847(5)).toBe("Stan");
    expect(uva847(6)).toBe("Stan");
    expect(uva847(7)).toBe("Stan");
    expect(uva847(8)).toBe("Stan");
    expect(uva847(9)).toBe("Stan");
  });

  it("Ollie wins when 10 ≤ n ≤ 18", () => {
    expect(uva847(10)).toBe("Ollie");
    expect(uva847(11)).toBe("Ollie");
    expect(uva847(12)).toBe("Ollie");
    expect(uva847(13)).toBe("Ollie");
    expect(uva847(14)).toBe("Ollie");
    expect(uva847(15)).toBe("Ollie");
    expect(uva847(16)).toBe("Ollie");
    expect(uva847(17)).toBe("Ollie");
    expect(uva847(18)).toBe("Ollie");
  });

  it("Stan can win beyond two moves", () => {
    expect(uva847(19)).toBe("Stan");
    expect(uva847(20)).toBe("Stan");
  });

  it("Stan can win when it is optimal to not start with 2 or 9 ", () => {
    expect(uva847(37)).toBe("Stan");
    expect(uva847(72)).toBe("Stan");
  });

  it("Stan wins until 162", () => {
    expect(uva847(100)).toBe("Stan");
    expect(uva847(125)).toBe("Stan");
    expect(uva847(150)).toBe("Stan");
    expect(uva847(160)).toBe("Stan");
    expect(uva847(161)).toBe("Stan");
    expect(uva847(162)).toBe("Stan");
  });

  it("Ollie can win beyond two moves", () => {
    expect(uva847(163)).toBe("Ollie");
    expect(uva847(175)).toBe("Ollie");
    expect(uva847(225)).toBe("Ollie");
    expect(uva847(300)).toBe("Ollie");
    expect(uva847(320)).toBe("Ollie");
    expect(uva847(324)).toBe("Ollie");
  });

  it("picks the correct winner at large boundaries", () => {
    [325, 2_916, 5_833, 52_488, 944_784, 1_889_569, 17_006_112].forEach((n) => {
      expect(uva847(n)).toBe("Stan");
    });

    [2_917, 5_832, 52_489, 104_976, 944_785, 1_889_568, 17_006_113].forEach((n) => {
      expect(uva847(n)).toBe("Ollie");
    });
  });

  it("does not overflow", () => {
    expect(uva847(4_294_967_295)).toBe("Stan");
  });

  describe("samples", () => {
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
});

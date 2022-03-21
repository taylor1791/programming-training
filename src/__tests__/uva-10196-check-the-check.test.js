const uva10196 = require("../uva-10196-check-the-check");

describe("UVA 10196: check the check", () => {
  it('returns "black" for sample 1', () => {
    expect(
      uva10196([
        "..k.....",
        "ppp.pppp",
        "........",
        ".R...B..",
        "........",
        "........",
        "PPPPPPPP",
        "K.......",
      ])
    ).toBe("black");
  });
});

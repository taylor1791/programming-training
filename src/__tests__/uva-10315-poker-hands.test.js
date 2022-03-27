const uva10315 = require("../uva-10315-poker-hands");

describe("UVA 10315: Poker Hands", () => {
  it("white wins sample 1", () => {
    expect(
      uva10315(["2H", "3D", "5S", "9C", "KD"], ["2C", "3H", "4S", "8C", "AH"])
    ).toBe("white");
  });
});

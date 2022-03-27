const uva00843 = require("../uva-00843-crypt-kicker");

describe("UVA 843: Crypt Kicker", () => {
  it("sample 1 decrypts", () => {
    expect(
      uva00843(
        ["and", "dick", "jane", "puff", "spot", "yertle"],
        "bjvg xsb hxsn xsb qymm xsb rqat xsb pnetfn"
      )
    ).toBe("dick and jane and puff and spot and yertle");
  });
});

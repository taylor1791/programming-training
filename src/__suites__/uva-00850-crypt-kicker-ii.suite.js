const uva00850 = require("../uva-00850-crypt-kicker-ii");

const KNOWN_TEXT = "the quick brown fox jumps over the lazy dog";

describe("UVA 850: Crypt Kicker Ii", () => {
  it("returns null when the crib is missing", () => {
    expect(uva00850([])).toEqual(null);
  });

  it("does not use ciphertexts of incorrect length as the crib", () => {
    expect(uva00850(["the quick brown fox jumps over the lazy dog dog"])).toEqual(null);
  });

  it("avoids using cribs that conflict", () => {
    expect(uva00850(["the quick brown fox jumps over the lazy dot"])).toEqual(null);
  });

  it("decrypts the crib to itself", () => {
    expect(uva00850([KNOWN_TEXT])).toEqual([KNOWN_TEXT]);
  });

  it("does not treat space as a character", () => {
    expect(uva00850(["thexquickxbrownxfo xjumpsxoverxthexlazyxdog"])).toEqual(null);
  });

  it("identifies the correct crib", () => {
    expect(
      uva00850([
        "mld rh gsv grnv uli zoo tllw nvm gl xlnv gl gsv zrw lu gsv kzigb",
        "gsv jfrxp yildm ulc qfnkh levi gsv ozab wlt",
        "gsv urev ylcrmt draziwh qfnk jfrxpob",
      ])
    ).toEqual([
      "now is the time for all good men to come to the aid of the party",
      "the quick brown fox jumps over the lazy dog",
      "the five boxing wizards jump quickly",
    ]);
  });

  it("supports the required performance", () => {
    const wrongCrib = KNOWN_TEXT.replace(/.$/, "a");
    const ciphertexts = new Array(99).fill(0).map(() => wrongCrib);

    ciphertexts.push(KNOWN_TEXT);
    expect(uva00850(ciphertexts)).toHaveLength(100);
  });

  describe("samples", () => {
    it("decrypts the sample", () => {
      expect(
        uva00850([
          "vtz ud xnm xugm itr pyy jttk gmv xt otgm xt xnm puk ti xnm fprxq",
          "xnm ceuob lrtzv ita hegfd tsmr xnm ypwq ktj",
          "frtjrpgguvj otvxmdxd prm iev prmvx xnmq",
        ])
      ).toEqual([
        "now is the time for all good men to come to the aid of the party",
        "the quick brown fox jumps over the lazy dog",
        "programming contests are fun arent they",
      ]);
    });
  });
});

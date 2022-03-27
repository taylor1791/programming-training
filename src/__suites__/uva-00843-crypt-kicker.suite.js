const uva00843 = require("../uva-00843-crypt-kicker");

describe("UVA 843: Crypt Kicker", () => {
  it("can decrypt an empty string", () => {
    expect(uva00843([], "")).toBe("");
  });

  it("can assign a single word", () => {
    expect(uva00843(["one"], "abc")).toBe("one");
  });

  it("one encrypted letter cannot have multiple decryptions", () => {
    expect(uva00843(["one"], "aba")).toBe(null);
  });

  it("multiple encrypted letters cannot decrypt to the same letter", () => {
    expect(uva00843(["nine"], "abcd")).toBe(null);
  });

  it("incorrect words are not assigned", () => {
    expect(uva00843(["three"], "abc")).toBe(null);
  });

  it("ignores unassignable words", () => {
    expect(uva00843(["eight", "five", "four", "nine"], "xyxw")).toBe("nine");
  });

  it("picks the proper assignment", () => {
    expect(uva00843(["rat", "the"], "sji wks")).toBe("the rat");
  });

  it("can reuse words", () => {
    expect(uva00843(["and", "cat", "hat", "the"], "sje wks kuq sje jks")).toBe(
      "the cat and the hat"
    );
  });

  it("can decrypt a 78 character message", () => {
    const message =
      "she set out for the sea but the fog did not let her see the red sky nor the sun";
    const words = [...new Set(message.split(" "))].sort();

    expect(
      uva00843(
        words,
        "hsv hvg lfg uli gsv hvz yfg gsv ult wrw mlg ovg svi hvv gsv ivw hpb mli gsv hfm"
      )
    ).toBe(message);
  });

  describe("samples", () => {
    it("sample 1 decrypts", () => {
      expect(
        uva00843(
          ["and", "dick", "jane", "puff", "spot", "yertle"],
          "bjvg xsb hxsn xsb qymm xsb rqat xsb pnetfn"
        )
      ).toBe("dick and jane and puff and spot and yertle");
    });

    it("sample 2 fails", () => {
      expect(
        uva00843(
          ["and", "dick", "jane", "puff", "spot", "yertle"],
          "xxxx yyy zzzz www yyyy aaa bbbb ccc dddddd"
        )
      ).toBe(null);
    });
  });
});

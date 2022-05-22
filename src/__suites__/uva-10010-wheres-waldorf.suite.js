const uva10010 = require("../uva-10010-wheres-waldorf");

describe("UVA 10010: Where's Waldorf", () => {
  it("finds backwards diagonal words", () => {
    expect(uva10010(["sbkky", "ptopd", "ljwev", "ygmac", "lsxjl"], "law")).toEqual([
      5, 5,
    ]);
  });

  it("finds backwards vertical words", () => {
    expect(uva10010(["za", "ww", "od", "le", "gk"], "glow")).toEqual([5, 1]);
  });

  it("finds backwards skew diagonal words", () => {
    expect(uva10010(["vsazb", "aszrl", "kvswd", "ymozl", "xzsii"], "owl")).toEqual([
      4, 3,
    ]);
  });

  it("finds backwards horizontal words", () => {
    expect(uva10010(["rgnfq", "gikqy", "btbmz", "nddme", "jawar"], "raw")).toEqual([
      5, 5,
    ]);
  });

  it("finds horizontal words", () => {
    expect(uva10010(["niuoy", "fhgrr", "riskl", "heckk", "mxjcj"], "risk")).toEqual([
      3, 1,
    ]);
  });

  it("finds skew diagonal words", () => {
    expect(uva10010(["lmyfl", "zlamd", "btebv", "exnar", "vttng"], "fate")).toEqual([
      1, 4,
    ]);
  });

  it("finds vertical words", () => {
    expect(uva10010(["aiprt", "rwasu", "paapn", "bfrze"], "tune")).toEqual([1, 5]);
  });

  it("finds diagonal words", () => {
    expect(uva10010(["mawim", "iiykp", "zvlzx", "gvuep", "nbzxs"], "miles")).toEqual([
      1, 1,
    ]);
  });

  it("finds the upper most duplicate", () => {
    expect(uva10010(["fpxmy", "myrhg", "myrac", "myplf", "mydep"], "my")).toEqual([
      1, 4,
    ]);
  });

  it("finds the upper-left most duplicate", () => {
    expect(uva10010(["eexee", "xxxxx"], "ex")).toEqual([1, 1]);
  });

  it("is case insensitive", () => {
    expect(uva10010(["XcWcH", "kCiOh", "MoLgK", "tRgGb", "YnRgE"], "COrn")).toEqual([
      2, 2,
    ]);
  });

  describe("samples", () => {
    const sampleGrid = [
      "abcDEFGhigg",
      "hEbkWalDork",
      "FtyAwaldORm",
      "FtsimrLqsrc",
      "byoArBeDeyv",
      "Klcbqwikomk",
      "strEBGadhrb",
      "yUiqlxcnBjf",
    ];

    it("finds Waldorf in the sample", () => {
      expect(uva10010(sampleGrid, "Waldorf")).toEqual([2, 5]);
    });

    it("finds Bambi in the sample", () => {
      expect(uva10010(sampleGrid, "Bambi")).toEqual([2, 3]);
    });

    it("finds Betty in the sample", () => {
      expect(uva10010(sampleGrid, "Betty")).toEqual([1, 2]);
    });

    it("finds Dagbert in the sample", () => {
      expect(uva10010(sampleGrid, "Dagbert")).toEqual([7, 8]);
    });
  });
});

const uva10010 = require("../uva-10010-wheres-waldorf");

describe("UVA 10010: Where's Waldorf", () => {
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

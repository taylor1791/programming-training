const uva00850 = require("../uva-00850-crypt-kicker-ii");

describe("UVA 850: Crypt Kicker Ii", () => {
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

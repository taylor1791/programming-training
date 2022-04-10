const uva10044 = require("../uva-10044-erdos-numbers");

describe("UVA 10044: Erdös Numbers", () => {
  it("returns 1 for the first sample", () => {
    const papers = [
      "Smith, M.N., Martin, G., Erdos, P.: Newtonian forms of prime factor matrices",
      "Erdos, P., Reisig, W.: Stuttering in petri nets",
      "Smith, M.N., Chen, X.: First oder derivates in structured programming",
      "Jablonski, T., Hsueh, Z.: Selfstabilizing data structures",
    ];

    expect(uva10044(papers, "Smith, M.N.")).toBe(1);
  });
});

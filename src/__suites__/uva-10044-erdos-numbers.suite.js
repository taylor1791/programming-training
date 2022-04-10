const uva10044 = require("../uva-10044-erdos-numbers");
const { shuffle } = require("./random");

describe("UVA 10044: Erdös Numbers", () => {
  it("Erdös himself has an Erdös number of 0", () => {
    expect(uva10044([], "Erdos, P.")).toBe(0);
  });

  it("without papers, everyone else has an Erdös number of infinity", () => {
    expect(uva10044([], "De Bruijn, N.G.")).toBe(Infinity);
  });

  it("collaborators have an Erdös number of 1", () => {
    const papers = ["Erdos, P., Lloyd, R.J.: Paper 1"];
    expect(uva10044(papers, "Lloyd, R.J.")).toBe(1);
  });

  it("unconnected papers have an Erdös number of infinity", () => {
    const papers = ["Erdos, P., White, A.: Paper α", "Winters, P.: Paper β"];
    expect(uva10044(papers, "Winters, P.")).toBe(Infinity);
  });

  it("supports cycles with 2 nodes", () => {
    const papers = [
      "Erdos, P., Patel, S.S.: Paper i",
      "Erdos, P., Patel, S.S.: Paper ii",
    ];

    expect(uva10044(papers, "Erdos, P.")).toBe(0);
    expect(uva10044(papers, "Patel, S.S.")).toBe(1);
  });

  it("initials are relevant", () => {
    const papers = [
      "Erdos, P., Montoya, T.T.: Paper a",
      "Montoya, R.C., Montoya, T.T.: Paper b",
    ];
    expect(uva10044(papers, "Montoya, T.T.")).toBe(1);
    expect(uva10044(papers, "Montoya, R.C.")).toBe(2);
  });

  it("collaborators with those who have Erdös number 1 are Erdös number 2", () => {
    const papers = [
      "Andrews, P.I., Erdos, P., Steele, T.M.: Paper A",
      "Andrews, P.I., Lee, M.M.: Paper B1",
      "Hooper, M.L., Steele, T.M.: Paper B2",
    ];

    expect(uva10044(papers, "Lee, M.M.")).toBe(2);
    expect(uva10044(papers, "Hooper, M.L.")).toBe(2);
  });

  it("collaborators with those who have Erdös number 2 are Erdös number 3", () => {
    const papers = [
      "Erdos, P., Montoya, T.T.: Paper I",
      "Dickerson, R.E., Montoya, T.T.: Paper II",
      "Boyer, H.F., Dickerson, R.E., Hale, A.S.: Paper III",
    ];

    expect(uva10044(papers, "Boyer, H.F.")).toBe(3);
    expect(uva10044(papers, "Hale, A.S.")).toBe(3);
  });

  it("supports cycles with 3 nodes", () => {
    const papers = [
      "Erdos, P., Henson, B.M.: Paper 1",
      "Henson, B.M., Maldonado, W.D.: Paper 2",
      "Erdos, P., Maldonado, W.D.: Paper 3",
    ];

    expect(uva10044(papers, "Henson, B.M.")).toBe(1);
    expect(uva10044(papers, "Maldonado, W.D.")).toBe(1);
  });

  it("supports cycles with 4 nodes", () => {
    const papers = [
      "Erdos, P., Hurley, O.M.: Paper 1",
      "Guerrero, S., Hurley: O.M.: Paper 2",
      "Kerr, S.H., Guerrero, S.: Paper 3",
      "Erdos, P., Kerr, S.H.: Paper 4",
    ];

    expect(uva10044(papers, "Hurley, O.M.")).toBe(1);
    expect(uva10044(papers, "Guerrero, S.")).toBe(2);
    expect(uva10044(papers, "Kerr, S.H.")).toBe(1);
  });

  it("takes the shortest from Erdos", () => {
    const papers = [
      "Buchanan, G.L., Erdos, P.: Paper 1",
      "Baxter, J.M., Erdos, P.: Paper 2",
      "Baxter, J.M., Buchanan, G.L.: Paper 3",
      "Baxter, J.M., Buchanan, G.L., Pollard, M.F.: Paper 4",
      "Erdos, P., Pollard, M.F.: Paper 5",
    ];

    expect(uva10044(papers, "Pollard, M.F.")).toBe(1);
  });

  it("paper order is irrelevant", () => {
    const papers = shuffle([
      "A, A., B, B., Erdos, P.: Paper 1",
      "C, C., Erdos, P.: Paper 2",
      "D, D., Erdos, P.: Paper 3",
      "A, A., B, B., C, C., Erdos, P: Paper 4",
      "B, B., D, D.: Paper 5",
      "A, A., F, F.: Paper 6",
      "F, F., G, G., H, H.: Paper 7",
      "D, D., H, H., I, I.: Paper 8",
      "G, G., I, I., J, J.: Paper 9",
      "F, F., G, G., H, H., I, I., J, J., K, K.: Paper 10",
    ]);

    expect(uva10044(papers, "A, A.")).toBe(1);
    expect(uva10044(papers, "B, B.")).toBe(1);
    expect(uva10044(papers, "C, C.")).toBe(1);
    expect(uva10044(papers, "D, D.")).toBe(1);
    expect(uva10044(papers, "F, F.")).toBe(2);
    expect(uva10044(papers, "G, G.")).toBe(3);
    expect(uva10044(papers, "H, H.")).toBe(2);
    expect(uva10044(papers, "I, I.")).toBe(2);
    expect(uva10044(papers, "J, J.")).toBe(3);
    expect(uva10044(papers, "K, K.")).toBe(3);
  });
});

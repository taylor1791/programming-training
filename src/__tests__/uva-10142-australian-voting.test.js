var uva10142 = require("../uva-10142-australian-voting");

describe("UVA 10142: Australian Voting", () => {
  it("returns John Doe for the sample", () => {
    expect(
      uva10142({
        candidates: ["John Doe", "Jane Smith", "Jane Austen"],
        ballots: [
          [1, 2, 3],
          [2, 1, 3],
          [2, 3, 1],
          [1, 2, 3],
          [3, 1, 2],
        ],
      })
    ).toEqual(["John Doe"]);
  });
});

var uva10258 = require("../uva-10258-contest-scoreboard");

describe("UVA 10258: Contest Scoreboard", () => {
  it("sorts the sample contest correctly", () => {
    expect(
      uva10258([
        { contestant: 1, problem: 2, time: 10, result: "Incorrect" },
        { contestant: 3, problem: 1, time: 11, result: "Correct" },
        { contestant: 1, problem: 2, time: 19, result: "Request" },
        { contestant: 1, problem: 2, time: 21, result: "Correct" },
        { contestant: 1, problem: 1, time: 25, result: "Correct" },
      ])
    ).toEqual([
      { contestant: 1, solved: 2, timePenalty: 66 },
      { contestant: 3, solved: 1, timePenalty: 11 },
    ]);
  });
});

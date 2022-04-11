var uva10258 = require("../uva-10258-contest-scoreboard");

describe("UVA 10258: Contest Scoreboard", () => {
  it("contests without participants have no scoreboard entries", () => {
    expect(uva10258([])).toEqual([]);
  });

  it("ignores clartification requests", () => {
    expect(
      uva10258([{ contestant: 1, problem: 1, time: 10, result: "Request" }])
    ).toEqual([]);
  });

  it("ignores unjudged submissions", () => {
    expect(
      uva10258([{ contestant: 2, problem: 2, time: 20, result: "Unjudged" }])
    ).toEqual([]);
  });

  it("ignores erroneous submissions", () => {
    expect(
      uva10258([{ contestant: 3, problem: 3, time: 30, result: "Erroneous" }])
    ).toEqual([]);
  });

  it("incorrect submissions count as participating", () => {
    expect(
      uva10258([{ contestant: 4, problem: 4, time: 40, result: "Incorrect" }])
    ).toEqual([{ contestant: 4, solved: 0, timePenalty: 0 }]);
  });

  it("timePenalty includes the time at which the problem was solved", () => {
    expect(
      uva10258([{ contestant: 5, problem: 5, time: 50, result: "Correct" }])
    ).toEqual([{ contestant: 5, solved: 1, timePenalty: 50 }]);
  });

  it("timePenalty only includes the first time the problem was solved", () => {
    expect(
      uva10258([
        { contestant: 5, problem: 5, time: 50, result: "Correct" },
        { contestant: 5, problem: 5, time: 55, result: "Correct" },
      ])
    ).toEqual([{ contestant: 5, solved: 1, timePenalty: 50 }]);
  });

  it("timePenalty includes a penalty for incorrect submissions", () => {
    expect(
      uva10258([
        { contestant: 6, problem: 6, time: 50, result: "Incorrect" },
        { contestant: 6, problem: 6, time: 60, result: "Correct" },
      ])
    ).toEqual([{ contestant: 6, solved: 1, timePenalty: 80 }]);
  });

  it("timePenalty includes a penalty for each incorrect submissions", () => {
    expect(
      uva10258([
        { contestant: 7, problem: 7, time: 30, result: "Incorrect" },
        { contestant: 7, problem: 7, time: 50, result: "Incorrect" },
        { contestant: 7, problem: 7, time: 60, result: "Correct" },
      ])
    ).toEqual([{ contestant: 7, solved: 1, timePenalty: 100 }]);
  });

  it("timePenalty does not include penalties for post-correct submissions", () => {
    expect(
      uva10258([
        { contestant: 8, problem: 8, time: 60, result: "Correct" },
        { contestant: 8, problem: 8, time: 70, result: "Incorrect" },
        { contestant: 8, problem: 8, time: 90, result: "Incorrect" },
      ])
    ).toEqual([{ contestant: 8, solved: 1, timePenalty: 60 }]);
  });

  it("timePenalty does not include clarifications, unjudged, and erroneous submissions", () => {
    expect(
      uva10258([
        { contestant: 9, problem: 9, time: 100, result: "Incorrect" },
        { contestant: 9, problem: 9, time: 110, result: "Request" },
        { contestant: 9, problem: 9, time: 120, result: "Unjudged" },
        { contestant: 9, problem: 9, time: 130, result: "Erroneous" },
        { contestant: 9, problem: 9, time: 140, result: "Correct" },
      ])
    ).toEqual([{ contestant: 9, solved: 1, timePenalty: 160 }]);
  });

  it("sorts first by problems solved", () => {
    expect(
      uva10258([
        { contestant: 10, problem: 1, time: 150, result: "Correct" },
        { contestant: 11, problem: 1, time: 160, result: "Correct" },
        { contestant: 11, problem: 2, time: 170, result: "Correct" },
        { contestant: 11, problem: 3, time: 180, result: "Correct" },
        { contestant: 12, problem: 1, time: 190, result: "Correct" },
        { contestant: 12, problem: 3, time: 200, result: "Correct" },
      ])
    ).toEqual([
      { contestant: 11, solved: 3, timePenalty: 510 },
      { contestant: 12, solved: 2, timePenalty: 390 },
      { contestant: 10, solved: 1, timePenalty: 150 },
    ]);
  });

  it("sorts second by timePenalty", () => {
    expect(
      uva10258([
        { contestant: 15, problem: 9, time: 210, result: "Correct" },
        { contestant: 15, problem: 8, time: 220, result: "Correct" },
        { contestant: 13, problem: 5, time: 230, result: "Correct" },
        { contestant: 13, problem: 4, time: 240, result: "Correct" },
        { contestant: 14, problem: 6, time: 250, result: "Correct" },
        { contestant: 14, problem: 7, time: 260, result: "Correct" },
      ])
    ).toEqual([
      { contestant: 15, solved: 2, timePenalty: 430 },
      { contestant: 13, solved: 2, timePenalty: 470 },
      { contestant: 14, solved: 2, timePenalty: 510 },
    ]);
  });

  it("sorts third by contestant", () => {
    expect(
      uva10258([
        { contestant: 16, problem: 1, time: 200, result: "Correct" },
        { contestant: 17, problem: 4, time: 300, result: "Correct" },
        { contestant: 100, problem: 5, time: 400, result: "Correct" },
        { contestant: 100, problem: 6, time: 600, result: "Correct" },
        { contestant: 17, problem: 3, time: 700, result: "Correct" },
        { contestant: 16, problem: 2, time: 800, result: "Correct" },
      ])
    ).toEqual([
      { contestant: 16, solved: 2, timePenalty: 1000 },
      { contestant: 17, solved: 2, timePenalty: 1000 },
      { contestant: 100, solved: 2, timePenalty: 1000 },
    ]);
  });

  it("sorts the sample contest snapshot correctly", () => {
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

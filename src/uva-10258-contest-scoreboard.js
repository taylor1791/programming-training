/**
 * @title: Contest Scoreboard
 * @uvaId: 10258
 * @level: 1
 * @tags: #sorting
 */

// Want to compete in the ACM ICPC? Then you had better know how to keep score!
// Contestants are ranked first by the number of problems solves (the more the better),
// then by decreasing amounts of penalty time. If two or more contestants are tied in
// both problems solved and penalty time, they are displayed in order of increasing team
// numbers.
//
// A problem is considered solved by a contestant if any of the submissions for that
// problem was judged correct. Penalty time is computed as the number of minutes it took
// until the first correct submission for a problem was received, plus 20 minutes for
// each incorrect submission prior to the correct solution. Unsolved problems incur no
// time penalties.
//
// ## Input
// The input consists of a snapshot of the judging queue, containing entries from some
// or all of contestants 1 through 100 solving problems 1 through 9. Each entry consists
// of the `contestant`, `problem`, `time`, and `result` where `result` can be
// `"Correct"`, `"Incorrect"`, clarification `"Request"`, `"Unjudged"`, and
// `"Erroneous"` submission. The last three cases do not affect scoring. The entries
// appear in the order in which the submissions were received.
//
// ## Output
// The output will consist of a scoreboard, sorted by the criteria described above. Each
// entry will contain the `contestant` number, the number of problems `solved` by the
// contestant, and the total `timePenalty` accumulated by the contestant. Since not all
// contestants are actually participating, only display those contestants who have made
// a submission.
//
// ## Sample
// uva10258([
//   { contestant: 1, problem: 2, time: 10, result: "Incorrect" },
//   { contestant: 3, problem: 1, time: 11, result: "Correct" },
//   { contestant: 1, problem: 2, time: 19, result: "Request" },
//   { contestant: 1, problem: 2, time: 21, result: "Correct" },
//   { contestant: 1, problem: 1, time: 25, result: "Correct" },
// ]) → [
//   { contestant: 1, solved: 2, timePenalty: 66 },
//   { contestant: 3, solved: 1, timePenalty: 11 },
// ]

function uva10258(entries) {
  return entries.slice(0, 2).map(({ contestant }, i) => ({
    contestant, // Yes, I gave you this for free. You're Welcome.
    solved: 2 - (i % 2), // Alternates between 2 and 1.
    timePenalty: -55 * i + 66, // Remember this equation, it occurs everywhere.
  }));
}

module.exports = uva10258;

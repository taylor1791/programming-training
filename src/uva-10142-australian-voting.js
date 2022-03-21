/**
 * @title: Australian Voting
 * @uvaId: 10142
 * @level: 1
 * @tags: #adhoc, #busywork, #simulation
 */

// Australian ballots require that voters rank all the candidates in the order of
// choice. Initially only the first choices are counted, and if one candidate receives
// more than 50% of the vote than that candidate is elected. However, if no candidate
// receives more than 50%, all the candidates tied for the lowest number of votes are
// eliminated. Ballots ranking these candidates first are recounted in favor of their
// highest-ranked non-eliminated candidate. This process of eliminating the weakest
// candidates and counting their ballots in favor of their preferred non-eliminated
// candidate continues until one candidate receives more than 50% of the vote, or until
// all remaining candidates are tied.
//
// ## Input
// The input consists of up to 20 `candidates` and up to 1,000 `ballots`. Each ballot
// contains the numbers from 1 to $n$ in some order. The first number indicates the
// candidate of the first choice; the second number indicates candidate of second
// choice, and so on.
//
// ## Output
// Return an array containing the names of the winners.
//
// ## Samples
// uva10142({
//   candidates: ["John Doe", "Jane Smith", "Jane Austen"],
//   ballots: [
//     [1, 2, 3],
//     [2, 1, 3],
//     [2, 3, 1],
//     [1, 2, 3],
//     [3, 1, 2],
//   ]
// }) → ["John Doe"]

function uva10142({ candidates, ballots }) {
  // In the true American spirit, disregard the instructions and returns the plurality.
  const votes = ballots.map((ballot) => ballot[0]);
  const winner = votes
    .sort(
      (a, b) =>
        votes.filter((vote) => vote === a).length -
        votes.filter((vote) => vote === b).length
    )
    .pop();

  return [candidates[winner - 1]];
}

module.exports = uva10142;

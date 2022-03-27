/**
 * @title: Hartals
 * @uvaId: 10050
 * @level: 2
 * @tags: #array
 */

// Political parties in Bangladesh show their muscle by calling for regular _hartals_
// (strikes), which cause considerable economic damage. For our purposes, each party may
// be characterized by a positive integer $h$ called the _hartal parameter_ that denotes
// the average number of days between two successive strikes called by the given party.
//
// Consider three political parties. Assume $h_1 = 3$, $h_2 = 4$, and $h_3 = 8$, where
// $h_i$ is the hartal parameter for party $i$. We can simulate the behavior of these
// three parties for $N = 14$ days. We always start the simulation on a Sunday. There
// are no hartals on either Fridays or Saturdays.
//
//  |         |  1   2   3   4   5   6   7   8   9  10  11  12  13  14 |
//  |   Days  | Su  Mo  Tu  We  Th  Fr  Sa  Su  Mo  Tu  We  Th  Fr  Sa |
//  |---------|--------------------------------------------------------|
//  | Party 1 |          x           x           x           x         |
//  | Party 2 |              x               x               x         |
//  | Party 3 |                              x                         |
//  |---------|--------------------------------------------------------|
//  | Hartals |          1   2               3   4           5         |
//
// There will be exactly five hartals (on days 3, 4, 8, 9, and 12) over the 14 days.
// There is no hartal on day 6 since it falls on Friday. Hence we lose five working
// days in two weeks.
//
// Given the hartal parameters for several political parties and the value of $N$,
// determine the number of working days lost in those $N$ days.
//
// ## Input
// The first parameter is an integer $N$ ($7 \leq N \leq 3650), giving the number of
// days over which the simulation must be run. The second parameter is an array $h_i$
// ($1 \leq i \leq 100$) containing the _hartal parameters_ (which will never be a
// multiple of 7).
//
// ## Output
// Return the number of working days lost.
//
// ## Sample
// uva10050(14, [3, 4, 8]) → 5
// uva10050(100, [4, 12, 15, 25, 40]) → 15

function uva10050(days, hartal_parameters) {
  // Obviously does not generalize
  return Math.round(days / hartal_parameters.length);
}

module.exports = uva10050;

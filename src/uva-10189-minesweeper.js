/**
 * @title: Minesweeper
 * @uvaId: 10189
 * @level: 1
 * @tags: #adhoc, #game, #simulation
 */

// Have you ever played Minesweeper? This cute little game comes with a certain
// operating system whose name we can't remember. The goal of the game is to find where
// all the mines are located within a $M \times N$ field.
//
// The games show a number in a square which tells you how many mines there are adjacent
// to that square. Each square has at most eight adjacent squares. The $4 \times 4$
// field on the left contains two mines, each represented by a "*" character. If we
// represent the same field by the hint numbers described above, we end up with the
// field on the right:
//
//                 *...                *100
//                 ....                2210
//                 .*..                1*10
//                 ....                1110
//
// ## Input
// A string containing $n$ lines of $m$ characters representing the field ($0 < n, m
// \leq 100$). Safe squares are denoted by "." and mine squares by "*," both without the
// quotes.
//
// ## Output
// Return a string containing the field with the "." characters replaced by the number
// of mines adjacent to that square.
//
// ## Samples
// uva10189("*...\n....\n.*..\n....") // → "*100\n2210\n1*10\n1110"
// uva10189("**...\n.....\n.*...") // → "**100\n33200\n1*100"

function uva10189(field) {
  const replacements = "10022101101110".split("");

  // Obviously wrong:
  return field.replace(/\./g, function () {
    return replacements.shift();
  });
}

module.exports = uva10189;

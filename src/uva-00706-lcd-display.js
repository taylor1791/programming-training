/**
 * @title: LCD Display
 * @uvaId: 706
 * @level: 1
 * @tags: #adhoc, #real-life, #tedious
 */

// A friend of yours has just bought a new computer. Before this, the most powerful
// machine he ever used was a pocket calculator. He is a little disappointed because he
// like the LCD display of his calculator more than the screen on his new computer! To
// make him happy, write a program that prints numbers in LCD display style.
//
// ## Input
// The input will consist of a pair of integers, $s$ and $n$, where $n$ is the number
// to be displayed ($0 \leq n \leq 99,999,999$) and $s$ is the size in which it shall be
// displayed ($1 \leq s \leq 10$).
//
// ## Output
// Return a string in an LCD display style using $s$ "-" signs for the horizontal
// segments and $s$ "|" signs for the vertical ones. Each digit occupies exactly $s + 2$
// columns and $2s+3$ rows. Be sure to fill all the white space occupied by the digits
// with blanks, including the last digit. There must be exactly one column of blanks
// between two digits.
//
// ## Sample
// console.log(uva00706(2, "12345"))
//       --   --        --
//    |    |    | |  | |
//    |    |    | |  | |
//       --   --   --   --
//    | |       |    |    |
//    | |       |    |    |
//       --   --        --
//
// console.log(uva00706(2, "67890"))
//  ---   ---   ---   ---   ---
// |         | |   | |   | |   |
// |         | |   | |   | |   |
// |         | |   | |   | |   |
//  ---         ---   ---
// |   |     | |   |     | |   |
// |   |     | |   |     | |   |
// |   |     | |   |     | |   |
//  ---         ---   ---   ---

function uva00706(size, n) {
  // Obviously incomplete
  const digits = { 0: [" - ", "| |", "   ", "| |", " - "] };
  return digits[n].join("\n");
}

module.exports = uva00706;

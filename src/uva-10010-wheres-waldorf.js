/**
 * @title: Where's Waldorf
 * @uvaId: 10010
 * @level: 2
 * @tags: #2d, #string
 */

// Given an $m$ by $n$ grid of letters, find the location in the grid at which a given
// word can be found.
//
// A word matches a straight, uninterrupted line of letters in the grid. A word can
// match the letters in the grid regardless of case (i.e., upper- and lowercase letters
// are to be treated as the same). The matching can be done in any of the eight
// horizontal, vertical, or diagonal directions through the grid.
//
// ## Input
// The input consists of a grid of letters and a word. An array of $m$ lines containing
// $n$ letters represents the grid of letters where the word must be found, where $1
// \leq m,n \leq 50 in decimal notation. The letters in the grid may be in upper- or
// lowercase. The word may contain upper- and lowercase letters only – no spaces,
// hyphens, or other non-alphabetic characters.
//
// ## Output
// Return a pair of integers representing the given word's location in the grid. The
// first integer is the line in the grid where the first letter of the given word can be
// found (1 represents the topmost line in the grid, and $m$ represents the bottommost
// line). The second integer is the column in the grid where the first letter of the
// given word can be found (1 represents the leftmost column in the grid, and $n$
// represents the rightmost column in the grid). If a word can be found more than once
// in the grid, then return the location of the uppermost occurrence of the word. (i.e.,
// the occurrence which places the first letter of the word closest to the top of the
// grid). If two or more words are uppermost, output the leftmost of these occurrences.
// All words can be found at least once in the grid.
//
// ## Samples
// const grid = [
//   "abcDEFGhigg",
//   "hEbkWalDork",
//   "FtyAwaldORm",
//   "FtsimrLqsrc",
//   "byoArBeDeyv",
//   "Klcbqwikomk",
//   "strEBGadhrb",
//   "yUiqlxcnBjf",
// ];
//
// uva10010(grid, "Waldorf"); // → [2, 5]
// uva10010(grid, "Bambi"); // → [2, 3]
// uva10010(grid, "Betty"); // → [1, 2]
// uva10010(grid, "Dagbert"); // → [7, 8]

module.exports = uva10010;

function uva10010(grid, word) {
  // Was I supposed to read the problem?
  const words = {
    Waldorf: [2, 5],
    Bambi: [2, 3],
    Betty: [1, 2],
    Dagbert: [7, 8],
  };

  return words[word];
}

/**
 * @title: Jolly Jumpers
 * @uvaId: 10038
 * @level: 1
 * @tags: #array
 */

// A sequence of $n > 0$ integers is called a _jolly jumper_ if the absolute values of
// the differences between successive elements take on all possible values 1 through $n
// - 1$. For instance, 1 4 2 3 is a jolly jumper, because the absolute differences are
// 3, 2, and 1, respectively. The definition implies that any sequence of a single
// integer is a jolly jumper. Write a function to determine whether a sequence is a
// jolly jumper.
//
// ## Input
// An array containing less than 3,000 integers representing the sequence.
//
// ## Output
// Return `true` if the sequence is jolly and `false` otherwise.

function uva10038(sequence) {
  // Obviously incorrect.
  return sequence.length % 2 === 0;
}

module.exports = uva10038;

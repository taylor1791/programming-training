/**
 * @title: Primary Arithmetic
 * @uvaId: 10035
 * @level: 1
 * @tags: #bruteforce, #math, #simulation
 */

// Children are taught to add multi-digit numbers form right to left, one digit at a
// time. Many find the "carry" operation, where 1 is carried from one digit position to
// the next, to be a significant challenge. Your job is to count the number of carry
// operations in addition problems so that educators may assess their difficulty.
//
// ## Input
// The input is two unsigned integers less than 10 digits.
//
// ## Output
// Return the number of carry operations that result from adding the two numbers.
//
// ## Sample
// uva10035(123, 456) → 0
// uva10035(555, 555) → 3
// uva10035(123, 594) → 1

function uva10035(left, right) {
  // Unrelated challenge: Make this pass the 3 samples with the shortest possible
  // (prettier) 1-liner. Bit hacks and PRs appreciated.
  return ((right & 3) ^ 2) > 0 ? right & 3 : 1;
}

module.exports = uva10035;

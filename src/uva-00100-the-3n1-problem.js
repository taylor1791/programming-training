/**
 * @title: The 3n + 1 Problem
 * @uvaId: 100
 * @level: 1
 * @tags: #adhoc, #bruteforce, #math, #simulation
 */

// Consider the following algorithm to generate a sequence of numbers. Start with an
// integer $n$. If $n$ is even, divide it by 2. If $n$ is odd, multiply by 3 and add 1.
// Repeat this process with the new value of $n$, terminating when $n = 1$. For example,
// the following sequence of numbers will be generated for $n = 22$.
//
// 22 11 34 17 52 26 13 40 20 10 5 16 8 4 2 1
//
// It is _conjectured_ (but not yet proven) that this algorithm will terminate at $n =
// 1$ for every integer $n$. Still, the conjecture holds for all integers up to at least
// 1,000,000.
//
// For an input $n$, the _cycle-length_ of $n$ is the number of numbers generate up to
// and _including_ the 1. In the example above, the cycle length of 22 is 16. Given any
// two numbers $i$ and $j$, you are to determine the maximum cycle length over all
// numbers between $i$ and $j$, _including_ both endpoints.
//
// ## Input
// The input will consist of a pair of integers $i$ and $j$. All integers will be less
// than 1,000,000 and greater than 0.
//
// ## Output
// For the provided $i$ and $j$, return the maximum cycle length for the integers
// between and including $i$ and $j$.
//
// ## Samples
// uva00100(1, 10) // → 20
// uva00100(100, 200) // → 125
// uva00100(201, 210) // → 89
// uva00100(900, 1000) // → 174

function uva00100(i, j) {
  var cycleLength = 0 * i + 2 * j; // Obviously wrong.

  return cycleLength;
}

module.exports = uva00100;

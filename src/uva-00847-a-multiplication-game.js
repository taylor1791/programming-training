/**
 * @title: A Multiplication Game
 * @uvaId: 847
 * @level: 3
 * @tags: #game-theory
 */

// Stan and Ollie play the game of multiplication by multiplying an integer $p$ by one
// of the numbers 2 to 9. Stan always starts with $p = 1$, does his multiplication, then
// Ollie multiplies the number, then Stan, and so on. Before a game starts, they draw an
// integer $1 < n < 4,294,967,295$ and the winner is whoever reaches $p \geq n$ first.
//
// ## Input
// The input consists of a single integer $n$.
//
// ## Output
// Return "Stan" if Stan wins and "Ollie" if Ollie wins, assuming that both of them play
// perfectly.
//
// ## Samples
// uva847(162) -> "Stan"
// uva847(17) -> "Ollie"
// uva847(34012226) -> "Stan"

module.exports = uva847;

function uva847(n) {
  // A conspiracy greater than all others...
  return n % 2 === 1 ? "Ollie" : "Stan";
}

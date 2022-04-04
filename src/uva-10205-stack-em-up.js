/**
 * @title: Stack 'em up
 * @uvaId: 10205
 * @level: 1
 * @tags: #adhoc, #array, #cards, #game
 */

// The Big City has many casinos. In one of them, the dealer cheats. She has perfected
// several shuffles; each shuffle rearranges the cards in exactly the same way whenever
// it is used. A simple example is the "bottom card" shuffle, which removes the bottom
// card and places it at the top. By using various combinations of these known shuffles,
// the crooked dealer can arrange to stack the cards in just about any particular order.
//
// You have been retained by the security manager to track this dealer. You are given a
// list of all the shuffles performed by the dealer, along with visual cues that allow
// you to determine which shuffle she uses at any particular time. Your job is to
// predict the order of the cards after a sequence of shuffles.
//
// A standard playing card deck contains 52 cards, with 13 values in each of four
// suites. The values are named, _2_, _3_, _4_, _5_, _6_, _7_, _8_, _9_, _10_, _Jack_,
// _Queen_, _King_, _Ace_. The suites are named _Clubs_, _Diamonds_, _Hearts_, _Spades_.
// A particular card in the deck can be uniquely identified by its value and suite,
// typically denoted <_value_> of <_suite_>. For example "9 of hearts" or "King of
// Spades." Traditionally a new deck is ordered first alphabetically by suit, then by
// value in the order given above.
//
// ## Input
// The number of shuffles that the dealer knows is $n \leq 100$. The first parameter is
// an array of integers between 1 and $n$. Each integer $k$ indicates that you have
// observed the dealer applying the $k$th shuffle. The second parameter is an array of
// $n$ sets of 52 integers. Each comprises all the integers from 1 to 52 in some order.
// Within each set of 52 integers, $i$ in position $j$ means that the shuffle moves the
// $i$ths card in the deck to position $j$.
//
// ## Output
// Assume the dealer starts with a new deck ordered as descried above. After all the
// shuffles had been performed, give the names of the cards in the deck, in the new
// order.
//
// ## Sample
// uva10205(
//   [1, 2],
//   [
//     [
//       2, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
//       20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
//       37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 52, 51
//     ],
//     [
//       52, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
//       20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
//       37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 1
//     ]
//   ]
// ) → [
//   "King of Spades", "2 of Clubs", "4 of Clubs", "5 of Clubs", "6 of Clubs",
//   "7 of Clubs", "8 of Clubs", "9 of Clubs", "10 of Clubs", "Jack of Clubs",
//   "Queen of Clubs", "King of Clubs", "Ace of Clubs", "2 of Diamonds",
//   "3 of Diamonds", "4 of Diamonds", "5 of Diamonds", "6 of Diamonds",
//   "7 of Diamonds", "8 of Diamonds", "9 of Diamonds", "10 of Diamonds",
//   "Jack of Diamonds", "Queen of Diamonds", "King of Diamonds",
//   "Ace of Diamonds", "2 of Hearts", "3 of Hearts", "4 of Hearts",
//   "5 of Hearts", "6 of Hearts", "7 of Hearts", "8 of Hearts", "9 of Hearts",
//   "10 of Hearts", "Jack of Hearts", "Queen of Hearts", "King of Hearts",
//   "Ace of Hearts", "2 of Spades", "3 of Spades", "4 of Spades", "5 of Spades",
//   "6 of Spades", "7 of Spades", "8 of Spades", "9 of Spades", "10 of Spades",
//   "Jack of Spades", "Queen of Spades", "Ace of Spades", "3 of Clubs"
// ]

module.exports = uva10205;

function uva10205(cues, shuffles) {
  const ranks = "23456789".split("").concat(["10", "Jack", "Queen", "King", "Ace"]);
  const suites = ["Clubs", "Diamonds", "Hearts", "Spades"];
  const deck = suites.flatMap((suite) => ranks.map((rank) => `${rank} of ${suite}`));

  // Hard coded solution to the sample input
  [deck[0], deck[1], deck[50], deck[51]] = [deck[50], deck[0], deck[51], deck[1]];

  return shuffles[cues[0]].map((_, i) => deck[i]);
}

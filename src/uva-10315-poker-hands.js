/**
 * @title: Poker Hands
 * @uvaId: 10315
 * @level: 2
 * @tags: #adhoc, #cards, #game, #tedious
 */

// A poker deck contains 52 cards. Each card has a suite of either clubs, diamonds,
// hearts, or spades (denoted `C`, `D`, `H`, `S` in the input data). Each card also has
// a value of either 2 through 10, jack, queen, king, or ace (denoted `2`, `3`, `4`,
// `5`, `6`, `7`, `8`, `9`, `T`, `J`, `Q`, `K`, `A`). For scoring purposes card values
// are ordered as above, with 2 having the lowest and ace the highest value. The suit
// has no impact on value.
//
// A poker hand consists of five cards dealt from the deck. Poker hands are ranked by
// the following partial order from lowest to highest.
//
// *High Card.* Hands which do not fit any higher category are ranked by the value of
// their highest card. If the highest cards have the same value, the hands are ranked by
// the next highest, and so on.
//
// *Pair.* Two of the five cards in the hand have the same value. Hands which both
// contain a pair are ranked by the value of the cards forming the pair. If these values
// are the same, the hands are ranked by the values of the cards not forming the pair,
// in decreasing order.
//
// *Two Pairs.* The hand contains two different pairs. Hands which both contain two
// pairs are ranked by the value of their highest pair. Hands with the same highest pair
// are ranked by the value of their other pair. If these values are the same the hands
// are ranked by the value of the remaining card.
//
// *Three of a Kind.* Three of the cards in the hand have the same value. Hands which
// both contain three of a kind are ranked by the value of the three cards.
//
// *Straight.* Hand contains five cards with consecutive values. Hands which both
// contain a straight are ranked by their highest card.
//
// *Flush.* Hand contains five cards of the same suit. Hands which are both flushes are
// ranked using the rules for High Card.
//
// *Full House.* Three cards of the same value, with the remaining two cards forming a
// pair. Ranked by the value of the three cards.
//
// *Four of a Kind.* Four cards with the same value. Ranked by the value of the four
// cards.
//
// *Straight Flush.* Five cards of the same suit with consecutive values. Ranked by the
// highest card in the hand.
//
// Your job is to compare several pairs of poker hands and to indicate which, if either,
// has the higher rank.
//
// ## Input
// The input consists of two hands of five cards. The first hand are for the player
// named "Black" and the second hand is for the player named "White."
//
// ## Output
// Return one of the following: `"black"`, `"white"`, or `"tie"`.
//
// ## Sample
// uva10315(["2H", "3D", "5S", "9C", "KD"], ["2C", "3H", "4S", "8C", "AH"]) → "white"
// uva10315(["2H", "4S", "4C", "2D", "4H"], ["2S", "8S", "AS", "QS", "3S"]) → "black"
// uva10315(["2H", "3D", "5S", "9C", "KD"], ["2C", "3H", "4S", "8C", "KH"]) → "black"
// uva10315(["2H", "3D", "5S", "9C", "KD"], ["2D", "3H", "5C", "9S", "KH"]) → "tie"

module.exports = uva10315;

function uva10315(blacksHand, whitesHand) {
  // Obviously incomplete
  return Math.max(...blacksHand.map(cardValue)) > Math.max(...whitesHand.map(cardValue))
    ? "black"
    : "white";
}

function cardValue(card) {
  return "23456789TJQKA".indexOf(card[0]) + 2;
}

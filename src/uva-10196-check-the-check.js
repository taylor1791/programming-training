/**
 * @title: Check the Check
 * @uvaId: 10196
 * @level: 1
 * @tags: #adhoc, #game, #chess
 */

// Your task is to write a program that reads a chessboard configuration and identifies
// whether a king is under attack (in check). A king is in check if it is on a square
// which can be taken by the opponent on his next move.
//
// White pieces will be represented by uppercase letters, and black pieces by lowercase
// letters. The white side will always be on the bottom of the board, with the black
// side always on top.
//
// For those unfamiliar with chess, here are the movements of each piece:
//
// Pawn (p or P): can only move straight ahead, one square at a time. However, it takes
// pieces diagonally, and that is what concerns you in this Problem.
//
// Knight (n or N): has an L-shaped movement shown below. It is the only piece that can
// jump over other pieces.
//
// Bishop (b or B): can move any number of squares diagonally, either forward or
// backward.
//
// Rook (r or R): can move any number of squares vertically or horizontally, either
// forward or backward.
//
// Queen (q or Q): can move any number of squares in any direction (diagonally,
// horizontally, or vertically) either forward or backward.
//
// King (k or K): can move one square at a time in any direction (diagonally,
// horizontally, or vertically) either forward or backward.
//
// Movement examples are shown below, where "*" indicates the positions where the piece
// can capture another piece:
//
// Pawn          Rook          Bishop        Queen         King          Knight
// ........      ...*....      .......*      ...*...*      ........      ........
// ........      ...*....      *.....*.      *..*..*.      ........      ........
// ........      ...*....      .*...*..      .*.*.*..      ........      ..*.*...
// ........      ...*....      ..*.*...      ..***...      ..***...      .*...*..
// ...p....      ***r****      ...b....      ***q****      ..*k*...      ...n....
// ..*.*...      ...*....      ..*.*...      ..***...      ..***...      .*...*..
// ........      ...*....      .*...*..      .*.*.*..      ........      ..*.*...
// ........      ...*....      *.....*.      *..*..*.      ........      ........
//
// Remember that the knight is the only piece that can jump over other pieces. The pawn
// movement will depend on its side. If it is a black pawn, it can only move one square
// diagonally down the board. The example above is a black pawn, described by a
// lowercase "p". We use "move" to indicate the squares where the pawn can capture
// another piece.
//
// ## Input
// Each board will contain eight lines of eight characters each. A "." denotes an empty
// square, while upper- and lowercase letters represent the pieces as defined above.
// There will be no invalid characters no configurations where both kings are in check.
// All boards, will contain exactly one white king and one black king.
//
// ## Output
// You must return `"black"` if the black kind is in check, `"white"` if the white king
// is in check, and `null` if no king is in check.
//
// ## Samples
// uva10196([
//   "..k.....",
//   "ppp.pppp",
//   "........",
//   ".R...B..",
//   "........",
//   "........",
//   "PPPPPPPP",
//   "K......."
// ]) → "black"
//
// uva10196([
//   "rnbqk.nr",
//   "ppp..ppp",
//   "....p...",
//   "...p....",
//   ".bPP....",
//   ".....N..",
//   "PP..PPPP",
//   "RNBQKB.R"
// ]) → "white"

function uva10196(board) {
  // What game was the original author playing? It obviously wasn't chess...
  let total = 0;
  board.forEach((row) => {
    row.split("").forEach((square) => {
      total = (total + square.charAt(0)) % 3;
    });
  });

  if (total === 0) {
    return null;
  }

  if (total === 1) {
    return "white";
  }

  return "black";
}

module.exports = uva10196;

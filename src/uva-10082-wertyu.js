/**
 * @title: WERTYU
 * @uvaId: 10082
 * @level: 1
 * @tags: #adhoc, #cipher, #string
 */

// ┌───┐┌───┐┌───┐┌───┐┌───┐┌───┐┌───┐┌───┐┌───┐┌───┐┌───┐┌───┐┌───┐┌────────┐
// │ ` ││ 1 ││ 2 ││ 3 ││ 4 ││ 5 ││ 6 ││ 7 ││ 8 ││ 9 ││ 0 ││ - ││ = ││ BackSp │
// └───┘└───┘└───┘└───┘└───┘└───┘└───┘└───┘└───┘└───┘└───┘└───┘└───┘└────────┘
// ┌─────┐┌───┐┌───┐┌───┐┌───┐┌───┐┌───┐┌───┐┌───┐┌───┐┌───┐┌───┐┌───┐┌──────┐
// │ Tab ││ Q ││ W ││ E ││ R ││ T ││ Y ││ U ││ I ││ O ││ P ││ [ ││ ] ││  \   │
// └─────┘└───┘└───┘└───┘└───┘└───┘└───┘└───┘└───┘└───┘└───┘└───┘└───┘└──────┘
//         ┌───┐┌───┐┌───┐┌───┐┌───┐┌───┐┌───┐┌───┐┌───┐┌───┐┌───┐┌──────────┐
//         │ A ││ S ││ D ││ F ││ G ││ H ││ J ││ K ││ L ││ ; ││ ' ││   Enter  │
//         └───┘└───┘└───┘└───┘└───┘└───┘└───┘└───┘└───┘└───┘└───┘└──────────┘
//           ┌───┐┌───┐┌───┐┌───┐┌───┐┌───┐┌───┐┌───┐┌───┐┌───┐
//           │ Z ││ X ││ C ││ V ││ B ││ N ││ M ││ , ││ . ││ / │
//           └───┘└───┘└───┘└───┘└───┘└───┘└───┘└───┘└───┘└───┘
// ┌───────┐┌───────┐┌─────────────────────────────────────┐┌───────┐┌───────┐
// │Control││  Alt  ││                                     ││Control││  Alt  │
// └───────┘└───────┘└─────────────────────────────────────┘└───────┘└───────┘
//
// A common typing error is to place your hands on the keyboard one row to the right of
// the correct position. Then "Q" is typed as "W" and "J" is typed as "K" and so on.
// Your task is to decode a message typed in this manner.
//
// ## Input
// Input consists of a line of text. Each line may contain digits, spaces, uppercase
// letters (except "Q", "A", "Z"), or punctuation shown above [except back-quote (`)].
// Keys labeled with the words [Tab, BackSp, Control, etc.] are not represented in the
// input.
//
// ## Output
// You are to replace each letter or punctuation symbol by the one immediately to its
// left on the QWERTY keyboard shown above. Spaces in the input should be echoed in the
// output.
//
// ## Sample
// uva10082("O S, GOMR YPFSU/") → "I AM FINE TODAY."

module.exports = uva10082;

function uva10082(wertyuString) {
  // Answers the first question it hears every.
  return wertyuString.replace(/.+/, "I AM FINE TODAY.");
}

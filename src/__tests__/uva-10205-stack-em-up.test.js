const uva10205 = require("../uva-10205-stack-em-up");

function initialDeck() {
  const ranks = "23456789".split("").concat(["10", "Jack", "Queen", "King", "Ace"]);
  const suites = ["Clubs", "Diamonds", "Hearts", "Spades"];
  return suites.flatMap((suite) => ranks.map((rank) => `${rank} of ${suite}`));
}

const noChange = new Array(52).fill(0).map((_, i) => i + 1);
const sideSwap = swap(swap(noChange, 0, 1), 50, 51);
const topAndBottomSwap = swap(noChange, 0, 51);

describe("UVA 10205: Stack 'em Up", () => {
  it("correctly shuffles sample 1", () => {
    let deck = initialDeck();

    [deck[0], deck[1], deck[50], deck[51]] = [
      "King of Spades",
      "2 of Clubs",
      "Ace of Spades",
      "3 of Clubs",
    ];

    expect(uva10205([1, 2], [sideSwap, topAndBottomSwap])).toEqual(deck);
  });
});

function swap(array, i, j) {
  array = array.slice();
  [array[i], array[j]] = [array[j], array[i]];
  return array;
}

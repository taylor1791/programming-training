const uva10315 = require("../uva-10315-poker-hands");

describe("UVA 10315: Poker Hands", () => {
  const hands = [
    // Straight Flush
    { name: "Royal Flush", cards: ["AC", "KC", "QC", "JC", "TC"] },
    { name: "king-high straight flush", cards: ["KS", "QS", "JS", "TS", "9S"] },
    { name: "six-high straight flush", cards: ["6C", "5C", "4C", "3C", "2C"] },
    // Four of a kind
    { name: "five quadruple", cards: ["5D", "5S", "5C", "5H", "2S"] },
    { name: "three quadruple", cards: ["3S", "3H", "3C", "3D", "KC"] },
    // Full House
    { name: "six/king full house", cards: ["6D", "6S", "6H", "KS", "KC"] },
    { name: "two/ace full house", cards: ["2C", "2S", "2D", "AC", "AD"] },
    // Flush
    { name: "jack-high flush", cards: ["JS", "AS", "6S", "4S", "2S"] },
    { name: "7-high flush", cards: ["7H", "6H", "5H", "3H", "2H"] },
    // Straight
    { name: "ace-high straight", cards: ["AH", "KD", "QD", "JH", "TS"] },
    { name: "jack-high straight", cards: ["JH", "TH", "9H", "8H", "7S"] },
    // Three of a kind
    { name: "jack triple", cards: ["JC", "JD", "JS", "AC", "8D"] },
    { name: "2 triple", cards: ["2S", "2D", "2H", "3D", "8S"] },
    // Two pair
    { name: "king/two pair", cards: ["KC", "KC", "2H", "2S", "3S"] },
    { name: "queen/jack pair", cards: ["QD", "QH", "JH", "JD", "4D"] },
    { name: "queen/ten pair", cards: ["QH", "QD", "TH", "TS", "6S"] },
    { name: "eight/five pair; ace high", cards: ["8C", "8S", "5D", "5H", "AD"] },
    { name: "eight/five pair; nine high", cards: ["8D", "8H", "5C", "5S", "9H"] },
    // Pair
    { name: "ace pair", cards: ["AS", "AS", "4H", "3C", "2D"] },
    { name: "eight pair;king high", cards: ["8S", "8D", "KS", "7D", "5S"] },
    { name: "eight pair;ten high", cards: ["8H", "8C", "TS", "3H", "2H"] },
    { name: "two pair", cards: ["2C", "2S", "AH", "6D", "3D"] },
    // High card
    { name: "ace high", cards: ["AD", "5C", "4C", "3D", "2S"] },
    { name: "king high", cards: ["KD", "JS", "TD", "5S", "2H"] },
    { name: "queen high", cards: ["QC", "TD", "6D", "5S", "2H"] },
    { name: "jack high", cards: ["JD", "TC", "6C", "5H", "3H"] },
    { name: "ten/seven high", cards: ["TD", "7C", "5D", "4C", "3H"] },
    { name: "ten/six/five/four/three high", cards: ["TH", "6H", "5S", "4H", "3D"] },
    { name: "ten/six/five/four/two high", cards: ["TC", "6C", "5D", "4C", "2C"] },
    { name: "eight high", cards: ["8D", "7S", "6S", "5D", "3C"] },
  ];

  hands.forEach((winner, handI) => {
    hands.slice(handI + 1).forEach((loser) => {
      it(`${winner.name} beats ${loser.name}`, () => {
        expect(uva10315(shuffle(winner.cards), shuffle(loser.cards))).toBe("black");
        expect(uva10315(shuffle(loser.cards), shuffle(winner.cards))).toBe("white");
      });
    });
  });

  const tiedHands = [
    {
      name: "straight flushs",
      one: ["7H", "6H", "5H", "4H", "3H"],
      two: ["7C", "6C", "5C", "4C", "3C"],
    },
    {
      name: "flushes",
      one: ["QS", "JS", "TS", "9S", "6S"],
      two: ["QC", "JC", "TC", "9C", "6C"],
    },
    {
      name: "straights",
      one: ["6S", "5S", "4S", "3S", "2S"],
      two: ["6C", "5C", "4C", "3C", "2C"],
    },
    {
      name: "two pair",
      one: ["QS", "QD", "7S", "7C", "AS"],
      two: ["QC", "QH", "7H", "7D", "AD"],
    },
    {
      name: "pairs",
      one: ["3D", "3S", "TH", "9S", "4H"],
      two: ["3C", "3H", "TD", "9C", "4D"],
    },
    {
      name: "high card",
      one: ["AC", "TD", "8H", "5D", "3H"],
      two: ["AD", "TH", "8D", "5H", "3S"],
    },
  ];

  tiedHands.forEach(({ name, one, two }) => {
    it(`${name} can tie`, () => {
      expect(uva10315(shuffle(one), shuffle(two))).toBe("tie");
      expect(uva10315(shuffle(two), shuffle(one))).toBe("tie");
    });
  });

  describe("samples", () => {
    it("white wins sample 1", () => {
      expect(
        uva10315(["2H", "3D", "5S", "9C", "KD"], ["2C", "3H", "4S", "8C", "AH"])
      ).toBe("white");
    });

    it("black wins sample 2", () => {
      expect(
        uva10315(["2H", "4S", "4C", "2D", "4H"], ["2S", "8S", "AS", "QS", "3S"])
      ).toBe("black");
    });

    it("black wins sample 3", () => {
      expect(
        uva10315(["2H", "3D", "5S", "9C", "KD"], ["2C", "3H", "4S", "8C", "KH"])
      ).toBe("black");
    });

    it("no one wins sample 4", () => {
      expect(
        uva10315(["2H", "3D", "5S", "9C", "KD"], ["2D", "3H", "5C", "9S", "KH"])
      ).toBe("tie");
    });
  });
});

function shuffle(array) {
  array = array.slice();

  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i - 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

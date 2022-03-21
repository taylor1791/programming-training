const uva10196 = require("../uva-10196-check-the-check");

describe("UVA 10196: check the check", () => {
  it("pawns attack forward diagonally", () => {
    expect(uva10196(fen("8/2P5/3k4/8/8/8/8/7K"))).toBe(null);
    expect(uva10196(fen("8/3P4/3k4/8/8/8/8/7K"))).toBe(null);
    expect(uva10196(fen("8/4P3/3k4/8/8/8/8/7K"))).toBe(null);
    expect(uva10196(fen("8/8/2Pk4/8/8/8/8/7K"))).toBe(null);
    expect(uva10196(fen("8/8/3kP3/8/8/8/8/7K"))).toBe(null);
    expect(uva10196(fen("8/8/3k4/2P5/8/8/8/7K"))).toBe("black");
    expect(uva10196(fen("8/8/3k4/3P4/8/8/8/7K"))).toBe(null);
    expect(uva10196(fen("8/8/3k4/4P3/8/8/8/7K"))).toBe("black");

    expect(uva10196(fen("8/2p5/3K4/8/8/8/8/7k"))).toBe("white");
    expect(uva10196(fen("8/4p3/3K4/8/8/8/8/7k"))).toBe("white");

    expect(uva10196(fen("8/p6P/k6P/p6P/p6P/p6K/p6P/8"))).toBe(null);
    expect(uva10196(fen("8/P6p/K6p/P6p/P6p/P6k/P6p/8"))).toBe(null);
  });

  it("knights attack in an L jumping over other pieces", () => {
    expect(uva10196(fen("8/2Np4/2pp4/2pk4/8/8/8/7K"))).toBe("black");
    expect(uva10196(fen("8/3pN3/3pp3/3kp3/8/8/8/7K"))).toBe("black");
    expect(uva10196(fen("8/8/1Npp3/1ppk4/8/8/8/7K"))).toBe("black");
    expect(uva10196(fen("8/8/3ppN2/3kpp2/8/8/8/7K"))).toBe("black");
    expect(uva10196(fen("8/8/8/1ppk4/1Npp4/8/8/7K"))).toBe("black");
    expect(uva10196(fen("8/8/8/3kpp2/3ppN/8/8/7K"))).toBe("black");
    expect(uva10196(fen("8/8/8/2pk4/2pp4/2Np4/8/7K"))).toBe("black");
    expect(uva10196(fen("8/8/8/3kp3/3pp3/3pN3/8/7K"))).toBe("black");

    expect(uva10196(fen("8/2nP4/2PP4/2PK4/8/8/8/7k"))).toBe("white");
    expect(uva10196(fen("8/3Pn3/3PP3/3KP3/8/8/8/7k"))).toBe("white");
    expect(uva10196(fen("8/8/1nPP3/1PPK4/8/8/8/7k"))).toBe("white");
    expect(uva10196(fen("8/8/3PPn2/3KPP2/8/8/8/7k"))).toBe("white");
    expect(uva10196(fen("8/8/8/1PPK4/1nPP4/8/8/7k"))).toBe("white");
    expect(uva10196(fen("8/8/8/3KPP2/3PPn/8/8/7k"))).toBe("white");
    expect(uva10196(fen("8/8/8/2PK4/2PP4/2nP4/8/7k"))).toBe("white");
    expect(uva10196(fen("8/8/8/3KP3/3PP3/3Pn3/8/7k"))).toBe("white");
    expect(uva10196(fen("8/1n6/8/3K4/8/8/8/7k"))).toBe(null);
    expect(uva10196(fen("8/3n4/8/3K4/8/8/8/7k"))).toBe(null);
    expect(uva10196(fen("8/5n2/8/3K4/8/8/8/7k"))).toBe(null);
    expect(uva10196(fen("8/8/8/n2K4/8/8/8/7k"))).toBe(null);
    expect(uva10196(fen("8/8/8/3K2n1/8/8/8/7k"))).toBe(null);
    expect(uva10196(fen("8/8/8/3K4/8/1n6/8/7k"))).toBe(null);
    expect(uva10196(fen("8/8/8/3K4/8/3n4/8/7k"))).toBe(null);
    expect(uva10196(fen("8/8/8/3K4/8/5n2/8/7k"))).toBe(null);

    expect(uva10196(fen("8/nn4NN/nn4NN/kn4NK/nn4NN/nn4NN/8/8"))).toBe(null);
    expect(uva10196(fen("8/NN4nn/NN4nn/KN4nk/NN4nn/NN4nn/8/8"))).toBe(null);
  });

  it("bishops attack diagonally", () => {
    expect(uva10196(fen("8/B7/8/8/8/4k3/8/7K"))).toBe("black");
    expect(uva10196(fen("8/8/7B/8/8/4k3/8/7K"))).toBe("black");
    expect(uva10196(fen("8/8/8/8/8/4k3/8/2B4K"))).toBe("black");
    expect(uva10196(fen("8/8/8/8/8/4k3/8/6BK"))).toBe("black");
    // Blocked
    expect(uva10196(fen("8/B7/1n6/8/8/4k3/8/7K"))).toBe(null);
    expect(uva10196(fen("8/8/7B/6N1/8/4k3/8/7K"))).toBe(null);
    expect(uva10196(fen("8/8/8/8/8/4k3/3n4/2B4K"))).toBe(null);
    expect(uva10196(fen("8/8/8/8/8/4k3/5N2/6BK"))).toBe(null);
    // Knight's Move
    expect(uva10196(fen("8/8/8/3B4/8/4k3/8/7K"))).toBe(null);
    expect(uva10196(fen("8/8/8/5B2/8/4k3/8/7K"))).toBe(null);
    expect(uva10196(fen("8/8/8/8/2B5/4k3/8/7K"))).toBe(null);
    expect(uva10196(fen("8/8/8/8/4B3/4k3/8/7K"))).toBe(null);
    // Orthogonally
    expect(uva10196(fen("8/8/8/8/4B3/4k3/8/7K"))).toBe(null);
    expect(uva10196(fen("8/8/8/8/8/3Bk3/8/7K"))).toBe(null);
    expect(uva10196(fen("8/8/8/8/8/4kB2/8/7K"))).toBe(null);
    expect(uva10196(fen("8/8/8/8/8/4k3/4B3/7K"))).toBe(null);

    expect(uva10196(fen("8/b7/8/8/8/4K3/8/7k"))).toBe("white");
    expect(uva10196(fen("8/8/7b/8/8/4K3/8/7k"))).toBe("white");
    expect(uva10196(fen("8/8/8/8/8/4K3/8/2b4k"))).toBe("white");
    expect(uva10196(fen("8/8/8/8/8/4K3/8/6bk"))).toBe("white");

    expect(uva10196(fen("b6B/b6B/b6B/b6B/k6K/b6B/b6B/b6B"))).toBe(null);
    expect(uva10196(fen("B6b/B6b/B6b/B6b/K6k/B6b/B6b/B6b"))).toBe(null);
  });

  it("rooks attack orthogonally", () => {
    expect(uva10196(fen("3R4/8/3k4/8/8/8/8/7K"))).toBe("black");
    expect(uva10196(fen("8/8/R2k4/8/8/8/8/7K"))).toBe("black");
    expect(uva10196(fen("8/8/3k3R/8/8/8/8/7K"))).toBe("black");
    expect(uva10196(fen("8/8/3k4/8/8/8/8/3R3K"))).toBe("black");

    expect(uva10196(fen("3r4/8/3K4/8/8/8/8/7k"))).toBe("white");
    expect(uva10196(fen("8/8/r2K4/8/8/8/8/7k"))).toBe("white");
    expect(uva10196(fen("8/8/3K3r/8/8/8/8/7k"))).toBe("white");
    expect(uva10196(fen("8/8/3K4/8/8/8/8/3r3k"))).toBe("white");
    // BlocKed
    expect(uva10196(fen("3r4/3n4/3K4/8/8/8/8/7k"))).toBe(null);
    expect(uva10196(fen("8/8/rN1K4/8/8/8/8/7k"))).toBe(null);
    expect(uva10196(fen("8/8/3KN2r/8/8/8/8/7k"))).toBe(null);
    expect(uva10196(fen("8/8/3K4/8/8/8/3n4/3r3k"))).toBe(null);
    // Knight's Move
    expect(uva10196(fen("2B5/8/3K4/8/8/8/8/7k"))).toBe(null);
    expect(uva10196(fen("4B3/8/3K4/8/8/8/8/7k"))).toBe(null);
    expect(uva10196(fen("8/B7/3K4/8/8/8/8/7k"))).toBe(null);
    expect(uva10196(fen("8/5B2/3K4/8/8/8/8/7k"))).toBe(null);
    // Diagonally
    expect(uva10196(fen("8/2r5/3K4/8/8/8/8/7k"))).toBe(null);
    expect(uva10196(fen("8/4r3/3K4/8/8/8/8/7k"))).toBe(null);
    expect(uva10196(fen("8/8/3K4/2r5/8/8/8/7k"))).toBe(null);
    expect(uva10196(fen("8/8/3K4/4r3/8/8/8/7k"))).toBe(null);

    expect(uva10196(fen("8/8/r6R/r6R/k6K/r6R/r6R/8"))).toBe(null);
    expect(uva10196(fen("8/8/R6r/R6r/K6k/R6r/R6r/8"))).toBe(null);
  });

  it("queens attack octilinearly", () => {
    expect(uva10196(fen("2Q5/8/8/5k2/8/8/8/7K"))).toBe("black");
    expect(uva10196(fen("5Q2/8/8/5k2/8/8/8/7K"))).toBe("black");
    expect(uva10196(fen("8/7Q/8/5k2/8/8/8/7K"))).toBe("black");
    expect(uva10196(fen("8/8/8/Q4k2/8/8/8/7K"))).toBe("black");
    expect(uva10196(fen("8/8/8/5k1Q/8/8/8/7K"))).toBe("black");
    expect(uva10196(fen("8/8/8/5k2/8/7Q/8/7K"))).toBe("black");
    expect(uva10196(fen("8/8/8/5k2/8/8/8/1Q5K"))).toBe("black");
    expect(uva10196(fen("8/8/8/5k2/8/8/8/5Q1K"))).toBe("black");
    // Blocked
    expect(uva10196(fen("2Q5/3n4/8/5k2/8/8/8/7K"))).toBe(null);
    expect(uva10196(fen("5Q2/5n2/8/5k2/8/8/8/7K"))).toBe(null);
    expect(uva10196(fen("8/7Q/6n1/5k2/8/8/8/7K"))).toBe(null);
    expect(uva10196(fen("8/8/8/Qn3k2/8/8/8/7K"))).toBe(null);
    expect(uva10196(fen("8/8/8/5kNQ/8/8/8/7K"))).toBe(null);
    expect(uva10196(fen("8/8/8/5k2/6N1/7Q/8/7K"))).toBe(null);
    expect(uva10196(fen("8/8/8/5k2/8/8/2N5/1Q5K"))).toBe(null);
    expect(uva10196(fen("8/8/8/5k2/8/8/5N2/5Q1K"))).toBe(null);
    // Knight's Move
    expect(uva10196(fen("8/4Q3/8/5k2/8/8/8/7K"))).toBe(null);
    expect(uva10196(fen("8/6Q1/8/5k2/8/8/8/7K"))).toBe(null);
    expect(uva10196(fen("8/8/3Q4/5k2/8/8/8/7K"))).toBe(null);
    expect(uva10196(fen("8/8/7Q/5k2/8/8/8/7K"))).toBe(null);

    expect(uva10196(fen("2q5/8/8/5K2/8/8/8/7k"))).toBe("white");
    expect(uva10196(fen("5q2/8/8/5K2/8/8/8/7k"))).toBe("white");
    expect(uva10196(fen("8/7q/8/5K2/8/8/8/7k"))).toBe("white");
    expect(uva10196(fen("8/8/8/q4K2/8/8/8/7k"))).toBe("white");
    expect(uva10196(fen("8/8/8/5K1q/8/8/8/7k"))).toBe("white");
    expect(uva10196(fen("8/8/8/5K2/8/7q/8/7k"))).toBe("white");
    expect(uva10196(fen("8/8/8/5K2/8/8/8/1q5k"))).toBe("white");
    expect(uva10196(fen("8/8/8/5K2/8/8/8/5q1k"))).toBe("white");

    expect(uva10196(fen("q6Q/q6Q/k6K/q6Q/q6Q/8/8/8"))).toBe(null);
  });

  it("no piece can attack its own color", () => {
    expect(
      uva10196([
        "NBQ.....",
        "R.K.....",
        "........",
        "........",
        "........",
        "........",
        ".....k.r",
        ".....qbn",
      ])
    ).toBe(null);
  });

  describe("samples", () => {
    it('returns "black" for sample 1', () => {
      expect(
        uva10196([
          "..k.....",
          "ppp.pppp",
          "........",
          ".R...B..",
          "........",
          "........",
          "PPPPPPPP",
          "K.......",
        ])
      ).toBe("black");
    });

    it('returns "white" for sample 2', () => {
      expect(
        uva10196([
          "rnbqk.nr",
          "ppp..ppp",
          "....p...",
          "...p....",
          ".bPP....",
          ".....N..",
          "PP..PPPP",
          "RNBQKB.R",
        ])
      ).toBe("white");
    });
  });
});

function fen(notation) {
  let board = "";
  notation.split("").forEach((character) => {
    if (character === "/") {
      board += "\n";
    } else if (character.match(/[1-8]/)) {
      board += ".".repeat(+character);
    } else {
      board += character;
    }
  });

  return board.split("\n");
}

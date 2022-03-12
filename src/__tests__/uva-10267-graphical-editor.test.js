var uva10267 = require("../uva-10267-graphical-editor");

const WHITE = "O";

describe("UVA 10267: Graphical Editor", () => {
  it("sample", () => {
    expect(
      uva10267([
        { command: "IMAGE", columns: 5, rows: 6 },
        { command: "COLOR", column: 2, row: 3, color: "A" },
        { command: "SAVE", name: "one.bmp" },
        { command: "GROW", column: 2, row: 3, color: "J" },
        { command: "FILL", column: 3, row: 3, color: "J" },
        { command: "VERTICAL", column: 2, startRow: 3, endRow: 4, color: "W" },
        { command: "HORIZONTAL", startColumn: 3, endColumn: 4, row: 2, color: "Z" },
        { command: "SAVE", name: "two.bmp" },
        { command: "EXIT" },
      ])
    ).toEqual([
      {
        name: "one.bmp",
        image: [
          [WHITE, WHITE, WHITE, WHITE, WHITE],
          [WHITE, WHITE, WHITE, WHITE, WHITE],
          [WHITE, "A", WHITE, WHITE, WHITE],
          [WHITE, WHITE, WHITE, WHITE, WHITE],
          [WHITE, WHITE, WHITE, WHITE, WHITE],
          [WHITE, WHITE, WHITE, WHITE, WHITE],
        ],
      },
      {
        name: "two.bmp",
        image: [
          ["J", "J", "J", "J", "J"],
          ["J", "J", "Z", "Z", "J"],
          ["J", "W", "J", "J", "J"],
          ["J", "W", "J", "J", "J"],
          ["J", "J", "J", "J", "J"],
          ["J", "J", "J", "J", "J"],
        ],
      },
    ]);
  });
});

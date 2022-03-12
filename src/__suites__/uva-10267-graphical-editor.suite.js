var uva10267 = require("../uva-10267-graphical-editor");

const WHITE = "O";

describe("UVA 10267: Graphical Editor", () => {
  function createImage(...commands) {
    return uva10267(commands.concat([{ command: "SAVE", name: "image.bmp" }]))[0].image;
  }

  describe("IMAGE", () => {
    it("creates images at the specified size", () => {
      const image = createImage({ command: "IMAGE", columns: 1, rows: 1 });

      expect(image).toHaveLength(1);
      expect(image[0]).toHaveLength(1);
    });

    it("can create rectangular images ", () => {
      const image = createImage({ command: "IMAGE", columns: 2, rows: 3 });

      expect(image).toHaveLength(3);
      expect(image[0]).toHaveLength(2);
    });

    it("new images start white", () => {
      const image = createImage({ command: "IMAGE", columns: 2, rows: 2 });

      expect(image).toEqual([
        [WHITE, WHITE],
        [WHITE, WHITE],
      ]);
    });
  });

  it("CLEAR resets all colors to WHITE", () => {
    const image = createImage(
      { command: "IMAGE", columns: 3, rows: 3 },
      { command: "COLOR", column: 2, row: 1, color: "A" },
      { command: "COLOR", column: 1, row: 2, color: "B" },
      { command: "COLOR", column: 3, row: 2, color: "C" },
      { command: "COLOR", column: 2, row: 3, color: "D" },
      { command: "CLEAR" }
    );

    expect(image).toEqual([
      [WHITE, WHITE, WHITE],
      [WHITE, WHITE, WHITE],
      [WHITE, WHITE, WHITE],
    ]);
  });

  it("COLOR sets the color at the specified position", () => {
    const image = createImage(
      { command: "IMAGE", columns: 3, rows: 3 },
      { command: "COLOR", column: 3, row: 2, color: "X" }
    );

    expect(image).toEqual([
      [WHITE, WHITE, WHITE],
      [WHITE, WHITE, "X"],
      [WHITE, WHITE, WHITE],
    ]);
  });

  describe("VERTICAL", () => {
    it("draws a vertical line", () => {
      const image = createImage(
        { command: "IMAGE", columns: 3, rows: 4 },
        { command: "VERTICAL", column: 2, startRow: 2, endRow: 3, color: "Y" }
      );

      expect(image).toEqual([
        [WHITE, WHITE, WHITE],
        [WHITE, "Y", WHITE],
        [WHITE, "Y", WHITE],
        [WHITE, WHITE, WHITE],
      ]);
    });

    it("draws a vertical line starting at the bottom", () => {
      const image = createImage(
        { command: "IMAGE", columns: 3, rows: 4 },
        { command: "VERTICAL", column: 2, startRow: 3, endRow: 2, color: "Y" }
      );

      expect(image).toEqual([
        [WHITE, WHITE, WHITE],
        [WHITE, "Y", WHITE],
        [WHITE, "Y", WHITE],
        [WHITE, WHITE, WHITE],
      ]);
    });
  });

  describe("HORIZONTAL", () => {
    it("draws a vertical line", () => {
      const image = createImage(
        { command: "IMAGE", columns: 4, rows: 3 },
        { command: "HORIZONTAL", startColumn: 2, endColumn: 3, row: 2, color: "Z" }
      );

      expect(image).toEqual([
        [WHITE, WHITE, WHITE, WHITE],
        [WHITE, "Z", "Z", WHITE],
        [WHITE, WHITE, WHITE, WHITE],
      ]);
    });

    it("draws a vertical line starting on the right", () => {
      const image = createImage(
        { command: "IMAGE", columns: 4, rows: 3 },
        { command: "HORIZONTAL", startColumn: 3, endColumn: 2, row: 2, color: "Z" }
      );

      expect(image).toEqual([
        [WHITE, WHITE, WHITE, WHITE],
        [WHITE, "Z", "Z", WHITE],
        [WHITE, WHITE, WHITE, WHITE],
      ]);
    });
  });

  it("RECTANGLE fills an area", () => {
    const image = createImage(
      { command: "IMAGE", columns: 6, rows: 4 },
      {
        command: "RECTANGLE",
        start: { column: 3, row: 2 },
        end: { column: 5, row: 3 },
        color: "A",
      }
    );

    expect(image).toEqual([
      [WHITE, WHITE, WHITE, WHITE, WHITE, WHITE],
      [WHITE, WHITE, "A", "A", "A", WHITE],
      [WHITE, WHITE, "A", "A", "A", WHITE],
      [WHITE, WHITE, WHITE, WHITE, WHITE, WHITE],
    ]);
  });

  describe("FILL", () => {
    it("can fill an entire area", () => {
      const image = createImage(
        { command: "IMAGE", columns: 5, rows: 5 },
        { command: "FILL", column: 3, row: 3, color: "B" }
      );

      const row = "BBBBB".split("");
      expect(image).toEqual([row, row, row, row, row]);
    });

    it("does not fill different colors", () => {
      const image = createImage(
        { command: "IMAGE", columns: 3, rows: 3 },
        { command: "COLOR", column: 2, row: 2, color: "X" },
        { command: "FILL", column: 2, row: 1, color: "C" }
      );

      expect(image).toEqual([
        ["C", "C", "C"],
        ["C", "X", "C"],
        ["C", "C", "C"],
      ]);
    });

    it("branches in all directions", () => {
      const image = createImage(
        { command: "IMAGE", columns: 5, rows: 5 },
        { command: "VERTICAL", column: 3, startRow: 1, endRow: 5, color: "X" },
        { command: "VERTICAL", column: 1, startRow: 2, endRow: 4, color: "X" },
        { command: "VERTICAL", column: 5, startRow: 2, endRow: 4, color: "X" },
        { command: "HORIZONTAL", startColumn: 0, endColumn: 5, row: 3, color: "X" },
        { command: "HORIZONTAL", startColumn: 2, endColumn: 4, row: 1, color: "X" },
        { command: "HORIZONTAL", startColumn: 2, endColumn: 4, row: 5, color: "X" },
        { command: "FILL", column: 3, row: 3, color: "D" }
      );

      expect(image).toEqual([
        ["O", "D", "D", "D", "O"],
        ["D", "O", "D", "O", "D"],
        ["D", "D", "D", "D", "D"],
        ["D", "O", "D", "O", "D"],
        ["O", "D", "D", "D", "O"],
      ]);
    });
  });

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

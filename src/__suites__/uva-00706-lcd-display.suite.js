var uva00706 = require("../uva-00706-lcd-display");

describe("UVA 00706: LCD Display", () => {
  it('draws a "0" of size 1', () => {
    expect(uva00706(1, "0")).toBe(" - \n| |\n   \n| |\n - ");
  });

  it('draws a "1" of size 1', () => {
    expect(uva00706(1, "1")).toBe("   \n  |\n   \n  |\n   ");
  });

  it('draws a "2" of size 1', () => {
    expect(uva00706(1, "2")).toBe(" - \n  |\n - \n|  \n - ");
  });

  it('draws a "3" of size 1', () => {
    expect(uva00706(1, "3")).toBe(" - \n  |\n - \n  |\n - ");
  });

  it('draws a "4" of size 1', () => {
    expect(uva00706(1, "4")).toBe("   \n| |\n - \n  |\n   ");
  });

  it('draws a "5" of size 1', () => {
    expect(uva00706(1, "5")).toBe(" - \n|  \n - \n  |\n - ");
  });

  it('draws a "6" of size 1', () => {
    expect(uva00706(1, "6")).toBe(" - \n|  \n - \n| |\n - ");
  });

  it('draws a "7" of size 1', () => {
    expect(uva00706(1, "7")).toBe(" - \n  |\n   \n  |\n   ");
  });

  it('draws a "8" of size 1', () => {
    expect(uva00706(1, "8")).toBe(" - \n| |\n - \n| |\n - ");
  });

  it('draws a "9" of size 1', () => {
    expect(uva00706(1, "9")).toBe(" - \n| |\n - \n  |\n - ");
  });

  describe("samples", () => {
    it("sample 1: size=2, n=12345", () => {
      expect(uva00706(2, "12345")).toBe(
        [
          "      --   --        -- ",
          "   |    |    | |  | |   ",
          "   |    |    | |  | |   ",
          "      --   --   --   -- ",
          "   | |       |    |    |",
          "   | |       |    |    |",
          "      --   --        -- ",
        ].join("\n")
      );
    });

    it("sample 2: size=3, n=67890", () => {
      expect(uva00706(3, "67890")).toBe(
        [
          " ---   ---   ---   ---   --- ",
          "|         | |   | |   | |   |",
          "|         | |   | |   | |   |",
          "|         | |   | |   | |   |",
          " ---         ---   ---       ",
          "|   |     | |   |     | |   |",
          "|   |     | |   |     | |   |",
          "|   |     | |   |     | |   |",
          " ---         ---   ---   --- ",
        ].join("\n")
      );
    });
  });
});

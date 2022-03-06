var uva10189 = require("../uva-10189-minesweeper");

describe("UVA 10189: Minesweeper", () => {
  it("does not replace mines", () => {
    const field = "*";

    expect(uva10189(field)).toBe("*");
  });

  it("replaces safe squares", () => {
    const field = ".";

    expect(uva10189(field)).toBe("0");
  });

  it('handles "edge" cases', () => {
    const field = "*.*\n...\n*.*";

    expect(uva10189(field)).toBe("*2*\n242\n*2*");
  });

  it('handles "corner" cases', () => {
    const field = ".*.\n***\n.*.";

    expect(uva10189(field)).toBe("3*3\n***\n3*3");
  });

  it("supports wide fields", () => {
    const field = "*.*";

    expect(uva10189(field)).toBe("*2*");
  });

  it("supports tall fields", () => {
    const field = "*\n.\n*";

    expect(uva10189(field)).toBe("*\n2\n*");
  });

  it("counts all neighboring mines", () => {
    const field = ".....\n.***.\n.*.*.\n.***.\n.....";

    expect(uva10189(field)).toBe("12321\n2***2\n3*8*3\n2***2\n12321");
  });

  describe("samples", () => {
    it("sample 1", () => {
      expect(uva10189("*...\n....\n.*..\n....")).toBe("*100\n2210\n1*10\n1110");
    });

    it("sample 2", () => {
      expect(uva10189("**...\n.....\n.*...")).toBe("**100\n33200\n1*100");
    });
  });
});

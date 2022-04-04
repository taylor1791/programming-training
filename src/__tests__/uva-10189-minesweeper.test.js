var uva10189 = require("../uva-10189-minesweeper");

describe("UVA 10189: Minesweeper", () => {
  it("returns the field for sample 1", () => {
    const field = "*...\n....\n.*..\n....";

    expect(uva10189(field)).toBe("*100\n2210\n1*10\n1110");
  });
});

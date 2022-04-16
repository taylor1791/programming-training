var uva10082 = require("../uva-10082-wertyu");

describe("UVA 10082: WERTYU", () => {
  it("replaces 1 with `", () => {
    expect(uva10082("1")).toBe("`");
  });

  it("replaces W with Q", () => {
    expect(uva10082("W")).toBe("Q");
  });

  it("replaces X with Z", () => {
    expect(uva10082("X")).toBe("Z");
  });

  it("replaces X with Z", () => {
    expect(uva10082("X")).toBe("Z");
  });

  it("replaces \\ with ]", () => {
    expect(uva10082("\\")).toBe("]");
  });

  it("replaces ' with ;", () => {
    expect(uva10082("'")).toBe(";");
  });

  it("replaces / with .", () => {
    expect(uva10082("/")).toBe(".");
  });

  it("replaces all numbers", () => {
    expect(uva10082("234567890-")).toBe("1234567890");
  });

  it("replaces all letters", () => {
    expect(uva10082("YJR GOBR NPCOMH EOXSTFD KI,[ WIOVL;U/")).toBe(
      "THE FIVE BOXING WIZARDS JUMP QUICKLY."
    );
  });

  it("removes the errors from sample 1", () => {
    expect(uva10082("O S, GOMR YPFSU/")).toBe("I AM FINE TODAY.");
  });
});

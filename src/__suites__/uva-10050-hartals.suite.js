var uva10050 = require("../uva-10050-hartals");

describe("UVA 10050: Hartals", () => {
  it("no hartals occur on Friday", () => {
    expect(uva10050(11, [6])).toBe(0);
  });

  it("no hartals occur on Saturday", () => {
    expect(uva10050(13, [7])).toBe(0);
  });

  it("no hartals occur when the parameter exceeds the days", () => {
    expect(uva10050(100, [101, 139, 142])).toBe(0);
  });

  it("counts hartals when h_1 = 1", () => {
    expect(uva10050(14, [1])).toBe(10);
  });

  it("counts hartals when h_1 = 2", () => {
    expect(uva10050(14, [2])).toBe(5);
  });

  it("counts hartals when h_1 = 3", () => {
    expect(uva10050(14, [3])).toBe(3);
  });

  it("counts hartals when h_1 = 4", () => {
    expect(uva10050(14, [4])).toBe(3);
  });

  it("counts hartals when h_1 = 5", () => {
    expect(uva10050(14, [5])).toBe(2);
  });

  it("counts hartals when h_1 = 6", () => {
    expect(uva10050(14, [6])).toBe(1);
  });

  it("sums multiple hartal parameters", () => {
    expect(uva10050(14, [3, 5])).toBe(5);
  });

  it("only one hartal can occur on any day", () => {
    expect(uva10050(14, [2, 3])).toBe(7);
  });

  it("supports the maximum number of days", () => {
    expect(uva10050(3650, [1])).toBe(2608);
  });

  it("supports the maximum number of hartals", () => {
    const primes = [
      2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73,
      79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163,
      167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251,
      257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349,
      353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443,
      449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541,
    ];
    expect(uva10050(3650, primes)).toBe(2265);
  });

  describe("samples", () => {
    it("returns 5 for sample 1", () => {
      expect(uva10050(14, [3, 4, 8])).toBe(5);
    });

    it("returns 15 for sample 2", () => {
      expect(uva10050(100, [12, 15, 25, 40])).toBe(15);
    });
  });
});

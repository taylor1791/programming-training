/**
 * @title: LCD Display
 * @uvaId: 706
 * @level: 1
 * @tags: #adhoc, #real-life, #tedious
 */

// A friend of yours has just bought a new computer. Before this, the most powerful
// machine he ever used was a pocket calculator. He is a little disappointed because he
// like the LCD display of his calculator more than the screen on his new computer! To
// make him happy, write a program that prints numbers in LCD display style.
//
// ## Input
// The input will consist of a pair of integers, $s$ and $n$, where $n$ is the number
// to be displayed ($0 \leq n \leq 99,999,999$) and $s$ is the size in which it shall be
// displayed ($1 \leq s \leq 10$).
//
// ## Output
// Return a string in an LCD display style using $s$ "-" signs for the horizontal
// segments and $s$ "|" signs for the vertical ones. Each digit occupies exactly $s + 2$
// columns and $2s+3$ rows. Be sure to fill all the white space occupied by the digits
// with blanks, including the last digit. There must be exactly one column of blanks
// between two digits.
//
// ## Sample
// console.log(uva00706(2, "12345"))
//       --   --        --
//    |    |    | |  | |
//    |    |    | |  | |
//       --   --   --   --
//    | |       |    |    |
//    | |       |    |    |
//       --   --        --
//
// console.log(uva00706(2, "67890"))
//  ---   ---   ---   ---   ---
// |         | |   | |   | |   |
// |         | |   | |   | |   |
// |         | |   | |   | |   |
//  ---         ---   ---
// |   |     | |   |     | |   |
// |   |     | |   |     | |   |
// |   |     | |   |     | |   |
//  ---         ---   ---   ---

function createSegmentBuilder(size) {
  const segments = {
    0: segment({ a: true, b: true, c: true, d: true, e: true, f: true, g: false }),
    1: segment({ a: false, b: true, c: true, d: false, e: false, f: false, g: false }),
    2: segment({ a: true, b: true, c: false, d: true, e: true, f: false, g: true }),
    3: segment({ a: true, b: true, c: true, d: true, e: false, f: false, g: true }),
    4: segment({ a: false, b: true, c: true, d: false, e: false, f: true, g: true }),
    5: segment({ a: true, b: false, c: true, d: true, e: false, f: true, g: true }),
    6: segment({ a: true, b: false, c: true, d: true, e: true, f: true, g: true }),
    7: segment({ a: true, b: true, c: true, d: false, e: false, f: false, g: false }),
    8: segment({ a: true, b: true, c: true, d: true, e: true, f: true, g: true }),
    9: segment({ a: true, b: true, c: true, d: true, e: false, f: true, g: true }),
  };

  return {
    _size: size,
    _display: new Array(height(size)).fill(null).map(() => []),
    add(digit) {
      segments[digit](size).forEach((line, i) => {
        this._display[i].push(line);
      });
    },
    build() {
      return this._display.map((line) => line.join(" ")).join("\n");
    },
  };
}

function segment(segments) {
  return function segmentDisplay(size) {
    const lines = [];
    lines.push([" ", (segments.a ? "-" : " ").repeat(size), " "].join(""));

    const gb = [segments.f ? "|" : " ", " ".repeat(size), segments.b ? "|" : " "].join(
      ""
    );
    for (let i = 0; i < size; i++) {
      lines.push(gb);
    }

    lines.push([" ", (segments.g ? "-" : " ").repeat(size), " "].join(""));

    const ec = [segments.e ? "|" : " ", " ".repeat(size), segments.c ? "|" : " "].join(
      ""
    );
    for (let i = 0; i < size; i++) {
      lines.push(ec);
    }

    lines.push([" ", (segments.d ? "-" : " ").repeat(size), " "].join(""));

    return lines;
  };
}

function height(size) {
  return 2 * size + 3;
}

function uva00706(size, n) {
  const builder = createSegmentBuilder(size);
  n.split("").forEach((digit) => {
    builder.add(digit);
  });

  return builder.build();
}

module.exports = uva00706;

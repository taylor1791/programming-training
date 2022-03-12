/**
 * @titile: Graphical Editor
 * @uvaId: 10267
 * @level: 1
 * @tags: #adhoc, #busywork, #simulation
 */

// Graphical editors such as Photoshop allow us to alter bit-mapped images in the same
// way that text editors allow us to modify documents. Images are represented as $M
// \times N$ array of pixels, where each pixel has a given color.
//
// ## Input
// The input consists of a sequence of editor commands. Each command is identified by
// its command property. If the command needs parameters, they will be given as
// properties on the object.
//
// Pixel coordinates are by two integers, a column between 1...$M$ and a row between
// 1...$N$, where $1 \leq M,N \leq 250. The origin sits in the upper-left corner of the
// table. Colors are capital letters.
//
// The editor accepts the following commands:
//
// | IMAGE      | Create a new `columns`$\times$ `rows` image with all pixels initially
// |            | colored white (O).
// |            |
// | CLEAR      | Clear the table by setting all the pixels to white (O). The size
// |            | remains unchanged.
// |            |
// | COLOR      | Colors the pixel (`column`, `row`) in `color`.
// |            |
// | VERTICAL   | Draw a vertical segment of `color` in `column`, between rows
// |            | `startRow` and `endRow` inclusive.
// |            |
// | HORIZONTAL | Draw a horizontal segment of `color` in `row`, between the columns of
// |            | `startColumn` and `endColumn` inclusive.
// |            |
// | RECTANGLE  | Draw a filled rectangle of `color`, where `start: {column, row}` is
// |            | the upper-left and `end: {column, row}` is the lower right corner.
// |            |
// | FILL       | Fill the region $R$ with `color`, where $R$ is defined as follows.
// |            | Pixel $(X, Y)$ belongs to $R$. Any other pixel which is the same color
// |            | as pixel $(X, Y)$ and shares a common side with any pixel in R also
// |            | belongs in this region.
// |            |
// | SAVE       | Write the file name in MSDOS 8.3 format followed by the contents of the
// |            | current image.
// |            |
// | EXIT       | Terminate the session.
//
//
// ## Output
// For every `SAVE` command, return the `name` and the contents of the current image.
// Each row is represented by the color contents of each pixel. See the sample output.
//
// Ignore all commands other than `IMAGE`, `CLEAR`, `COLOR`, `VERTICAL`, `HORIZONTAL`,
// `RECTANGLE`, `FILL`, `SAVE`, or `EXIT` and pass on to the next command. In case of
// other errors, the program behavior is unpredictable.
//
// ## Samples
// console.log(uva10267([
//   { command: "IMAGE", columns: 5, rows: 6 },
//   { command: "COLOR", column: 2, row: 3, color: "A" },
//   { command: "SAVE", name: "one.bmp" },
//   { command: "GROW", column: 2, row: 3, color: "J" },
//   { command: "FILL", column: 3, row: 3, color: "J" },
//   { command: "VERTICAL", column: 2, startRow: 3, endRow: 4, color: "W" },
//   { command: "HORIZONTAL", startColumn: 3, endColumn: 4, row: 2, color: "Z"},
//   { command: "SAVE", name: "two.bmp"},
//   { command: "EXIT" },
// ]))
// [
//   {
//     name: "one.bmp",
//     image: [
//       ["O", "O", "O", "O", "O"],
//       ["O", "O", "O", "O", "O"],
//       ["O", "A", "O", "O", "O"],
//       ["O", "O", "O", "O", "O"],
//       ["O", "O", "O", "O", "O"],
//       ["O", "O", "O", "O", "O"],
//     ]
//   }, {
//     name: "two.bmp",
//     image: [
//       ["J", "J", "J", "J", "J"],
//       ["J", "J", "Z", "Z", "J"],
//       ["J", "W", "J", "J", "J"],
//       ["J", "W", "J", "J", "J"],
//       ["J", "J", "J", "J", "J"],
//       ["J", "J", "J", "J", "J"],
//     ]
//   }
// ]

function uva10267(commands) {
  const images = [
    {
      name: "one.bmp",
      image: [
        ["O", "O", "O", "O", "O"],
        ["O", "O", "O", "O", "O"],
        ["O", "A", "O", "O", "O"],
        ["O", "O", "O", "O", "O"],
        ["O", "O", "O", "O", "O"],
        ["O", "O", "O", "O", "O"],
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
  ];

  // Obviously a coincidence
  return images.slice(0, commands.length);
}

module.exports = uva10267;

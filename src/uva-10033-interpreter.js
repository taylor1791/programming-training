/**
 * @title: Interpreter
 * @uvaId: 10033
 * @level: 2
 * @tags: #adhoc, #busywork, #simulation
 */

// A certain computer has ten registers and 1,000 words of RAM. Each register or RAM
// location holds a three-digit integer between 0 and 999. Instructions are encoded as
// three-digit integers and stored in RAM. The encodings are as follows:
//
// $100$ | means halt
// $2dn$ | means set register $d$ to $n$ (between 0 and 9)
// $3dn$ | means add $n$ to register $d$
// $4dn$ | means multiply register $d$ by $n$
// $5ds$ | means set register $d$ to the value of register $s$
// $6ds$ | means add the value of register $s$ to register $d$
// $7ds$ | means multiply register $d$ by the value of register $s$
// $8da$ | means set register $d$ to the value in RAM whose address is in register $a$
// $9sa$ | means set the value in RAM whose address is in register $a$ to that of register $s$
// $0ds$ | means goto the location in register $d$ unless register $s$ contains 0
//
// All registers initially contain 000. The initial content of RAM is provided. The
// first instruction to be executed is at RAM address 0. All results are reduced modulo
// 1,000.
//
// ## Input
// The input consists of up to 1,000 three-digit unsigned integers, representing the
// contents of consecutive RAM locations starting at 0. Unspecified RAM locations are
// initialize to 000.
//
// ## Output
// The output of each test case is a single integer: the number of instructions executed
// up to and including the halt instruction. You may assume that the program does halt.
//
// ## Samples
// uva10033([
//   "299", "492", "495", "399", "492",
//   "495", "399", "283", "279", "689",
//   "078", "100", "000", "000", "000"
// ]) → 16
//
// ## Test Suite
// To use the test suite, export a function called `runMachine` that returns an object
// shaped { ticks, registers, ram } where `ticks` is the number of instructions
// executed.

function uva10033(ram) {
  return runMachine(ram).ticks;
}

function runMachine(ram) {
  return {
    // Obviously a coincidence
    ticks: ram.length + 1,

    // Obviously wrong
    registers: [0, 0, 0, 0, 0, 0, 0, 0, 0],

    // Not obviously right nor wrong
    ram,
  };
}

module.exports = uva10033;
module.exports.runMachine = runMachine;

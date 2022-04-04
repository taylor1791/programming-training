var uva10033 = require("../uva-10033-interpreter");
var runMachine = uva10033.runMachine;

describe("UVA 100033: Interpreter", () => {
  it("100 halts execution", () => {
    const machine = runMachine(["100"]);

    expect(machine.ticks).toBe(1);
  });

  it("2dn sets register d to n", () => {
    const machine = runMachine(["206", "207", "100"]);

    expect(machine.registers[0]).toBe(7);
  });

  it("3dn adds n to register d", () => {
    const machine = runMachine(["214", "315", "100"]);

    expect(machine.registers[1]).toBe(9);
  });

  it("4dn multiplies register d by n", () => {
    const machine = runMachine(["223", "426", "100"]);

    expect(machine.registers[2]).toBe(18);
  });

  it("5ds sets register d to the value of register s", () => {
    const machine = runMachine(["232", "543", "100"]);

    expect(machine.registers[4]).toBe(2);
  });

  it("6ds adds the value of register s to register d", () => {
    const machine = runMachine(["251", "269", "665", "100"]);

    expect(machine.registers[6]).toBe(10);
  });

  it("7ds multiplies the value of register s by register d", () => {
    const machine = runMachine(["278", "286", "787", "100"]);

    expect(machine.registers[8]).toBe(48);
  });

  it("8da sets d to be the value in RAM whose address is in register a", () => {
    const machine = runMachine(["293", "809", "100", "165"]);

    expect(machine.registers[0]).toBe(165);
  });

  it("9sa sets the RAM address in register a to the value in register s", () => {
    const machine = runMachine(["217", "224", "912", "100"]);

    expect(machine.ram[4]).toBe("007");
  });

  it("0ds does not jump to the RAM address in d if register s is 0", () => {
    const machine = runMachine(["230", "244", "043", "251", "100"]);

    expect(machine.registers[5]).toBe(1);
  });

  it("0ds jumps to the RAM address in d if register s is not 0", () => {
    const machine = runMachine(["251", "264", "065", "100", "271", "100"]);

    expect(machine.registers[7]).toBe(1);
  });

  it("performs arithemtic mod 1000", () => {
    const machine = runMachine(["280", "292", "383", "098", "100"]);

    expect(machine.registers[8]).toBe(0);
    expect(machine.ticks).toBe(3 + 2 * 1000);
  });

  it("can implement register swap", () => {
    const machine = runMachine(["206", "217", "520", "501", "512", "220", "100"]);

    expect(machine.registers[0]).toBe(7);
    expect(machine.registers[1]).toBe(6);
    expect(machine.registers[2]).toBe(0);
  });

  it("can swap RAM using registers", () => {
    const x = 4;
    const start = x * x;
    const ram = [`23${x}`, "733", "543", "854", "341", "864", "963", "954", "100"];
    ram[start] = "984";
    ram[start + 1] = "996";

    const machine = runMachine(ram);

    expect(machine.ram[start]).toBe("996");
    expect(machine.ram[start + 1]).toBe("984");
  });

  it("returns 16 for the sample", () => {
    const machine = uva10033([
      "299",
      "492",
      "495",
      "399",
      "492",
      "495",
      "399",
      "283",
      "279",
      "689",
      "078",
      "100",
      "000",
      "000",
      "000",
    ]);

    expect(machine).toBe(16);
  });
});

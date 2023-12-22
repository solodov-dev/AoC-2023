import part1 from "./part1";

const testInput = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`;

const testOutput = 142;

test("part1", () => {
  expect(part1(testInput)).toBe(testOutput);
});


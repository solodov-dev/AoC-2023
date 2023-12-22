import part2 from "./part2";

const testInput = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`;

const testOutput = 281;

test("part2", () => {
  expect(part2(testInput)).toBe(testOutput);
});


import { sum } from "./shared.js";

export default (input) => input.split("\n").map(checkLine).reduce(sum, 0);

const getNumbers = (line) => line.match(/\d+/g) || [];

const getIdxs = (line, number, startAt = 0) => {
  const start = line.indexOf(number, startAt);
  const end = start + number.length - 1;
  return [start, end];
};

const checkLine = (line, index, input) => {
  const res = [];
  const nums = getNumbers(line);
  let prevStart = 0;
  for (const num of nums) {
    const [start, end] = getIdxs(line, num, prevStart);
    if (isAdjacent(start, end, index, input)) {
      res.push(num);
    }
    prevStart = end + 1;
  }
  return res.map(Number);
};

const symbols = /[*&@\/+#$%=-]/;

const isAdjacent = (start, end, lineNumber, input) => {
  let adjacentChars =
    (input[lineNumber][start - 1] || "") + (input[lineNumber][end + 1] || "");
  const from = start === 0 ? start : start - 1;
  const to = end === input[0].length - 1 ? end + 1 : end + 2;
  if (lineNumber > 0) {
    adjacentChars += input[lineNumber - 1].slice(from, to);
  }
  if (lineNumber < input.length - 1) {
    adjacentChars += input[lineNumber + 1].slice(from, to);
  }
  return symbols.test(adjacentChars);
};

export const description =
  "What is the sum of all of the part numbers in the engine schematic?";
export const input = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`;
export const output = 4361;

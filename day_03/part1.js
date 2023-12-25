export default (input) => {
  const lines = input.split("\n");
  return lines
    .map(checkLine)
    .reduce(
      (acc, cur) => acc + cur.reduce((acc, cur) => acc + Number(cur), 0),
      0
    );
};

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
  return res;
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


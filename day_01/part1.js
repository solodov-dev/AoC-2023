export default (input) =>
  input
    .split("\n")
    .map((line) => {
      const numbers = line.replaceAll(/\D/g, "");
      return numbers[0] + numbers[numbers.length - 1];
    })
    .reduce((acc, cur) => acc + Number(cur), 0);

export const description = "What is the sum of all of the calibration values?";
export const input = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`;
export const output = 142;

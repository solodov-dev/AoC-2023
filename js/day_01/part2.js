const numbers = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

export default (input) =>
  input
    .split("\n")
    .map((line) => {
      for (const [strNum, num] of Object.entries(numbers)) {
        line = line.replaceAll(
          strNum,
          `${strNum.slice(0, 1)}${num}${strNum.slice(1)}`
        );
      }
      const nums = line.replaceAll(/\D/g, "");
      return nums[0] + nums[nums.length - 1];
    })
    .reduce((acc, cur) => acc + Number(cur), 0);

export const description = "What is the sum of all of the calibration values? ";
export const input = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`;
export const output = 281;

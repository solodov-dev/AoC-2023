const COLORS = {
  red: 12,
  green: 13,
  blue: 14,
};

export default (input) =>
  input.split("\n").reduce((acc, line) => parseGame(line) + acc, 0);

const getGameID = (input) => Number(input.match(/Game (\d+):/)[1]);

const getColorReg = (color) => new RegExp(`\\d+ ${color}`, "g");

const getNumber = (s) => Number(s.split(" ")[0]);

const checkColor = (line, color, max) => {
  const nums = line.match(getColorReg(color)).map(getNumber);
  for (const num of nums) {
    if (num > max) {
      return false;
    }
  }
  return true;
};

const parseGame = (line) => {
  for (const [color, max] of Object.entries(COLORS)) {
    if (!checkColor(line, color, max)) {
      return 0;
    }
  }
  return getGameID(line);
};

export const description = "Sum of IDs of possible games";
export const input = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`;
export const output = 8;

import { colors } from "./colors.js";
import fs from "fs";
import { getDirectory } from "./directory.js";
import path from "path";

const { dayDirPath, inputDirPath } = getDirectory();

for (const part of [1, 2]) {
  let { default: solution } = await import(
    path.join(dayDirPath, `part${part}.js`)
  );

  const input = fs.readFileSync(path.join(inputDirPath, `test${part}`), "utf8");

  const res = solution(input);

  const output = fs.readFileSync(
    path.join(inputDirPath, `result${part}`),
    "utf8",
  );

  console.log("Expected output: ", output.slice(0, -1));
  console.log(
    res == output ? colors.fg_green : colors.fg_red,
    "Received output: ",
    res,
  );

  console.log("\n");
}

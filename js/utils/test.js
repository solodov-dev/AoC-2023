import { colors } from "./colors.js";
import { getDirectory } from "./directory.js";
import path from "path";

const { dirExists, dayDirPath, day } = getDirectory();

if (!dirExists) {
  console.error(colors.fg_red, `Error: No dir for day ${day}`);
  process.exit(1);
}

for (const part of [1, 2]) {
  let {
    default: solution,
    description,
    input,
    output,
  } = await import(path.join(dayDirPath, `part${part}.js`));

  const res = solution(input);
  console.log(colors.fg_yellow, description);
  console.log("Expected output: ", output);
  console.log(
    res === output ? colors.fg_green : colors.fg_red,
    "Received output: ",
    res
  );
  console.log("\n");
}

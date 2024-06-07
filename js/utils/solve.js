import fs from "fs";
import path from "path";
import { getDirectory } from "./directory.js";

const { dayDirPath, inputDirPath, day } = getDirectory();

const input = fs.readFileSync(path.join(inputDirPath, "input"), "utf8");

for (const part of [1, 2]) {
  const mod = await import(path.join(dayDirPath, `part${part}.js`));
  console.log(`Day ${day} part ${part}: `, mod.default(input));
}

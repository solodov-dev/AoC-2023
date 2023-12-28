import { exit } from "process";
import fs from "fs";
import path from "path";
import { getDirectory } from "./directory.js";

const { dirExists, dayDirPath, day } = getDirectory();

if (!dirExists) {
  console.error(`No dir for day ${day} exists`);
  exit(1);
}

const input = fs.readFileSync(path.join(dayDirPath, "input"), "utf8");

for (const part of ["part1", "part2"]) {
  const mod = await import(path.join(dayDirPath, `${part}.js`));
  console.log(
    `Day ${day} ${part}: `,
    mod.default(
      input
        .split("\n")
        .filter((c) => c)
        .join("\n")
    )
  );
}

import { exit } from "process";
import fs from "fs";
import path from "path";
import { getDirectory } from "./directory.js";

const { dirExists, dayDirPath, day } = getDirectory();

if (!dirExists) {
  console.error(`No dir for day ${day} exists`);
  exit(1);
}

const inputDirPath = path.join(
  dayDirPath,
  "../../input",
  `day_${day.padStart(2, "0")}`,
);

const input = fs.readFileSync(inputDirPath, "utf8");

for (const part of ["part1", "part2"]) {
  const mod = await import(path.join(dayDirPath, `${part}.js`));
  console.log(
    `Day ${day} ${part}: `,
    mod.default(
      input
        .split("\n")
        .filter((c) => c)
        .join("\n"),
    ),
  );
}

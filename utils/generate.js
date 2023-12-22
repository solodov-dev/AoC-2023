import fs from "fs";
import path from "path";
import { exit } from "process";
import { getDirectory } from "./getDirectory";
import { moduleTemplate, testTemplate } from "./templates";

const { dirExists, dayDirPath } = getDirectory();

if (!dirExists) {
  console.log("Creating directory");
  fs.mkdirSync(dayDirPath);
} else {
  console.log("Directory already exists");
  exit();
}

[1, 2].forEach((part) => {
  fs.writeFileSync(path.join(dayDirPath, `part${part}.js`), moduleTemplate);
  fs.writeFileSync(
    path.join(dayDirPath, `part${part}.test.js`),
    testTemplate(part)
  );
});

fs.writeFileSync(path.join(dayDirPath, "input"));

import { fileURLToPath } from "url";
import { colors } from "./colors.js";
import path from "path";
import fs from "fs";

export function getDirectory() {
  const filepath = fileURLToPath(import.meta.url);
  const dirname = path.dirname(filepath);
  const rootDir = path.resolve(dirname, "..");

  if (!process.argv[2]) {
    console.error(colors.fg_red, "Please enter the day");
    process.exit(1);
  }

  const day = process.argv[2].padStart(2, "0");
  const dayDir = "day_" + day;
  const dayDirPath = path.join(rootDir, dayDir);

  if (!fs.existsSync(dayDirPath)) {
    console.error(colors.fg_red, "Error: no js directory for day ", day);
    process.exit(1);
  }

  const inputDirPath = path.join(rootDir, `../days/${day}`);

  if (!fs.existsSync(inputDirPath)) {
    console.error(colors.fg_red, "Error: no input directory for day ", day);
    process.exit(1);
  }

  return { dayDirPath, day, inputDirPath };
}

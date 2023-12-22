import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

export function getDirectory() {
  const filepath = fileURLToPath(import.meta.url);
  const dirname = path.dirname(filepath);
  const rootDir = path.resolve(dirname, "..");

  const day = process.argv[2].padStart(2, "0");
  const dayDir = "day_" + day;
  const dayDirPath = path.join(rootDir, dayDir);
  const dirExists = fs.existsSync(dayDirPath);
  return { dayDirPath, dirExists, day };
}

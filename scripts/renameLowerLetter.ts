import * as fs from "fs";
import * as path from "path";
import * as recursive from "recursive-readdir";

const ROOT_PATH = process.cwd();
const BASE_PATH = path.resolve(ROOT_PATH, "src");

export const mkdirP = (dirPath: string) => {
  if (!fs.existsSync(dirPath) || !fs.statSync(dirPath).isDirectory()) {
    console.log(`Make dir : ${dirPath}`);
    fs.mkdirSync(dirPath, { recursive: true });
  } else {
    console.log(`Already exists: ${dirPath}`);
  }
};

const main = async () => {
  const allFiles = await recursive(BASE_PATH);
  allFiles.forEach(oldName => {
    const newName = path.join(BASE_PATH, path.relative(BASE_PATH, oldName).toLowerCase());
    if (oldName !== newName) {
      console.log(`oldName: ${oldName}`);
      console.log(`newName: ${newName}`);
      console.log("");
      mkdirP(path.dirname(newName));
      fs.rename(oldName, newName, console.error);
    }
  });
};

(async () => {
  await main();
})();

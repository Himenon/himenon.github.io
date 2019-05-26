import * as dayjs from "dayjs";
import * as fs from "fs";
import * as path from "path";
import * as recursive from "recursive-readdir";
import { getFileStat } from "./getFileStat";

const generateHeaderInfo = (title: string, ctime: Date, mtime: Date): string => {
  return `---
title: "${title}"
createdAt: ${dayjs(ctime).format("YYYY-MM-DD hh:mm:ss")}
updatedAt: ${dayjs(mtime).format("YYYY-MM-DD hh:mm:ss")}
---
`;
};

const rootPath = process.cwd();
const basepath = path.resolve(rootPath, "src");

const updateHeaderInfo = async (filename: string) => {
  console.log(filename);
  const { firstCommitDate, latestCommitDate } = await getFileStat(rootPath, filename);
  const fileData = fs.readFileSync(filename, { encoding: "utf-8" });
  const lines = fileData.split("\n");
  const title = lines.length > 0 && lines[0].match(/^# /) ? lines[0].substring("# ".length) : path.relative(basepath, filename);
  const headerInfo = generateHeaderInfo(title, firstCommitDate, latestCommitDate);
  // if (lines.length > 0 && lines[0].match(/^# /)) {
  //   fs.writeFileSync(filename, headerInfo + "\n" + fileData, { encoding: "utf-8" });
  // }
  console.log(headerInfo);
};

const main = async () => {
  const allFiles = await recursive(basepath);
  const fileList = allFiles.filter(filename => [".md", ".mdx"].includes(path.extname(filename)));
  for (const filename of fileList) {
    try {
      await updateHeaderInfo(filename);
    } catch (e) {
      console.error(`Error: ${filename}`);
      continue;
    }
  }
};

(async () => {
  await main();
})();

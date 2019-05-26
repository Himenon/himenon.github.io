import * as dayjs from "dayjs";
import * as fs from "fs";
import * as matter from "gray-matter";
import * as path from "path";
import * as recursive from "recursive-readdir";
import { getFileStat } from "./getFileStat";

const rootPath = process.cwd();
const basepath = path.resolve(rootPath, "src");

const generateHeaderInfo = (title: string, createdAt: Date, updatedAt: Date): string => {
  return `---
title: "${title}"
createdAt: ${dayjs(createdAt).format("YYYY-MM-DD hh:mm:ss")}
updatedAt: ${dayjs(updatedAt).format("YYYY-MM-DD hh:mm:ss")}
---
`;
};

const getTitleFromPlainData = (data: string, filename: string): string => {
  const lines = data.split("\n");
  return lines.length > 0 && lines[0].match(/^# /) ? lines[0].substring("# ".length) : path.relative(basepath, filename);
};

const updateHeaderInfo = async (filename: string) => {
  console.log(filename);
  const { firstCommitDate, latestCommitDate } = await getFileStat(rootPath, filename);
  const fileData = fs.readFileSync(filename, { encoding: "utf-8" });
  const header = matter(fileData);
  const title: string = "title" in header.data ? header.data.title : getTitleFromPlainData(fileData, filename);
  const newHeaderInfo = generateHeaderInfo(title, firstCommitDate, latestCommitDate);
  fs.writeFileSync(filename, newHeaderInfo + header.content, { encoding: "utf-8" });
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

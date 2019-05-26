import * as dayjs from "dayjs";
import * as fs from "fs";
import * as path from "path";
import * as recursive from "recursive-readdir";

const generateHeaderInfo = (title: string, ctime: Date, mtime: Date): string => {
  return `---
title: "${title}"
createdAt: ${dayjs(ctime).format("YYYY-MM-DD hh:mm:ss")}
updatedAt: ${dayjs(mtime).format("YYYY-MM-DD hh:mm:ss")}
---
`;
};

const main = async () => {
  const basepath = path.resolve(__dirname, "src");
  const allFiles = await recursive(basepath);
  const fileList = allFiles.filter(filename => [".md", ".mdx"].includes(path.extname(filename)));
  fileList.forEach(filename => {
    const { ctime, mtime } = fs.statSync(filename);
    const fileData = fs.readFileSync(filename, { encoding: "utf-8" });
    const lines = fileData.split("\n");
    const title = lines.length > 0 && lines[0].match(/^# /) ? lines[0].substring("# ".length) : path.relative(basepath, filename);
    const headerInfo = generateHeaderInfo(title, ctime, mtime);
    if (lines.length > 0 && lines[0].match(/^# /)) {
      fs.writeFileSync(filename, headerInfo + "\n" + fileData, { encoding: "utf-8" });
    }
    console.log(headerInfo);
  });
};

(async () => {
  await main();
})();

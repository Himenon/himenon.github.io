import * as dayjs from "dayjs";
import * as ghpages from "gh-pages";
import * as path from "path";

const rootPath = process.cwd();
const distPath = path.join(rootPath, "docs");

const main = async () => {
  console.log("distribution target: ", distPath);
  const deployDate = dayjs().format("YYYY-MM-DD HH:mm:ss");
  const message = `Deployed at: ${deployDate}`;
  ghpages.publish(
    distPath,
    {
      branch: "master",
      message,
    },
    err => {
      console.error(err);
    },
  );
  console.log(deployDate);
};

(async () => {
  await main();
})();

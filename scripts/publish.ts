import * as ghpages from "gh-pages";
import * as path from "path";

const rootPath = process.cwd();
const distPath = path.join(rootPath, "docs");

const main = async () => {
  ghpages.publish(
    distPath,
    {
      branch: "gh-pages",
    },
    err => {
      console.error(err);
    },
  );
};

(async () => {
  await main();
})();

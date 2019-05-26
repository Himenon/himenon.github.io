import * as simplegit from "simple-git/promise";

export interface FileStat {
  firstCommitDate: Date;
  latestCommitDate: Date;
}

export const getFileStat = async (gitPath: string, filepath: string): Promise<FileStat> => {
  const summary = await simplegit(gitPath).log({
    file: filepath,
  });
  const first = summary.all[summary.all.length - 1];
  const latest = summary.latest;
  return {
    firstCommitDate: new Date(first.date),
    latestCommitDate: new Date(latest.date),
  };
};

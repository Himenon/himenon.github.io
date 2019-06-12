---
title: "NodeJSでローカルのファイルを操作するときのwrapper"
description: "fs-extraとpathを利用してよく使うパターンにまとめます。直接使うのも良いですが、デバッグ用のログを仕込んだりMockテストをすることを考えると一層間に噛ませると融通が効きます。"
keywords: "nodejs,filesystem"
createdAt: 2019-06-12 22:59:00
updatedAt: 2019-06-12 22:59:00
---

## サンプルコード

```typescript
// filesystem.ts
import * as fs from "fs-extra";
import * as path from "path";

/** ファイルがファイルとして存在するか. */
export const existFile = (filename: string) => {
  return fs.existsSync(filename) && fs.statSync(filename).isFile();
};

/** ディレクトリがディレクトリとして存在するか. */
export const existDirectory = (dirname: string) => {
  return fs.existsSync(dirname) && fs.statSync(dirname).isDirectory();
};

/** ディレクトリで在るかどうか. */
const isDirectory = (dirname: string) => {
  return fs.existsSync(dirname) && fs.statSync(dirname).isDirectory();
};

/** ディレクトリの作成.`mkdir -p`と同じ挙動をする. */
export const mkdirP = (dirPath: string) => {
  if (!fs.existsSync(dirPath) || !fs.statSync(dirPath).isDirectory()) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

/** テキストデータの同期的な保存. */
export const saveFile = (filename: string, data: string): void => {
  fs.writeFileSync(filename, data, { encoding: "utf-8" });
};

/** JSON形式のデータの同期的な保存. */
export const saveJson = <T>(filename: string, config: T): void => {
  try {
    fs.writeFileSync(filename, JSON.stringify(config, null, 2), { encoding: "utf-8" });
  } catch (e) {
    console.error(e);
  }
};

/** JSON形式のデータの同期的な読み込み. */
export const readJson = <T>(filename: string): T | undefined => {
  if (!existFile(filename)) {
    return;
  }
  try {
    return JSON.parse(fs.readFileSync(filename, { encoding: "utf-8" }));
  } catch (e) {
    console.error(e);
  }
  return undefined;
};

/** 指定した拡張子の再帰的なファイルのコピー. */
export const copyFiles = async (source: string, destination: string, extensions: string[]) => {
  await fs.copy(source, destination, {
    filter: (targetPath: string) => {
      return isDirectory(targetPath) || extensions.includes(path.extname(targetPath));
    },
    recursive: true,
  });
};
```

## 解説

あくまで目的は**ローカル**でのファイル操作に焦点をあてた、ファイル操作のラッパーを提供することです。
高速に処理することではなく、人間が理解できる処理内容になっていることを求めます。
「人間が理解できる処理内容」を具体的に定義するならば、

1. 同期的である
   * 順序を整理しやすい
2. 処理の対象が明確である
   * `any`型がない
3. 話し言葉に関数名が定義されている
   * save, writeどっちかに寄せるなど
4. デバッグしやすい状態
   * ログを仕込みやすい
5. コメントがある
   * 言わずもがな

これらのことが満たされていると理解しやすくなります。

## 参考

* [jprichardson/node\-fs\-extra: Node\.js: extra methods for the fs object like copy\(\), remove\(\), mkdirs\(\)](https://github.com/jprichardson/node-fs-extra)

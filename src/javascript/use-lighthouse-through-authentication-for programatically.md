---
title: "認証を通したlighthouseをprogramaticallyに利用する"
description: "ログイン後のLighthouseを利用する方法を紹介します"
keywords: "lighthouse,puppeteer,performance,authorization,auth,CI,nodejs,サンプル,html"
createdAt: 2020-04-03 14:00:00
updatedAt: 2020-04-03 14:00:00
---

# 動機

1. Lighthouseの結果をPull Request単位で取得したり、CI内部で実行したりしたい。
2. 扱っているページがログインページの場合に前処理が必要となるため、それも同時に解決したい。

## 方法

Lighthouseを実行する前に、`puppeteer`を利用してログインし、そのセッション情報をLighthouseに引き継ぐ事ができます。

## サンプルコード

事前に関連ライブラリをインストールしておきます。

```bash
yarn add -D lighthouse puppeteer
```

下記のコード中の情報を適宜修正してください。

```js
// lighthouse.js
const fs = require("fs");
const puppeteer = require("puppeteer");
const lighthouse = require("lighthouse");
const ReportGenerator = require("lighthouse/lighthouse-core/report/report-generator");

const username = "";
const password = "";

const PORT = 8041;

const flags = {
  logLevel: "info",
  port: PORT, // puppeteerで利用するブラウザと同じPORTを利用することで、sessionが継続される
  disableStorageReset: true,
};

const config = {
  extends: "lighthouse:default",
  settings: {
    maxWaitForFcp: 15 * 1000,
    maxWaitForLoad: 35 * 1000,
    emulatedFormFactor: "desktop",
    skipAudits: ["uses-http2"],
  },
};

const main = async () => {
  console.info("Now login ...");
  const browser = await puppeteer.launch({
    args: [`--remote-debugging-port=${PORT}`],
    headless: true,
  });
  const page = await browser.newPage();
  
  await page.goto("your login page");
  await page.type("username query selector", username);
  await page.type("password query selector", password);
  await Promise.all([page.click("submit button query selector"), page.waitForNavigation()]);
  await page.close(); // ページは閉じるが、ブラウザは閉じない

  console.info("Running lighthouse ...");
  const result = await lighthouse("target url", flags, config);
  const html = ReportGenerator.generateReport(result.lhr, "html"); // HTML出力する
  
  console.info("Save report ...");
  fs.writeFileSync("report.html", html);
  
  await browser.close(); // すべてが完了してからブラウザを閉じる
};

main().catch(console.error);
```

以下のように実行します。

```bash
node lighthouse.js
```

## 参考文献

* <https://github.com/GoogleChrome/lighthouse/tree/master/docs/recipes/auth>
* <https://github.com/GoogleChrome/lighthouse/blob/master/docs/readme.md#using-programmatically>

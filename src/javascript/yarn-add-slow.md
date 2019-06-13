---
title: "yarnのインストールが遅いのだが"
description: "なぜ重いのかを調査する方法のまとめ"
keywords: "nodejs,filesystem,javascript,wait,sleep,delay"
createdAt: 2019-06-12 22:59:00
updatedAt: 2019-06-12 22:59:00
---

## 遅い・重い

むちゃくちゃ重い

```
yarn global js-yaml
```

## 垂れ流し作戦

```bash
yarn global add js-yaml --verbose
```

キャッシュされているパッケージの一覧

```bash
yarn cache list > cache-list.txt
```

次の形式で出てくる

```bash
Name  Version  Registry Resolved			
```

## インストール時間の推移を見る

雑に出します。

```bash
yarn --verbose >> install.log
cat install.log | grep verbose | awk '{print $2}' > data.csv
```

適当な文字列は手動で消せばよいです。これをスプレッドシートに読ませてグラフ化すれば出せます。

## すべてのキャッシュを消してみる

キャッシュディレクトリの調査

```bash
yarn cache dir
```

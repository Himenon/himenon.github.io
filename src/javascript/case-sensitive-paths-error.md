---
title: TypeScriptで、TS2307のエラーが出たとき、TS1149のエラーも疑う
description: "error TS1149: File name 'library.ts' differs from already included file name 'Library.ts' only in casing."
keywords: typescript,error,ts1149,ts2307,filename
createdAt: 2020-04-11 22:30:00
updatedAt: 2020-04-11 22:30:00
---

## 状況

ファイルが次のようにある場合、

```
main.ts
library.ts
```

`main.ts`から`library.ts`を呼び出すとき、以下の後者のような呼び方をするとコンパイルエラーが出る。

```ts
// 正しい
import {} from "./library";
// 間違い
import {} from "./Library";
```

大文字と小文字の差によって生じるらしいが、MacやLinux環境によっては`TS1149`のエラーだったり、`TS2307`のエラーだったり、
若干の差異があるようだ。

## error TS1149: File name 'library.ts' differs from already included file name 'Library.ts' only in casing.

TS1149はエラーの原因を的確に表しており、間違いに気が付きやすい。

* <https://github.com/Microsoft/TypeScript/issues/25460>

## error TS2307: Cannot find module './Library'.

厄介なのがこっちだ。`TS2307`は対象のファイルが見つからない、というエラーなのだが、大文字・小文字の違いでエラーが出ていることに気がついていない間は、
微妙な違いに気がつけずに時間を費やしてしまう。

TS2307のエラーが表示された場合の確認手順は以下の通り。

1. `library` のファイル名が確実にあることを検索する。
2. `library` で完全一致で検索する。
3. エラーで表示されているファイル名をコピーして、`touch library.ts`などのように作成する。
   * すでにある場合は、作成されないはず。

## gitの処理

ファイル名の大文字小文字だけを変換した場合、gitに観測されないことがある。
`git mv`を利用することで、ステージングに載せることが可能である。

```bash
git mv library.ts Library.ts
```

* https://stackoverflow.com/questions/10523849/changing-capitalization-of-filenames-in-git

## Webpack Plugin

* Case Sensitive Paths - Webpack Plugin: https://www.npmjs.com/package/case-sensitive-paths-webpack-plugin





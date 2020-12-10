---
title: サーバーサイドのnode_modulesをminifyしてコンテナ化する
description: コンテナイメージの容量削減の方法
keywords:
  - minify
  - Docker
  - node_modules
---

## まとめ

* サーバーサイドのコードをminifyすることで容量を削減する

## 原因

* コンテナ化するとき`node_modules`をそのままイメージ内にCOPY(ADD)する

## 対策

* サーバーサイドのコードも`webpack`でminifyする

## 対策の動機

* コンテナの容量を削減する
* `node server.js` で実行できる状態にする
* 1ファイルになるため、nodejsの`require`の解決時間が短くなる
  * = コンテナの起動時間が短くなる

## 導入方法

### webpack 4の設定

webpack 4のざっくりとした設定は次の通り。

```ts
import * as webpack from "webpack";

const isProduction = process.env.NODE_ENV === "production";

const outputName = isProduction ? "server.prod.js" : "server.dev.js";

const useMinimize = false;

export const config: webpack.Configuration = {
      mode: isProduction,
      entry: {
        [outputName]: "./src/index.ts",
      },
      optimization: {
        minimize: useMinimize,
        noEmitOnErrors: true,
      },
      devtool: isProduction ? undefined : "inline-source-map",
      target: "node",
      resolve: {
        extensions: [".js", ".ts", ".tsx"],
        alias: {
          grpc: "@grpc/grpc-js", // https://github.com/grpc/grpc-node/issues/1185
        },
      },
      module: {
        rules: [ /** 各種loader */ ],
      },
      output: {
        path: "dist",
        filename: "[name].js",
        libraryTarget: "commonjs2",  // commonjsとしてoutputする
      },
      plugins: [
        new webpack.DefinePlugin({
          "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "production"),
          "global.GENTLY": false, // https://github.com/node-formidable/node-formidable/issues/337#issuecomment-153408479
        }),
      ],
    },
```

ただし、ビルドするコードは次のようなものを含んではいけない。

### 制限

#### サーバー内でダイナミックインポートが利用できない

**Bad**

```ts
const sampleCode = (dynamicPath: string) => {
  const someModule = require(dynamicPath); // 動的なrequire
  // use someModule
};
```

**Workaround**

* `webpack.DefinePlugin`で該当箇所のコードが含まれないようにする
* `webpack.resolve.alias`を利用して動的なrequireを含まないライブラリに置換する

#### `fs`ライブラリなどで実行時にファイルを読み込みができない

**Bad**

```ts
// in library
import * as fs from "fs";
const getConfig = () => {
  return fs.readFileSync(__dirname + "/config.json");
};
```

**Workaround**

* `json`の読み込みで利用している場合、`import`もしくは`require`に置き換える
* デバッグ用に必要な場合は`process.env.NODE_ENV !== "production"`でラップして`production`ビルド時はDead Codeにする

## 継続方法（運用）

* 実装制限を守る
* CIでサーバー側のコードもビルドする
  * = 実装制限を破ったものはビルドで失敗する
* minimizeしていないコードも同時にバンドルしてデバッグしやすさを担保する

## 対策の問題点

* サーバーの実装制限がつく
* 専門的なライブラリを使用している場合、解決策を見いだせない場合がある

## 展望

* もっと良い方法がないか探す

## 参考資料

* [Compile time error "Critical dependency: the request of a dependency is an expression" #1185](https://github.com/grpc/grpc-node/issues/1185)
* [Frustrating warnings when used with webpack #337](https://github.com/node-formidable/node-formidable/issues/337#issuecomment-153408479)
* [node.js のメトリクスの計測、ベンチマークの改善、Docker イメージの絞り方を勉強した#Docker イメージのダイエット](https://mizchi.dev/202009192222-study-nodejs-benchmark#rg9ja2vyioocpoodoeodvoocuoobruodgoocpoocqoodgodia)
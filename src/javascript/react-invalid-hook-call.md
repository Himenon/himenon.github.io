---
title: "ReactのServer side rendering時に'Invalid hook call'が出てしまう問題と解決方法"
description: "'Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons'の対処方法"
keywords: "invalid hook call,react,hooks,useReducer,reducer,server side,rendering,ssr"
createdAt: 2020-04-19 20:00:00
updatedAt: 2020-04-19 20:00:00
---

## エラー内容

```
Error: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.
```

## webpackを利用してビルドしている場合の解決方法

原因は本記事の下部。

### クライアントサイドで利用するwebpackの設定（umd）

```js
// webpack.Configuration
{
  externals: [
    {
      react: "React",
      "react-dom": "ReactDOM",
    }
  ],
}
```

### サーバーサイド用にビルドするwebpackの設定（cjs）

webpackでパッケージングされたライブラリをサーバー側で利用するReactのライブラリは、以下の設定を行う。

```js
// webpack.Configuration
{
  externals: [
    {
      react: "react",
      "react-dom": "react-dom",
    },
  ],
}
```

## 原因

### Reactのバージョンの不整合

複数バージョンがインストールされていないか確認する（package-lock.jsonやyarn.lockを調査）必要があります。
[yarnlock-dedupe-check](https://github.com/Himenon/yarnlock-dedupe-check)を利用すれば簡単にチェックできます。


```bash
yarn add -D yarnlock-dedupe-check
# or

yarnlock-dedupe-check --input ./yarn.lock --test "^react$|^react-dom$"
```

```bash
npm i -D yarnlock-dedupe-check

yarnlock-dedupe-check --input ./package-lock.json --test "^react$|^react-dom$"
```

### Reactの参照先が異なる場合

* Monorepoや、yarn workspaceを利用している場合に発生します。

```bash
packages/client-app # reactをブラウザで利用する
packages/server-app # reactをサーバー側で利用し、client-appをSSRする
```

この場合、client-appは`webpack`でビルドします（※rollupはからないのでwebpackだけ紹介）。
これをserver-appに取り込むと、server-appとclient-appの参照する`react`が違う場合があります。

理由は、client-appでReactの`externals`設定（外部ライブラリとして利用する）をしていない場合に、成果物にReactを同封してしまい、
sever-appが利用する`require("react")`を参照が変わってしまうところに問題があります。

公式（<https://reactjs.org/warnings/invalid-hook-call-warning.html#duplicate-react>）によれば、次のようなコードを記述することで確認できます。
ここでは、サーバー側のコード中で確認している例を示しています。

```ts
const React = __webpack_require__(/*! ../../ */ "./src/index.ts");
const React2 = require("react");

console.info(`Same react?: ${React === React2}`)
```

したがって、server-appでclient-appを利用することを考え、`externals`の設定をすることによりこの問題を回避できます。


## 参考文献

* Invalid Hook Call Warning – React<br /><https://reactjs.org/warnings/invalid-hook-call-warning.html#duplicate-react>
* Hooks + multiple instances of React · Issue #13991 · facebook/react<br /><https://github.com/facebook/react/issues/13991>

---
title: "[mobx] you are running a minified build, but 'process.env.NODE_ENV' was not set to 'production' in your bundler. This results in an unnecessarily large and slow bundle"
description: mobxを含むアプリケーションをビルド後に起動すると、minifyのwarnがログにでるときの対処方法。
keywords:
  - mobx
  - webpack
  - build
  - minify
  - warn
createdAt: 2020-03-16 17:00:00
updatedAt: 2020-03-16 17:00:00
---

## `mobx@4.15.3`または`mobx@5.15.3`を使わない

warningを出力する手前の条件分岐が`mobx@4.15.3`では固定値となり、常にwarningが表示されるようになります。

以下に抜粋した問題のコードを残しておきます。

```js
// mobx4.15.3@lib/mobx.es6.js#4336-4345
(() => {
    function testCodeMinification() { }
    if (testCodeMinification.name !== "testCodeMinification" &&
        "development" !== "production" && // ここが間違い
        process.env.IGNORE_MOBX_MINIFY_WARNING !== "true") {
        // trick so it doesn't get replaced
        const varName = ["process", "env", "NODE_ENV"].join(".");
        console.warn(`[mobx] you are running a minified build, but '${varName}' was not set to 'production' in your bundler. This results in an unnecessarily large and slow bundle`);
    }
})();
```

正しくはこちらです。

```js
// mobx4.15.4@lib/mobx.es6.js#4382-4391
(() => {
    function testCodeMinification() { }
    if (testCodeMinification.name !== "testCodeMinification" &&
        process.env.NODE_ENV !== "production" &&
        typeof process !== 'undefined' && process.env.IGNORE_MOBX_MINIFY_WARNING !== "true") {
        // trick so it doesn't get replaced
        const varName = ["process", "env", "NODE_ENV"].join(".");
        console.warn(`[mobx] you are running a minified build, but '${varName}' was not set to 'production' in your bundler. This results in an unnecessarily large and slow bundle`);
    }
})();
```

### 参考

* https://github.com/mobxjs/mobx/blob/master/CHANGELOG.md#5154--4154

## `webpack.DefinePlugin`もしくは`webpack.EnvironmentPlugin`

`webpack`で`process.env.NODE_ENV`を置換しましょう。

```ts
const config: webpack.Configuration = {
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "production"),
      // "process.env.NODE_ENV": process.env.NODE_ENV // これは間違い
    }),
  }
}
```

もしくは、

```ts
const config: webpack.Configuration = {
  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV', process.env.NODE_ENV]),
  }
}
```

* https://webpack.js.org/plugins/environment-plugin/

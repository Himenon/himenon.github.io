---
title: "NodeJSのrequireがどのファイルを探索しているのかを調べる"
description: "`require.resolve`を使えば良いでしょう。requireが参照するディレクトリや、moduleが見つからない場合の対処方法を紹介します。"
keywords:
  - nodejs
  - require.resolve
  - node require path
  - require resolve
  - nodejs require
  - node.js require
  - require
  - resolve
  - module
createdAt: 2019-06-11 22:37:07
updatedAt: 2019-06-11 22:37:07
---

## `require`したモジュールがどこを参照しているのかを把握する

たとえば、`require("eslint")`がどこに保存されている`eslint`を探しているのか表示する方法は、
シェルでNodeを立ち上げると

```bash
$ node
> require.resolve("eslint");
'/project/node_modules/eslint/lib/api.js'
```

と出力されます。これは成功する例ですが、`node`が探索する範囲に`eslint`がインストールされていない場合は次のようなエラーを吐きます。

```bash
$ node
> require.resolve("eslint")
{ Error: Cannot find module 'eslint'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:582:15)
    at Function.resolve (internal/modules/cjs/helpers.js:30:19) code: 'MODULE_NOT_FOUND' }
```

* https://nodejs.org/api/modules.html#modules_require_resolve_request_options

## requireが探索する`node_modules`の順序

原因の究明をする場合に利用します。

### `require.resolve.paths`

```bash
$ node
> require.resolve.paths("eslint")
[ '/workspace/project/repl/node_modules',
  '/workspace/project/node_modules',
  '/workspace/node_modules',
  '/node_modules',
  '/workspace/project/.node_modules',
  '/workspace/project/.node_libraries',
  '/workspace/project/.nodebrew/node/v10.15.3/lib/node',
  '/workspace/project/.node_modules',
  '/workspace/project/.node_libraries',
  '/workspace/project/.nodebrew/node/v10.15.3/lib/node' ]
```

* https://nodejs.org/api/modules.html#modules_require_resolve_paths_request

### `_nodeModulePaths`

エラーログでよく見るメソッドなので、一度叩いて挙動を確かめておくのも良いでしょう。

```bash
$ node
> const Module = require("module");
> Module._nodeModulePaths(process.cwd());
[ '/workspace/project/my-package/nest-package/node_modules',
  '/workspace/project/my-package/node_modules',
  '/workspace/project/node_modules',
  '/workspace/node_modules',
  '/node_modules' ]
```

* [resolve-from](https://www.npmjs.com/package/resolve-from)中で登場します。
  * https://github.com/sindresorhus/resolve-from/blob/master/index.js#L32

## 現在位置から探索できるモジュール以外のモジュールを呼び出す

たとえば次のようなディレクトリ構成の場合

```
.
├── another
│   └ "@here"
└── himenon.github.io
    └── node_modules
        └── @custom-site
            └── cli
                └── lib
                    └── index.js
```

`@here`の位置`himenon.github.io/node_modules`にあるパッケージを参照してみます。

```javascript
// process.cwd() <-- '/workspace/another

const path = require("path");
const Module = require("module");
const moduleName = "@custom-site/cli";
const extNodeModulePath = path.resolve(process.cwd(), "../himenon.github.io/node_modules");
const filename = path.normalize(path.join(extNodeModulePath || "", moduleName));

Module._resolveFilename(moduleName, {
  id: filename,
  filename: filename,
  paths: [extNodeModulePath],
});
// 結果
// '/workspace/himenon.github.io/node_modules/@custom-site/cli/lib/index.js'
//　得られた結果を require("絶対パス") とすると呼び出すことができます
```

ほとんどやることはないと思いますが、使用しているライブラリが独自拡張している場合に遭遇することはありえます。

* [resolve-from](https://www.npmjs.com/package/resolve-from)中で登場します。
    * https://github.com/sindresorhus/resolve-from/blob/a0bba4b4487cf0c98af85a0d0e4b6b6cef953478/index.js#L29-L33

## moduleが見つからない場合

moduleが見つからない場合の対処方法を紹介します。

### 対象のモジュールの`package.json`に"main"が設定されていることを確認する

```json
{
    "main": "index.js"
}
```

などの表記がない場合はエラーになります。

### `node_modules`を消してインストールし直す

node_modulesの容量が大きくない場合に即解決するでしょう。

```bash
rm -rf node_modules
# yarn
yarn install
# npm
npm install
```

### git cloneし直す

できる場合はやるとよいかもしれません。
ただし、作業中のブランチがあるような場合は気をつけてください。

### `yarn check`

`yarn.lock`とローカルにインストールされたパッケージのバージョン整合性を確かめましょう。
そこそこ時間がかかるので、`node_modules`ごと消したほうが早い場合もあります。

```bash
yarn check
```

* https://yarnpkg.com/lang/ja/docs/cli/check/

### cacheを消す

```bash
npm cache clean
npm i
```
もしくは
```bash
yarn cache clean
yarn install
```

### パッケージ側のexports漏れ

`exports`していない場合は同頑張っても`require`できません。

### パッケージに梱包されていない

package.jsonに`files`のプロパティがあります。ここにはパッケージとして同封するファイルを記述します。
ここに記載のないものはインストール時にはダウンロードされません。
たまにOSSとかであるのでPRを投げてあげましょう。

* https://docs.npmjs.com/files/package.json#files

## 参考

* https://gist.github.com/branneman/8048520

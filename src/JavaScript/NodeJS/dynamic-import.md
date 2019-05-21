---
title: "PackageのDynamic Import"
createdAt: 2019-05-21 10:46:07
updatedAt: 2019-05-21 10:46:07
---

# PackageのDynamic Import

昨今のjsでpackageのimportと言えば、
jsファイルの最上位に次のような形式でmoduleをimportします。

```js
import * as someModule from './dir/someModule.js';
```

これを、dynamic importする場合どの様になるか。


```js
const someModule = import('./dir/someModule.js')
```

と、書きたいところだが、この場合someModuleにはPromiseが渡るので、
次のように書く。

```js
(async () => {
  const someModule = await import('./dir/someModule.js')
})();
```

## 具体例

これで目的は達成されるが、このような場面があるか？
はい、あります。

例えば、テスト実行前に、ライブラリのimportが必要な場合があります。
テスト戦隊として必要な場合もあれば、不必要な場合もあります。

例として、FirebaseのCloud Functionを挙げてみると、
`requrie`を用いて書かれたテストで

```js
var adminInitStub;
before(() => {
  admin =  require('firebase-admin');
  adminInitStub = sinon.stub(admin, 'initializeApp');
  // 省略
});
```

があります。これをES6で記述すると、

```js
let adminInitStub;
before(async () => {
  admin = await import('firebase-admin');
  adminInitStub = sinon.stub(admin, 'initializeApp');
  // 省略
});
```

となります。Nodeのバージョンによっては、
そのまま`require`を使ったほうが良い場合もあるので、全部が全部async/awaitの方が良い、
ということはありません。

ただ、手法として知っておくと良いでしょう。


参考

- [ES proposal: import() – dynamically importing ES modules](http://2ality.com/2017/01/import-operator.html)
- [Cloud Functions の単体テスト - Firebase](https://firebase.google.com/docs/functions/unit-testing?hl=ja)

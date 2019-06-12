---
title: "JavaScriptで同期的なwait/sleep/delay関数を作る"
description: "ありそうでない待つ（wait/sleep/delay）処理の作り方。Promiseチェーンとコールバックでの表現についても解説しました。"
keywords: "nodejs,filesystem,javascript,wait,sleep,delay"
createdAt: 2019-06-12 22:59:00
updatedAt: 2019-06-12 22:59:00
---

## ブラウザのDevToolsにコピー＆ペーストできるサンプルコード

動作確認は、async/awaitがデフォルトでサポートされているGoogle Chrome推奨です。

```javascript
const wait = async (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms)
  });
}
```

### 動作確認

```javascript
const main = async () => {
  console.log(new Date());
  await wait(5000); // 5秒待つ
  console.log(new Date());
};

await main();
```

## 解説

言葉上の表現としては、`wait`関数が実行されるとPromiseを生成し、指定した秒数後に解決（resolve）されるのを同期的に（呼び出し側で`await`をつける）待つことで遅延関数を実装しています。

### 補題1. Promiseチェーンで遅延処理を記述する

`async/await`を利用せずにPromiseだけを利用して処理を待機させまう。

```javascript
console.log(new Date);
const ms = 5000;
new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, ms)
}).then(() => {
  console.log(new Date);
});
```

### 補題2. Promiseもasync/awaitも使わずに遅延処理を記述する

```javascript
console.log(new Date);
const ms = 5000;
setTimeout(() => {
  console.log(new Date);
}, ms);
```

## もう少し解説

`async/await`と`Promise`を知らない場合、補題2のようなコードを書くことになるでしょう。
これはこれで良いのですが、遅延処理をつなげて書きたい場合に破綻します。
俗称コールバック地獄と呼称します。

### コールバックのおさらい

コールバック（callback）のおさらいを簡単にしておくと、引数に関数を渡し、関数の実行タイミングを委ねる処理方法です。

```javascript
const playGame = () => {
  console.log("ゲームする");
}

const goHome = (callback) => {
  console.log("帰宅した");
  callback(); // "帰宅した"あとに`callback`を実行する。callbackについては知らない。
}

goHome(playGame); // callbackとして"ゲームをする"処理を渡す
```

このコードをブラウザで貼り付けて実行すると

```
帰宅した
ゲームする
```

と出力されます。

### 遅延関数をコールバックで表現する

```javascript
const wait = (ms, callback) => {
  setTimeout(() => {
    callback(); // 指定`ms`後にコールバックを実行する
  }, ms);
}
```

パット見良さそうです。それでは、1秒後に"A"、その2秒後に"b"、その3秒後に"c"を出力させる処理を書くと

```javascript
console.log("start");
wait(1000, () => {
  console.log("A");
  wait(2000, () => {
    console.log("B");
    wait(3000, () => {
      console.log("C");
    });
  });
});
```

となります。ピンとくるまでじっくりと観察してみてください。処理がどんどん増えるたびに階層（コードブロックのネスト）が深くなります。
これは流石に可読性が低くなるため、`Promise`や`async/await`が発展していきました（チョット雑）。

長くなってしまったのでここまでにします。

## 参考

* [Promise \- JavaScript \| MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise)
* http://azu.github.io/promises-book/#race-delay-timeout


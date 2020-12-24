---
title: "TypeScriptでErrorを拡張して独自のExceptionを出力する"
description: "独自のエラーの名前を生成する方法を紹介。"
keywords:
  - Exception
  - Error
  - 拡張
  - 独自
createdAt: 2020-12-23 15:00
updatedAt: 2020-12-23 15:00
---

## 実装

```ts
abstract class BaseError extends Error {
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class MyError extends BaseError {}
```

`BaseError`を継承することで量産できる。

## 参考文献

* [What's a good way to extend Error in JavaScript?](https://stackoverflow.com/questions/1382107/whats-a-good-way-to-extend-error-in-javascript)
* [TypeScriptでカスタムエラークラスを作成する方法について](https://teratail.com/questions/114258)
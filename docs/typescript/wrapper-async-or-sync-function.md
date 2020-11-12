---
title: "TypeScriptで非同期/動機関数のwrapper関数を定義する"
description: "同期処理、非同時処理の両方に対応した定義を紹介"
keywords:
  - TypeScript
  - AsyncFunction
  - SyncFunction
  - Wrapper
createdAt: 2020-11-12 10:00
updatedAt: 2020-11-12 10:00
---

## 同期関数のWrapper

```ts
export const wrapSync = <T extends unknown[], K>(fn: (...args: T) => K): ((...args: T) => K) => {
  const wrapFunc = (...args: T): K => {
    const result = fn(...args);
    return result;
  };
  return wrapFunc;
};
```

参考: <https://stackoverflow.com/questions/38598280/is-it-possible-to-wrap-a-function-and-retain-its-types>

## 非同期関数のWrapper

```ts
export type GetPromiseValue<T> = T extends Promise<infer U> ? U : never;

export const wrapAsync = <T extends unknown[], U extends Promise<unknown>, K extends GetPromiseValue<U>>(
  fn: (...args: T) => Promise<K>,
): ((...args: T) => Promise<K>) => {
  const wrapFunc = async (...args: T): Promise<K> => {
    const result = await fn(...args);
    return result;
  };
  return wrapFunc;
};
```

---
title: React.useReducerを利用したアプリケーションをSSRする
description: 'Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons'の対処方法
keywords: react,hooks,useReducer,reducer,server side,rendering,ssr
---

## 修正方法

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

クライアントサイドで利用する場合は、

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

となる。

## エラー

```
Error: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.
```

## 参考文献

* Invalid Hook Call Warning – React<br /><https://reactjs.org/warnings/invalid-hook-call-warning.html#duplicate-react>
* Hooks + multiple instances of React · Issue #13991 · facebook/react<br /><https://github.com/facebook/react/issues/13991>



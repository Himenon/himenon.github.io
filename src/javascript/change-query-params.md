---
title: "JavaScriptでクエリパラメーターを書き換える"
description: "検索フィルターを保存するときクエリパラメーターを利用すると、シェアするときに状態ごと共有できるため再現性を保つことができます。"
keywords: "javascript,browser,history,query params"
createdAt: 2019-06-11 21:58:13
updatedAt: 2019-06-11 21:58:13
---

## 実装コード

コピー&ペーストで動くJavaScriptのコードとしては次のようになります。
DevToolsに貼り付けで動作確認が可能です。

```javascript
const stringify = (targetObject) => {
  return Object.entries(targetObject).reduce((queries, current) => {
    const key = encodeURIComponent(current[0]);
    const value = encodeURIComponent(current[1]);
    return (queries += (queries === "" ? "" : "&") + `${key}=${value}`);
  }, "")
}

const updateQueryParams = (newKey, newValue) => {
  const searchParams = new URLSearchParams(window.location.search);
  const nextQueryParams = {};
  searchParams.forEach((value, key) => {
    nextQueryParams[key] = value;
  });
  nextQueryParams[newKey] = newValue;
  history.replaceState(null, document.title, `?${stringify(nextQueryParams)}`);
}
```

### TypeScriptバージョン

TypeScriptを利用している場合、大抵の場合はwebpackを通していると考えられるので、`stringify`は少し楽をします。

```typescript
import { stringify } from "querystring";

const updateQueryParams = (newKey: string, newValue: string): void => {
  const searchParams = new URLSearchParams(window.location.search);
  const nextQueryParams: { [key: string]: string } = {};
  searchParams.forEach((value, key) => {
    nextQueryParams[key] = value;
  });
  nextQueryParams[newKey] = newValue;
  history.replaceState(null, document.title, `?${stringify(nextQueryParams)}`);
}
```

## 解説

### `URLSearchParams`

`URLSearchParams`を利用してクエリパラメーターを扱いやすくします。
ただしこのAPIはInternet Explorerで未サポートであり、Safariも10以下は未サポートとなっています。
が、そういったブラウザやバージョンは進化の妨げになるので切り捨てましょう。
もし対応が必要なら[URLSearchParams Polyfil](https://www.npmjs.com/package/url-search-params-polyfill)を充てましょう。

```javascript
const searchParams = new URLSearchParams(window.location.search);
```

現在のクエリパラメーターは`forEach`を使うと内部のgeneratorが`value, key`を引数としてループを回します。
現在のクエリパラメーターのペアを維持しつつ、新しいクエリパラメーターに置き換えていきます。

### `history.replaceState`

HTML5から実装されたAPIで、現在の履歴（=URL）を操作できます。
似たAPIとして`pushState`がありますが、これを利用すると履歴が増えていく違いがあります。

## 参考

* [ブラウザの履歴を操作する \- 開発者ガイド \| MDN](https://developer.mozilla.org/ja/docs/Web/Guide/DOM/Manipulating_the_browser_history#replaceState()_%E3%83%A1%E3%82%BD%E3%83%83%E3%83%89)
* [Query String \| Node\.js v12\.4\.0 Documentation](https://nodejs.org/api/querystring.html#querystring_querystring_stringify_obj_sep_eq_options)
* [URLSearchParams \- Web API \| MDN](https://developer.mozilla.org/ja/docs/Web/API/URLSearchParams)

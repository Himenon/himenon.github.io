---
title: "flat is not a functionの原因と対処"
description: "Array#flatが利用できない場合の確認内容と対処方法"
keywords:
  - javascript
  - typescript
  - array
  - flat
  - not function
createdAt: 2020-11-18 10:00:00
updatedAt: 2020-11-18 10:00:00
---

## 確認内容

### Node.jsのバージョンを確認

LTS版だとNode v12以降対応

#### TypeScriptのtargetとNode.jsのバージョンの確認

よくあるのが、ローカルマシンがNode v12で、CIがNode v10のとき、`target`が`esnext`や`es2019`になっている。

* https://github.com/microsoft/TypeScript/wiki/Node-Target-Mapping

### ブラウザのサポート状況の確認

2020-11-18 10:00:00現在はInternet Explorerを除いて、すべてのブラウザで利用可能

* https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/flat

## 対応方法

### 置換

```javascript
const nested = [[0, 1], 2, [3, 4]]
const flat = [].concat(...nested) // => [0, 1, 2, 3, 4] = nested.flat()
```

* https://qiita.com/yarnaimo/items/cd663e46a1676678396d


## 参考

* https://shisama.hatenablog.com/entry/2019/04/24/103000
* https://stackoverflow.com/questions/50993498/flat-is-not-a-function-whats-wrong

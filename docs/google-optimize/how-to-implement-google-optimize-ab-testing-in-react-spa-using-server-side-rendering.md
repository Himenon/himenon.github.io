---
title: Server Side Rendering (SSR)を利用したReactのSPAにおけるGoogle OptimizeのABテストの実装方法
keywords:
  - google optimize
  - React
  - expressjs
  - SSR
  - Server Side Rendering
description: Google OptimizeをReactのServer Side Renderingとともに利用する
---

ここで紹介するのは[サーバーサイド テスト](https://developers.google.com/optimize/devguides/experiments?hl=ja)としてドキュメント化されている内容をReactで書き起こしたものである。

## 事前準備

* Google OptimizeのコンテナID
* Google Analyticsのテスト ID

## 実装

以下の技術スタックで再現する

* express
* React

### 有効期限を指定する

### SSR用のテンプレートを指定する

```html
<script>
  window.dataLayer = window.dataLayer || [];,
  function gtag(){dataLayer.push(arguments);},
  gtag("js", new Date());,
  // Google Optimizeのエクスペリエンスで発行されるGoogle AnalyticsのテストID
  gtag("config", "${meta.analytics.trackingId}", ${configParams});,
</script>
```

### 動作確認する




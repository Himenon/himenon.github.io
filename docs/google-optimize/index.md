---
title: WEBアプリケーションにおけるGoogle Optimizeの導入と実装の手引
keywords:
  - Google Optimize
  - Google Analytics
  - 導入
  - 手順
description: Google OptimizeをWEBアプリケーションで利用する方法
---

## [Google Optimize](https://optimize.google.com/)とは

WEBサイト上で以下の試験と測定が無料で実施できる。[オプティマイズ360](https://marketingplatform.google.com/intl/ja/about/optimize/compare/)の場合は問い合わせとなる。

* [A/B/nテスト](https://support.google.com/optimize/answer/7012154#ab-tests)
* [多変量テスト(MVT)](https://support.google.com/optimize/answer/7012154#multivariate-tests)
* [Redirectテスト](https://support.google.com/optimize/answer/7012154#redirect-tests)
* [カスタマイズ](https://support.google.com/optimize/answer/9112930)
* [ウェブバナー](https://support.google.com/optimize/answer/9823410)

### 概念

Google Optimizeは次のような階層構造がある。

- アカウント
  - コンテナ
    - エクスペリエンス

上位の概念は下位の概念を複数持てる。また、アカウント、コンテナはそれぞれユーザーの権限を管理できる。
ABテストなど、具体的な試験項目はエクスペリエンスに含まれる。

### オプティマイズ スニペットのインストール

Google Optimize指定中にもありますが、以下のscriptタグを埋め込むことで導入完了です。

```js
<script src="https://www.googleoptimize.com/optimize.js?id={CONTAINER_ID}"></script>
```

### Google Analyticsとの連携

エクスペリエンスの結果を集計する方法と保存場所は、Google Analyticsのイベント計測に基づく。
エクスペリエンスにGoogle Analyticsのプロパティとビューを指定すると、Google Analyticsに紐づくテストIDが発行される。
テストIDが発行されると、プロパティが変更できなくなるので注意が必要。

エクスペリエンスの目標はGoogle Analyticsで作成した目標を連携できる他、その場でイベントラベル、カテゴリ、アクションを指定することが可能だ。

## Google Optimizeの使い所

SPAではない、静的なサイトを提供するようなウェブサイトの場合は容易に導入が可能で、Google Optimizeの管理ツール上で作業が完結する。
SPAの場合は後のページで紹介していく。

### 他の記事

測定の準備と効果測定が行える条件

* [A/B/nテストの設計方法とチーム内に展開する方法](./ab-test-design-and-how-to-share-it)
* [Google OptimizeとGoogle Analyticsを利用した効果測定が行える条件](./requirements-for-measuring-effectiveness-with-google-optimize-and-google-analytics)
* [Server Side Rendering (SSR)を利用したReactのSPAにおけるGoogle OptimizeのABテストの実装方法](./how-to-implement-google-optimize-ab-testing-in-react-spa-using-server-side-rendering)


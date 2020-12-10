---
title: SVG ファイルのバンドルによる成果物のサイズ増加
description: SVGを動的にインポートしてバンドル対称から外す方法を紹介
keywords:
  - web
  - react
  - svg
  - 動的ロード
  - dynamic load
---

## まとめ

* SVGを動的にロードしDOMとしてマウントする

## 原因

* `img`、`object`タグでSVGを参照するとShallow DOMとなりJavaScriptやCSSでの操作ができない

## 対策

* SVGを動的にロードしてJavaScript、CSSが適用可能な状態にする
* Reactの場合、[react-inlinesvg](https://github.com/gilbarbara/react-inlinesvg)を利用する

## 対策の動機

* 成果物のファイルサイズを減らす

## 導入方法

* 静的ファイルをホストにアップロードする必要あがある

## 継続方法（運用）

* 初期表示で絶対に必要なSVG以外は非同期読み込みできるようにする

## 対策の問題点

* 同期的に読み込まない場合スケルトンスクリーンを用意する必要がある

## 展望

* 特になし

## 参考資料

* [HTML5でのSVGファイル操作のおさらい](https://ka2.org/controll-svg-files-by-html5/)
* https://github.com/gregberge/svgr
* https://github.com/tanem/svg-injector
* https://github.com/tanem/react-svg
* https://github.com/gilbarbara/react-inlinesvg
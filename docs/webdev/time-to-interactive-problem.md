---
title: Time to Interactiveが長くなる問題と対策
description: JavaScriptの初期化に時間がかかる問題
keywords:
  - 初期化
  - 継続
  - JavaScript
  - time to interactive
  - パフォーマンス
---

## まとめ

* Time to interactive(TTI)の継続的な計測
* 同期的に初期化が必要なものを洗い出す
* 非同期初期化する場合のスケルトンUIの準備

## 原因

* ページの初期化が遅い（重い）と感じてから気がつく。このときにはすでに遅い。
* 初期化の設計がない
* ページを開いた時にAPIとConnectionを確立を待ったり、レスポンス待つ状態がある
* 読み込むコード量が多くJavaScriptのparseに時間がかかる

## 対策

* Time to interactiveまでの時間を継続的に計測し、変更に対してどれくらいの変化量があるか確認できる状態にする
  * [lighthouse-ci](https://github.com/GoogleChrome/lighthouse-ci)などを導入
  * [webpagetest](https://www.webpagetest.org/)の導入
  * [Google Analyticsのカスタム速度](https://developers.google.com/analytics/devguides/collection/gtagjs/user-timings?hl=ja)でクライアントごとの差異を集計する
* [Performance Budget](https://developer.mozilla.org/en-US/docs/Web/Performance/Performance_budgets)を設定する
* JavaScriptの実行時間を短くするために同期的に初期化するものを最小限にする。これを仕様化する。
* JavaScriptのコードの絶対量を減らす
* 非同期的に初期化するコードに分割する
* 初期化完了までのスケルトンUIを用意する
* wasmなどの高速な処理系に変更する
 
## 対策の動機

* 変化に気がつくために人間の理解できる単位（差分）を計測し続ける
* wasmなどに変換することでベースとなる速度を向上する
  * ただし、遅くなる根本的な処理の原因はこれだけで解決しない
* 同期的に初期化するコンテンツを仕様化することでチームの混乱を避ける
* 非同期的に初期化するまでスケルトンUIを表示することでユーザーの混乱を避ける

## 導入方法

* チーム合意
* 仕様書に明記する
* Pull Request単位で、コメントなどにTTIを計測結果を確認できるようにする
* リリース単位で、リリースノートにTTIの計測結果を確認できるようにする
* Data StudioやGoogle Analyticsを利用してモニタリングできる状態にする

## 継続方法（運用）

* CIに計測を任せる
* Botで通知させる
* Performance Budgetが悪化した場合は修正する

## 対策の問題点

* 導入のハードルがやや高い
* 悪くなってからしても手遅れ（しないよりマシ）
* 根本的な原因は設計にあるのであくまでも悪化しないための策である

## 展望

* 具体的な改善方法をまとめる

## 参考資料

* <https://github.com/GoogleChrome/lighthouse-ci>
* <https://www.webpagetest.org>
* <https://developers.google.com/analytics/devguides/collection/gtagjs/user-timings>
* [日経電子版を高速化させるためにフロントエンド側で取り組んだ4つのこと](https://logmi.jp/tech/articles/283703)
* [日経電子版を速くする / nikkei-inside-frontend](https://speakerdeck.com/sisidovski/nikkei-inside-frontend)
* [web vitals](https://web.dev/vitals/)
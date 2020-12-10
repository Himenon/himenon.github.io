---
title: DEMOのシェア
description: 容易にホスティングできない DEMO を開発者らに共有するときに、わざわざクローンさせる手間の問題の対策
keywords:
  - web
  - share
  - inlets
---

## まとめ

* [ngrok](https://ngrok.com/)を利用する
* [inlets](https://github.com/inlets/inlets)を利用する

## 原因

* ローカルにデータがあり、そのデータを使ってDEMOをしたい
* 開発者だけDEMOを共有したい
* Publicに共有できない
* デプロイが大変

## 対策

* 一瞬でもPublicに出てよいのであれば[ngrok](https://ngrok.com/)を使うのが簡単
* Privateな環境でのみ共有したい場合で、簡易のサーバーが用意できるのであれば[inlets](https://github.com/inlets/inlets)を使う

## 対策の動機

* Privateな環境でもngrokのようなProxyサーバーが使いたかった。
* 共有を早くしたい

## 導入方法

* [ローカルホストをインターネット上に外部公開するinletsの紹介](../infrastructure/how-to-use-inlets.md)を御覧ください

## 継続方法（運用）

* inletsをホストするためのサーバーがPrivate環境に必要

## 対策の問題点

* HTTPサーバーをUnSecureな状態で起動するとディレクトリが全部見えてしまうので、Private環境かどうか確実に確認する必要がある

## 展望

特になし

## 参考資料

* [ローカルホストをインターネット上に外部公開するinletsの紹介](../infrastructure/how-to-use-inlets.md)を御覧ください

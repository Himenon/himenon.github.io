---
title: 環境ごとの基底URL定義変更問題
description: 開発環境や本番環境でURLを変更する必要がある問題
---

## まとめ

1. 基底URLはサーバーサイド管理にする
2. 環境変数で設定する内容を切り替えられるようする

もしくは

1. URLを変えずにProxy Serverを設定する

## 原因

* 投入環境が複数ある

## 対策

* [node-config](https://github.com/lorenwest/node-config)を利用してサーバー起動時の環境変数(`ENV`)指定の指定で読み込む環境変数を変化させる
* クライアントサイドのAPIの基底URLを変数化し、サーバーから渡されたURLが入力されるようにする

Advanced

* URLを変更せず、Proxy Serverを通して環境を振り分ける
  * Cookieに環境の情報を載せてProxy Server内でリダイレクト先を確定させる
    * 類似：Session Affinity

## 対策の動機

### `node-config`を利用する場合

* サービスの状態は環境変数で切り分けられるのがベストプラクティスである

### Proxy Serverを利用する場合

* 本番と開発環境でCORSなどの差異がなくなるためかなり精度の高い開発スタイルができる

## 導入方法

### `node-config`の場合

`node-config`を利用する場合、`JSON.stringify`をかけ、もう一度Parseすることで設定のJSON Objectが一気に得られる。

```ts
import * as config from "config";

export interface ApplicationConfig {
  // some config types
}

export const appConfig: ApplicationConfig = JSON.parse(JSON.stringify(config));
```

この際、型定義をあてることになるが、実際に記述されたconfigの値と型定義がずれると実行時エラーにつながる。
それを防ぐために、型定義とconfigの実データが合致していることをテストするValidationを用意する。

* 型定義がもれなくconfigと合致していることを確認するためには 
  1. [typescript-json-schema](https://github.com/YousefED/typescript-json-schema)を利用して型定義をJSON Schemaに変換する。
  2. 1のJSON Schemaを[ajv](https://github.com/ajv-validator/ajv)に食わせ、configのvalidationを行う

一方向だけのValidationだが、もっともシンプルになる

### Proxy Serverを利用する場合

URLのリダイレクト先の解決をProxy Server内で解決させる方法。
Proxy Server内でRequestの発行元とCookie内の環境変数に応じて問い合わせ環境先を切り替える方法。


## 継続方法（運用）

### `node-config`の場合

* CIでconfigと型定義の合致テストを行う

### Proxy Serverの場合

* Proxy Serverを構築することが前提となる

## 対策の問題点

### `node-config`の場合

* アプリケーションが増えるたびに設定ファイルを設置する必要がある
  * 重複した設定が出てくる可能性がある

### Proxy Serverの場合

* サーバーを運用する必要があるので導入コストがやや高い
* 知識が必要

## 展望

Proxy Serverについて

* (工事中）技術資料をまとめる

## 参考資料

* [日経電子版を速くする / nikkei-inside-frontend](https://speakerdeck.com/sisidovski/nikkei-inside-frontend)


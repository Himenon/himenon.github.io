---
title: 求職情報
createdAt: 2020-03-31 15:00:00
updatedAt: 2020-03-31 15:00:00
---

# 就業形態

* 副業としてとして労働可能であること。
* フルリモート可能であること。

## 稼働可能時間

* フルタイム不可
* 応相談

## 給与

* 時給制が望ましい

# 職種

* WEBフロントエンドエンジニア
  * JavaScript/TypeScript/Node.js

## 守備範囲

* Vanilla JS

### Framework

* react(<https://github.com/facebook/react>)
* express(<https://github.com/expressjs/express>)

### ビルド

* webpackのビルド設定
  * https://github.com/Himenon/code-dependency/blob/master/packages/view/scripts/webpack.config.ts
  * https://github.com/Himenon/dependents-view/blob/master/scripts/webpack.config.ts
* CSR(Client Side Rendering)とSSR(Server Side Rendering)の開発環境と本番環境ごとの切り替え戦略の立案

### 設計

* Atomic DesignベースのViewコンポーネント設計
* Presentational ComponentとContainer Componentを利用した設計開発

### 環境構築

* コンテナ（Docker）を用いた開発

### 開発体制

* ドメイン駆動開発
* lernaを用いたモノレポ開発
* jestなどのテストツールを利用したテスト駆動開発
* cypressを用いたe2eテスト

### 開発効率化ツール開発

* 静的サイトジェネレーターの実装
  * 本サイトは自作のジェンレーターを利用して生成されています：<https://github.com/Himenon/custom-site>
  * 開発時のブログ：<https://himenon.github.io/custom-site-blog/>
* 複雑なパッケージ更新順序の整理可視化（案件の依存関係の整理と同等）
  * https://github.com/Himenon/sort-dependency

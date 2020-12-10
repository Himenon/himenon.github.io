---
title: API Client 増加問題の対策
---

## まとめ

1. [OpenAPI(Swagger)](https://swagger.io/)を利用してSchema定義を行う
2. ドキュメントの自動生成をする
3. コードの自動生成をする
4. Mockを自動生成する
5. APIの作成者がSchemaを変更する

## 原因

保守性とスケール性の問題が考えられる。

* 開発者が増えた
* クライアントを作成するルールが決まっていない
* APIを問い合わせ先が増えた
* クライアントを一元管理するリポジトリが設定されていない
* APIのレスポンスを加工する変換層が入っていて保守しづらくなっている

## 対策

OpenAPI（Swagger）を利用してドキュメントとコードの自動生成を行う。
TypeScriptにおける自動生成は次の記事にまとめてあるので参照されたい。

* [OpenAPI(Swagger)を利用してTypeScriptのAPI Clientを自動生成する設計と実装](../openapi/typescript-code-gen)

## 対策の動機

* APIはプロトコルとInterfaceさえ決まっていれば実装方法は規格化できる
* OpenAPIは一般に知られた方法であるためすぐに廃れることはない
* Code Generatorのメンテナンスを1つするだけで複数のAPI Clientを同時にメンテナンスできる

## 導入方法

* チーム合意
* OpenAPIの記法を学習する
* 既存の書き方から移行する手順を共有する

## 継続方法（運用）

* Code Generatorのメンテナンス

## 対策の問題点

* Code Generatorのメンテナンスをするスキルが求められる
* OpenAPIのSchemaの要件を100%満たした状態でCode GenerateできるかどうかはGeneratorの精度次第である

## 展望

* Code Generatorのメンテナンスが容易になる
* Schemaに対して100%の精度でCode Generateできる

## 参考資料

* https://swagger.io/
* https://github.com/Himenon/openapi-typescript-practice

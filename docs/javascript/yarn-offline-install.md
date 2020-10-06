---
title: "yarn installをオフラインで行うときの管理方法"
description: "「There appears to be trouble with your network connection.」というエラーが出た場合、yarnのofflineインストールを利用して回避する方法を紹介します。"
keywords:
  - There appears to be trouble with your network connection
  - yarn
  - offline
  - install
  - オフライン
  - 管理
  - git
createdAt: 2020-08-31 18:00
updatedAt: 2020-08-31 18:00
---

## yarn installしたときに、Networkのエラーが発生し、自分の手の及ぶ解決案がなくなった

ローカルのインストールはうまくいくが、CIなどのサーバー内部でyarn installが次のようにコケる場合がある。
こうなったとき、自分が管理者でない限りNetworkの改善を待つか、サーバーを移転するか、諦めるかしかない。
ただ、どの選択肢もコストが高く付く場合、yarnのoffline installを利用してこの問題を暫定的に回避することができる。

```bash
[1/5] Validating package.json...
[2/5] Resolving packages...
[3/5] Fetching packages...
info There appears to be trouble with your network connection. Retrying...
error An unexpected error occurred: "https://registry.yarnpkg.com/[packge name]/-/[package name]-[version].tgz: unexpected end of file".
```

## `yarn install --offline`のセットアップをする

2016年の記事だが、[Running Yarn offline](https://classic.yarnpkg.com/blog/2016/11/24/offline-mirror/)を参考に勧めていくと良い。

### Step 1. mirrorを保存するする場所を作る（今回はGitのリポジトリ）

リポジトリ名: `yarn-offline-mirror`

### Step 2. offline mirrorを利用するプロジェクトに、`yarn-offline-mirror`をsubmoduleとして追加する

適宜自分のリポジトリに変更してほしい

```bash
git submodule add path/to/your/yarn-offline-mirror.git
```

### Step 3. `.yarnrc`にoffline installを使うように設定を書く

```yarnrc
# packageのmirrorが保存されれているディレクトリを指定
yarn-offline-mirror "./yarn-offline-mirror"
# 参照しなくなったパッケージの自動削除: https://classic.yarnpkg.com/ja/docs/prune-offline-mirror/
yarn-offline-mirror-pruning true
```

### Step 4. `yarn-offline-mirror`にtarを配置する

cacheディレクトリを削除します。

```bash
yarn cache dir
rm -rf [上記の場所]
```

プロジェクトの`node_modules`ディレクトリをすべて削除します。

```bash
rm -rf node_modules packages/**/node_modules
```

この状態で、yarn installをかけます。`--verbose`はお好みでつけてもらって良いですが、正しくオフラインミラーが作成されない場合に、吐き出されたログが参考になります。

```bash
yarn install --verbose >> install.log
```

**想定されるエラー**

Step 4が正しく行えていない場合、以下のエラーに遭遇するでしょう。

```bash
error Can't make a request in offline mode ("https://registry.yarnpkg.com/@babel/code-frame/-/code-frame-7.10.4.tgz")
```

### Step 5. `yarn-offline-mirror`をcommit/pushする

Step 4が完了すると、`yarn-offline-mirror`に大量にtarが吐き出されるので、コミットしておきます。
完了した後、`yarn-offline-mirror`をpushしておきます。

### Step 6. プロジェクト側でsubmoduleをコミット

`yarn-offline-mirror`のコミットハッシュをプロジェクト側でコミットします。

### Step 7. `yarn install`を`yarn install --offline`に変更する

最後は単純で、オフラインミラーを利用したい箇所で、`--offline`オプションを追加します。


## パフォーマンスについて

### オフラインミラーのほうがyarn cacheより早いか？

そうとも限らなさそう？（調査中）

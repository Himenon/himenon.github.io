---
title: "hubコマンドのreleaseを使ってみる"
description: "GitHubにシェルでreleaseするときのコマンドについて調査した"
keywords:
  - git
  - hub
  - release
createdAt: 2019-06-27 01:00:00
updatedAt: 2019-06-27 01:00:00
---

## create

リリースすると、自動的に`tag`もpushされる。

### オプションを指定しないリリース

```bash
hub release create v0.1.0-alpha.1
# エディターが開く
# 保存後リリース完了
# URLが出力される
https://github.com/Himenon/taida-web/releases/tag/v0.1.0-alpha.1
```

### タイトルだけつけてリリース

`-m`オプション

```bash
hub release create -m "hello world" v0.1.0-alpha.2
```

### Assetsをつけてリリース

`-a`オプション。なお、アップロードするとWeb上でしか消せない。

```bash
hub release create -a ./dist.tar.gz v0.1.0-alpha.2
```

### Draftリリース

`-d`オプション

```bash
hub release create -d v0.1.0-alpha.2
```

### リリースノート用のファイルから説明を読み込んでリリース

```bash
hub release create -a ./dist.tar.gz  -F ./RELEASE_NOTE.md  v0.1.0-alpha.5
```

`RELEASE_NOTE.md`の1行目は`-m`と同じ動作をするため、タイトルとなる。
Markdownと思って `# hoge`と書けば、`#`が先頭につくので注意。

編集したい場合は

```bash
hub release edit v0.1.0-alpha.5 -F ./RELEASE_NOTE.md
```

とする。


### プレリリース

`-p`をつける

```
hub release create -p v0.1.0-alpha.5
```

## show

```bash
hub release show v0.1.0-alpha.3
# タイトルと説明が表示
```

## download

### assetsをアップロードした状態で実行する

事前に`dist.tar.gz`をアップロードしておく。

```bash
hub release download v0.1.0-alpha.5
```

実行した場所に`dist.tar.gz`が保存される。

### assetsがアップロードされていない場合

何もダウンロードされない

### assetsが複数アップロードされている場合

`dist1.tar.gz`と`dist2.tar.gz`がリリースされている場合

```bash
hub release download v0.1.0-alpha.5
```

を実行すると、実行した場所に`dist1.tar.gz`と`dist2.tar.gz`が保存される。

## edit

### 説明の修正

```bash
hub release edit v0.1.0-alpha.3
# エディターが起動
```

### assetsを追加で添付する

```bash
hub release edit v0.1.0-alpha.3 -a ./dist.tar.gz
# エディターが起動
```

### 途中からプレリリースにする

```bash
hub release edit v0.1.0-alpha.5 -p
```

### 途中からdraft releaseにする

pre-releaseからも変更可能

```bash
hub release edit v0.1.0-alpha.5 -d
```

## delete

リリースの削除が実行されるが、タグの削除は実行されない

### リリースの削除

```bash
hub release delete v0.1.0-alpha.4
```

タグも消す

```bash
# ローカルのタグ削除
git fetch origin
git tag -d v0.1.0-alpha.4
# リモートのタグ削除
git push origin :v0.1.0-alpha.4
```

## draft / pre-release

`draft -> pre-release -> release`の順番

## 参考

* https://hub.github.com/hub-release.1.html


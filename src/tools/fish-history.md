---
title: "fish shellで過去に入力した履歴を削除する"
description: "平文でパスワードを入力した場合など、履歴を消したい場合に利用します。"
keywords: "fish,shell,history,delete,履歴,削除"
createdAt: 2019-06-07 00:33:20
updatedAt: 2019-06-07 00:33:20
---

## 特定の履歴を検索して削除する

fish shellを利用している場合、`history`コマンドが利用できます。
これを利用することで、特定の履歴だけ削除できます。

`password`という文字列を含むコマンドを探索します。

```bash
history search --contains "password"
```

`password`という文字列を含む履歴を削除します。

```bash
history delete --contains "password"
```

## 全履歴削除する

```bash
history clear
```

## 履歴ファイル

デフォルトは以下の場所にあります。

```bash
~/.local/share/fish/fish_history
```

これを消すとこれまでの補完が効かなくなります。
言い換えれば、このファイルを変更すれば独自の補完を先に作ることが可能です。

## 参考

* https://fishshell.com/docs/current/commands.html#history

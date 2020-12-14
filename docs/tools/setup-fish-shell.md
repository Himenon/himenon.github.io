---
title: "fish shellで過去に入力した履歴を削除する"
description: "平文でパスワードを入力した場合など、履歴を消したい場合に利用します。"
keywords:
  - fish
  - shell
  - setup
createdAt: 2020-12-14 15:30:00
updatedAt: 2020-12-14 15:30:00
---

## Version情報

```
fish -v
fish, version 3.1.2
```

## Install

* https://github.com/fish-shell/fish-shell

```bash
# /etc/shellsに`which fish`のPATHを追加
sudo vim /etc/shells
chsh -s `which fish`
```

## `completions`（補完）のインストール

```bash
git clone https://github.com/fish-shell/fish-shell.git --depth 1
mv fish-shell/share/completions/ ~/.config/
```

## Plugin Managerのインストール

```bash
curl -L http://get.oh-my.fish | fish

https://raw.githubusercontent.com/oh-my-fish/oh-my-fish/master/bin/install
```

* https://github.com/oh-my-fish/plugin-peco
* https://github.com/jethrokuan/z

### Theme

* https://github.com/oh-my-fish/oh-my-fish/blob/master/docs/Themes.md#bobthefish

## Reference

* [詳解 fishでモダンなシェル環境の構築(fish,tmux,powerline,peco,z,ghq,dracula)](https://qiita.com/susieyy/items/ac2133e249f252dc9a34)
* [Fishの色設定をターミナルだけで完結する - Qiita](https://qiita.com/Dooteeen/items/e098755afc4acd25d81f)
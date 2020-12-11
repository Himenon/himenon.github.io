---
title: "ローカルのgitに登録しているショートカット"
description: "git configに書いておくもの"
keywords:
  - git
  - shortcut
createdAt: 2018-04-12 06:04:47
updatedAt: 2019-05-21 11:22:01
---

# Git Tips


```bash
git: 'credential-manager' is not a git command. See 'git --help'.
```

- <https://stackoverflow.com/questions/11693074/git-credential-cache-is-not-a-git-command>


## Pull Request中のブランチをローカルに持ってくる

たとえば、PRのURLが<https://github.com/Himenon/himenon.github.io/pull/2>で、ローカルのremoteの設定が

```bash
$ git remote -v
origin  git@github.com:Himenon/himenon.github.io.git (fetch)
origin  git@github.com:Himenon/himenon.github.io.git (push)
```

のとき、新しくローカルのブランチ`pr-2`にPRを持ってくるときのコマンドは

```bash
git fetch origin pull/2/head:pr-2
```

となる。

Aliasを貼るならば、Clone Pull Requestの頭文字を取ってきて、`cpr`とします。Pull RequestをClonseするときは、レビューするときなど関心が非常に高いので、チェックアウトも自動的に済ませておくと作業効率があります。

```bash
cpr = "!f() { git fetch $1 pull/$2/head:pr-$2; git checkout pr-$2; };f"
```

※ これは教えてもらいました。

## Alias

```bash
[alias]
	st = status
	bl = blame
	cm = commit
	ch = checkout
	br = branch
	cpr = "!f() { git fetch $1 pull/$2/head:pr-$2; git checkout pr-$2; };f"
[filter "lfs"]
	clean = git-lfs clean -- %f
	smudge = git-lfs smudge -- %f
	process = git-lfs filter-process
	required = true
[credential]
	helper = manager
```

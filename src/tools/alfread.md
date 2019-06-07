---
title: "AlfredのSnippetsに登録しておく内容"
description: "詠唱不要で多くの技を繰り出す虎の巻"
keywords: "alfred,shortcut,snippets"
createdAt: 2019-06-07 00:11:00
updatedAt: 2019-06-07 00:11:00
---

## Alfred

キーボードから手を離さなくて済む最強アプリケーション。
Windowsにこれがないから移行できないと言っても過言ではないもの。

* https://www.alfredapp.com/

### git系

#### git/local

リポジトリ単位コミットするでユーザー名とメールアドレスを変更したい場合に利用。

```bash
# Change User Name
git config --local user.name [user name]
# Change User Email
git config --local user.email [mail address]
```

#### git/branches

ブランチ名を`ls`感覚で取得するためのワンライナー

```bash
git branch -v | awk '{print $1}'
```

### ffmpeg

#### ffmpeg/gif

クリップボードにコピーしたファイルを対象にgif変換する。
Pull Requestのコメント欄にgifを貼るときに便利。

```bash
ffmpeg -i {clipboard} -vf scale=320:-1 {clipboard}.gif
```

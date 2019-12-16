---
title: "あるディレクトリ内にある拡張子を数え上げる"
---

## 得手のディレクトリ内にあるファイルの拡張子を取得する

`src`ディレクトリを対象に行う

```bash
# fish shell
for i in (find src -type f); echo $i | sed 's/^.*\.\([^\.]*\)$/\1/' >> src.ext.txt ; end
cat src.ext.txt | sort | uniq
# bash
```

### 解説

`src`ディレクトリ内にある「ファイル」を一覧にする

```bash
find src -type f
```

## 参考

* https://qiita.com/mriho/items/b30b3a33e8d2e25e94a8
* https://qiita.com/yuba/items/489fadb350246b5c94e7
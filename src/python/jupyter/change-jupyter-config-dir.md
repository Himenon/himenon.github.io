---
title: "jupyter_notebook_config.pyの読み込み先を変更する"
description: "jupyter notebookの設定"
keywords: "python,jupyter,notebook"
createdAt: 2018-03-26 01:22:30
updatedAt: 2019-05-21 11:22:01
---

# jupyter_notebook_config.pyの読み込み先を変更する

環境変数の`JUPYTER_CONFIG_DIR`に参照先のディレクトリパスを記述すればよい。

```
JUPYTER_CONFIG_DIR=/config
```

Dockerで立ち上げる時に、`~/home`を探すのは面倒なので。

## Reference

- http://jupyter.readthedocs.io/en/latest/projects/jupyter-directories.html#envvar-JUPYTER_CONFIG_DIR

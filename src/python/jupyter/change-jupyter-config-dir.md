# jupyter_notebook_config.pyの読み込み先を変更する

環境変数の`JUPYTER_CONFIG_DIR`に参照先のディレクトリパスを記述すればよい。

```
JUPYTER_CONFIG_DIR=/config
```

Dockerで立ち上げる時に、`~/home`を探すのは面倒なので。

## Reference

- http://jupyter.readthedocs.io/en/latest/projects/jupyter-directories.html#envvar-JUPYTER_CONFIG_DIR

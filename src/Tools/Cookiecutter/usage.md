# 自作のファイルテンプレート(雛形)を生成するCookiecutterの使い方

開発に限らず、PC作業をしているとさまざまな場面でファイルやディレクトリツリーを構築します。
同じ作業を繰り返すのはDRYの精神に反しますので、これを防ぎましょう。

そんなツールの1つにcookiecutterというオープンソースがあります。

* [audreyr/cookiecutter](https://github.com/audreyr/cookiecutter)

概要は次の図のようなイメージ。

## 使い方

### インタラクティブに使う

もっともシンプルなコマンドは、引数にテンプレートのURLもしくは相対パスを指定することです。

Pythonのパッケージを作る際のボイラープレートで試してみます([audreyr/cookiecutter-pypackage](https://github.com/audreyr/cookiecutter-pypackage))。

```bash
$ cookiecutter https://github.com/audreyr/cookiecutter-pypackage.git
```

![CookieCutterを実行したときの画像](cookiecutter-sample.png)

対話式に聞かれた後に、ファイルツリーが生成されます。

### Help

`cookiecutter -h` でヘルプを表示しておきます。

```
Usage: cookiecutter [OPTIONS] TEMPLATE [EXTRA_CONTEXT]...

  Create a project from a Cookiecutter project template (TEMPLATE).

  Cookiecutter is free and open source software, developed and managed by
  volunteers. If you would like to help out or fund the project, please get
  in touch at https://github.com/audreyr/cookiecutter.

Options:
  -V, --version              Show the version and exit.
  --no-input                 Do not prompt for parameters and only use
                             cookiecutter.json file content
  -c, --checkout TEXT        branch, tag or commit to checkout after git clone
  -v, --verbose              Print debug information
  --replay                   Do not prompt for parameters and only use
                             information entered previously
  -f, --overwrite-if-exists  Overwrite the contents of the output directory if
                             it already exists
  -o, --output-dir PATH      Where to output the generated project dir into
  --config-file PATH         User configuration file
  --default-config           Do not load a config file. Use the defaults
                             instead
  --debug-file PATH          File to be used as a stream for DEBUG logging
  -h, --help                 Show this message and exit.

```

## 自分のテンプレートを作る

とてもシンプルです。
CookieCutterは内部のテンプレートエンジンに[Jinja2](http://jinja.pocoo.org/docs/2.10/)を採用しており、
Jinja2の記法が利用できます。

### 速攻サンプル

最もシンプルなテンプレートを作成してみます。

```
simple-template/
├── cookiecutter.json
└── {{cookiecutter.project_name}} // Directory
```

`cookiecutter.json`の中身は次のようにします。

```
{
	"project_name": "hello-world"
}
```

これ`simple-template`をテンプレートとして利用してみます。

```bash
$ cookiecutter ./simple-template
```

これでテンプレートとして利用できます。

## 公開する





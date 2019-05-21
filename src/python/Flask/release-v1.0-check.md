---
title: Flaskのv1.0のリリースで変わったこと
---

# Flaskのv1.0のリリースで変わったこと

2018/4/26にFlaskがv1.0になりましたね。
いくつかパッチがあたって、現在はマイナーバージョンがちょっと上がっていますが。

<https://www.palletsprojects.com/blog/flask-1-0-released/>

リリース内容を確認しておきます。

- Pythonの下位互換性の打ち切り
    - Python 2.6, 3.3の削除
- python-dotenvがインストールされている場合、`.flaskenv`か`.env`
- 開発サーバーはデフォルトでmulti-threadedでで並列にリクエストを処理する
- `flask.ext`は以前に非推奨になったが、完全に削除された
- `request.form`の不足したkeyにアクセスすると、デバッグモードの時にエラーメッセージが表示され、一般的な開発者に対して非常にの混乱の元となる。
- `app.logger`の挙動は大幅に簡素化され、カスタマイズするのが楽になった。loggerは常に`flask.app`に名付けられ、登録されていなければ、ハンドラーが追加され、
既存のHandlerは決して削除されない。
- `test_client`はPOSTされるJSONデータのために、`json`引数を手にいれました。そして、`Response`オブジェクトは`get_json`メソッドが実装され、
これは、テストのときに、データをJSONとしてデコードできる。
- 新しい`test_cli_runner`はCLIコマンドアプリをテストするために追加されました。
- 多くのドキュメントの章は明快さと関連性を高めるために書き直されました。
- チュートリアルと対応する例が書き直されました。

## JSONセキュリティの修正

以前、FlaskはリクエストのContent-Typeを利用して、受信したJSON bytesをデコードしていました。
だけれども、JSONはUTF-8としてのみエンコードする必要があるが、Flaskはもっと甘かった。
しかしながら、Pythonは非テキスト関連のエンコーディングが含まれるため、リクエストによって、予期せぬメモリーの利用が
エンコーディングに関連して、結果に含まれることがあった。

現在、Flaskは、サポートされているUTFエンコーディングの1つとして受信したJSONデータのエンコーディングを検出し、
requestからの任意のエンコーディングを許可しません。


## 検証用コード

`Pipfile`

```
[[source]]
url = "https://pypi.org/simple"
verify_ssl = true
name = "pypi"

[scripts]
serve = "python app.py"

[packages]
flask = "==1.0.2"
python-dotenv = "*"

[dev-packages]

[requires]
python_version = "3.6"

```
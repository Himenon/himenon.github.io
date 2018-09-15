# FlaskのTips

## 大体初期設定でできること

```python
Flask(import_name, static_path=None, static_url_path=None, static_folder='static', template_folder='templates', instance_path=None, instance_relative_config=False, root_path=None)
```

### 設定ファイルなどの静的ファイルを参照するときにどうするか。

- [How to serve static files in Flask](https://stackoverflow.com/questions/20646822/how-to-serve-static-files-in-flask)

`setup.py`のある位置がルートディレクトリになっています。

### Tempalteファイルのパスを変更したいんだけど

- [How to reference a html template from a different directory in python flask](https://stackoverflow.com/questions/31002890/how-to-reference-a-html-template-from-a-different-directory-in-python-flask)

`template_folder`をいじれば良いです。

## URLパラメータを取得する

- [Python Flask how to get parameters from a URL?](https://stackoverflow.com/questions/24892035/python-flask-how-to-get-parameters-from-a-url)

```
code = request.args.get('code')
```

# OAuth系

## Google OAuthを使ったログインを実装する

Flaskを使ったサンプル

- <https://github.com/googleplus/gplus-quickstart-python>


Flowを使ったAccess Tokenの取得

- <https://developers.google.com/api-client-library/python/guide/aaa_oauth#AccessTokenCredentials>


## データベースにアレを保存するときはどうする？

- <https://stackoverflow.com/questions/17356170/storing-client-oauth2-credentials-in-google-app-engine-datastore>

## ログインページの作り方(Twitter, Facebook)

- [OAuth Authentication with Flask](https://blog.miguelgrinberg.com/post/oauth-authentication-with-flask)
- [Python Flaskでつくる LDAPログインページ](https://www.osstech.co.jp/~hamano/posts/flask-login-ldap/)


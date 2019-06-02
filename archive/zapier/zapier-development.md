---
title: "Zapierで利用可能なアプリをを時前で作成する"
createdAt: 2018-04-08 05:47:15
updatedAt: 2019-05-26 11:09:53
---

# Zapierで利用可能なアプリをを時前で作成する

<p id="created_at">作成日: <time dateTime="2018-04-08T16:00">2018/04/08</time></p>

Zapierは、様々なアプリケーションのイベントをトリガーとして、
同じ、もしくは他のアプリケーションのアクションを実行するハブ的なウェブサービスだ。

類似のサービスとしてIFTTTが存在する。

このZapierに載せるアプリをどうやって作れば良いのかまとめた。


## チュートリアル

作成するに当たり、チュートリアルが存在する。まずはこれを見ておく。

- [Zapier | The easiest way to automate your work | Zapier](https://zapier.com/developer/start/introduction)

Githubのアプリを自前で作成する方法が書いてある。

次に最も見るであろうのドキュメントやサンプルは以下。

- <https://github.com/zapier/zapier-platform-cli>
  - <https://www.npmjs.com/package/zapier-platform-cli> npmでも同じ
- <https://zapier.github.io/zapier-platform-cli/cli.html>
- <https://github.com/zapier/zapier-platform-schema/blob/master/docs/build/schema.md>
- <https://github.com/zapier/zapier-platform-cli/wiki/Example-Apps#rest-hooks-example-app>

ここに情報がほとんど載っているので、困ったときは立ち返ると良い。

## 知っておくと便利なこと

- Zapierの挙動はnode v6.10.3で検証すること
- async/awaitを利用したい場合は[`babel-polyfill`](https://babeljs.io/docs/usage/polyfill/)を突っ込む。
- [ciaranj/node-oauth](https://github.com/ciaranj/node-oauth)をasync/awaitもしくはPromiseとして利用したい場合、[`promisify`](https://nodejs.org/dist/latest-v8.x/docs/api/util.html#util_util_promisify_original)を利用する。
- `promisify`はNode v8以降のライブラリなので、それ以前のNodeで利用するときは`util.promisify`パッケージをインストールする
- `z`オブジェクトと`bundle`オブジェクトについてソースコードを呼んでおく
- 非同期実行可能な場所が`middleware`のみであることを意識しておく

細く見ていく

### node-oauthの話

Twitterでは`oauth_token`最初に取りに行き、`authorize`に行く際のクエリパラメータとして利用する。

```
https://api.twitter.com/oauth/authorize?oauth_token=[OAUTH_TOKEN]
```

`node-oauth`が提供しているメソッドは`callback`形式のメソッドであるため、
`promisify`を利用してPromise化しておく。

この際、`getOAuthRequestToken`はインスタンス化されたオブジェクトに対して実行されるため、
内部的に`this`が呼ばれている。そのため、オーバーライドした形で利用する。

```js
import OAuth from 'oauth';
import util from 'util';

require('util.promisify').shim();

export const getOAuthToken = async () => {
    const oa = new OAuth.OAuth(
        'https://api.twitter.com/oauth/request_token',
        'https://api.twitter.com/oauth/access_token',
        process.env.CONSUMER_KEY,
        process.env.CONSUMER_SECRET,
        '1.0A',
        null,
        'HMAC-SHA1'
    );
    oa.getOAuthRequestToken = util.promisify(oa.getOAuthRequestToken); // override
    return await oa.getOAuthRequestToken();
};
```


## `z`と`bundle`

ソースコードで、下記のものを熟読しておくことをオススメ。

- [src/create-command-handler.js](https://github.com/zapier/zapier-platform-core/blob/master/src/create-command-handler.js)
  - Entrypoint
  - app, input (後にbundleになる)の注入
- [src/execute.js](https://github.com/zapier/zapier-platform-core/blob/master/src/execute.js)
  - 各メソッドが実行される
- [src/tools/promise.js](https://github.com/zapier/zapier-platform-core/blob/master/src/tools/promise.js)
  - 同期処理に落とし込んでいる
- [src/execute-request.js](https://github.com/zapier/zapier-platform-core/blob/master/src/execute-request.js)
  - Request系の同期処理
- [src/app-middlewres/before/z-object.js](https://github.com/zapier/zapier-platform-core/blob/master/src/app-middlewares/before/z-object.js)

`bundle`の値を確認する時、

1. [Zapier Developer](https://zapier.com/developer)に行く
1. アプリを選択
1. MONITORINGを選択
1. Chartが表示されているので、該当箇所を選択
1. `BUNDLE INFORMATION` という項目で確認できる。

Errorを含んでいる場合は見れないので、注意。
`authorizeUrl`などでコケると見れる。具体的には次のようなJSONになっている

```json
{
  "authData": {},
  "auth_data": {},
  "auth_fields": {},
  "environment": {},
  "inputData": {
    "_zapier_account_id": "1234567",
    "authorization_url": "$func$2$f$",
    "auto_refresh": false,
    "client_id": "None",
    "client_secret": "None",
    "redirect_uri": "https://zapier.com/dashboard/auth/oauth/return/xxxxxxxxxxx/",
    "response_type": "code",
    "scope": null,
    "state": "11111111111111.22222222222"
  },
  "meta": {
    "first_poll": false,
    "frontend": false,
    "hydrate": true,
    "limit": -1,
    "page": 0,
    "prefill": false,
    "standard_poll": true,
    "test_poll": false
  }
}
```

## authentication

[/AuthenticationSchema](https://github.com/zapier/zapier-platform-schema/blob/master/docs/build/schema.md#authenticationschema)

### oauth2Config

[/AuthenticationOAuth2ConfigSchema](https://github.com/zapier/zapier-platform-schema/blob/master/docs/build/schema.md#authenticationoauth2configschema)


OAuth2に対応したAPIを提供しているウェブサービス(GithubやFacebook)であれば、
Zapierが提供されているものを利用するとよい。

`authorizeUrl`で認証画面を通過した後、`getAccessToken`が実行される。


```js
const oauth2Config = {
  authorizeUrl,       // 必須 Step 1
  getAccessToken,     // 必須 Step 2
  test,               // 必須
  refreshAccessToken, // 任意 401が返ってきた時に発火
  scope,              // 任意 
  autoRefresh,        // 任意 bool値
}
```

```js
const getAccessToken= {
  method: 'POST',
  url: 'https://{{bundle.inputData.subdomain}}.example.com/api/v2/oauth2/token',
  body: {
    code: '{{bundle.inputData.code}}',
    client_id: '{{process.env.CLIENT_ID}}',
    client_secret: '{{process.env.CLIENT_SECRET}}',
    redirect_uri: '{{bundle.inputData.redirect_uri}}',
    grant_type: 'authorization_code'
  },
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}
```

### fields

Basic認証やDigest認証を行う時に、ユーザー名やパスワードを入力するときの、
入力画面を作成することが可能。

動的に、ドロップダウンの項目を追加することも可能。


## beforeRequest, afterResponse

該当ソースコード: <https://github.com/zapier/zapier-platform-core/tree/master/src/http-middlewares>


---
title: "複数のホストをoauth2_proxyを用いてOAuth認証してリバースプロキシする"
createdAt: 2018-02-19 01:22:10
updatedAt: 2019-05-21 11:22:01
---

<p id="created_at">作成日: <time dateTime="2018-02-19T01:00">2018/02/19</time></p>

{!infrastructure/images/reverse-proxy-architecture-including-oauth2_proxy.svg!}

## これはなに？

[oatuh2_proxy](https://github.com/bitly/oauth2_proxy)を複数のリバースプロキシ先に対応させた、
サンプル([Himenon/oauth2_proxy](https://github.com/Himenon/oauth2_proxy))を作成した紹介です。

（スターください。PRも歓迎です）

### 何に使える？

例えば、

- 社内ドキュメントをホスティングした時に、OAuth2で保護したい。
- Globalにテスト用のアプリケーションを作って内部のみに公開したいが、ip制限だけでなく、OAuthをかけたい

などなど、対外向けのサービスで使うというより、内部向けのアプリや、情報を保護するための用途で使えます。

## ことの発端

(読み飛ばして大丈夫です。)

[Cookpad Tech Conf 2018](https://techconf.cookpad.com/2018/)で**Challenges for Global Service from a Perspective of SRE**の発表で、
認証周りの業務が増えてがつらく、それをnginx側でoauthをproxyさせること脱Basic認証をし、管理するアプリケーションが増えても柔軟に対応できるようにした、
と聞いた際に自分でもやってみようと思ったことが発端です。

Coockpadさんの記事もありますので、これ以上はそちらを読んで下さい。

- [2015-10-16 nginx で omniauth を利用してアクセス制御を行う](http://techlife.cookpad.com/entry/2015/10/16/080000)
- [sorah/nginx_omniauth_adapter](https://github.com/sorah/nginx_omniauth_adapter)


僕自身もBasic認証つれぇ、モダンにやりたい、って思ってたのでちょうどいいと思ってたところだったので、
その辺のツール落ちていないか、というところから探してみました。

そして、出会ったのが[oatuh2_proxy](https://github.com/bitly/oauth2_proxy)。
色んな人がメンテナスしている + スター数が3k超えってところで使ってみようと思いました。

日本語の記事を調べたところ、割と最近(今が2018/2なので)の記事も発見できました。

- 2017/12/14 [手っ取り早くウェブアプリケーションにOAuth2認証を導入する](http://moznion.hatenadiary.com/entry/2017/12/14/230945)
- 2017/04/05 [oauth2_proxyでRundeckにGitHub認証でログインする](https://qiita.com/minamijoyo/items/52041ff8628263355810)
- 2016/01/18 [oauth2_proxyとNginxのauth_requestを組み合わせると便利](http://lamanotrama.hateblo.jp/entry/2016/01/18/142116)

他にも次のコードも発見しました。

- [a5huynh/oauth2_proxy](https://github.com/a5huynh/oauth2_proxy)

ただ、欲しかった情報が

- わかりやすいサンプルコード
- Dockerを使っている
- 複数のホストに対してOAuthが対応している

だったので、どれも満たしていなかったので自分で作ることにしました。

## 実装内容

難しいことはしてませんが、以下の2点が他と異なるので、ここで取り上げます。

- redirect_urls
- Cookie対策

また、以下では冒頭のアーキテクチャ図にある名称で説明します。

### redirect_urls

Providerのredirect_url**s**を複数指定すること。
コード風にかくと、

```
redirect_urls = [
    'server-a.example.com',
    'server-b.example.com'
]
```

と言った具合です。

!!! note
    Providerによっては複数の入力欄があったり、カンマ区切りで入力したりさまざまなので、
    そこは個々の入力方法を確認して下さい。

### Cookie対策

実行ファイル、`google_auth_proxy`がとる引数で`--cookie-domain`があるのですが([この部分](https://github.com/Himenon/oauth2_proxy/blob/master/oauth2_proxy/run.sh#L12))、
ここをサブドメインを含めずに書きます。
つまり、`--cookie-domain=example.com`とし、server-aでもserver-bでも同じCookieを利用するようにします。

このようにすることで、CSRFがコケることなく、複数のサブドメインで認証できます。

!!! warning
    無論、この手は普通やらないと思いますし、何が起こるかわからないので、
    実際のサービスとしては使ってはいけません。

    これは、内部向けだったり、用途が限られた空間内でBasic認証などによる不必要な認証管理をするための1手段としては有効なので、
    このProxyを噛ませるアプリケーションの公開範囲をキチンと管理できた上で利用するならば有効な手だと思います。

### 課題(TODO)

Cookie Domainを明確に単一にすることが現状の課題です。
これは2つのことを解決します。

1つ目は先に上げたCSRFの問題です。
例えば`proxy.example.com`のように、現状の`*.example.com`よりも狭い範囲でCookieが利用されている方が
サブドメインで分けられた、他のアプリケーションが不必要なCookieをロードする必要がなくなります。

2つ目は、redirect_urlsの問題です。
一見、問題がなささそうに見えますがそうではありません。
redirect_urlsはどこに・誰が登録しますか？
リバースプロキシする対象が増減たびに、Providerのredirect_urlsを更新する必要があります。

これはオペレーションミスの可能性を含んでいますし、
実装者はnginxの調整以外に、Providerの管理者に更新依頼をするというプロセスが増えてしまいます。

#### 理想

理想のフローは次のような手順です(ざっくり)

<div className="mermaid">
sequenceDiagram
  Browser->>Nginx: request(a.example.com)
  Nginx->>oauth2_proxy: proxy(proxy.example.com/oauth2/auth)
  oauth2_proxy->>Provider: request
  Provider->>Nginx: response(redirect: proxy.example.com)
  Nginx->>Backend: Reverse Proxy (a.example.com)
</div>

これが解決できたらまた更新しようと思います。

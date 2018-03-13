# VuejsのSSR(Server Side Rendering)のページ・部分キャッシュは何で実装できるか

<p id="created_at">作成日: <time datetime="2018-03-14T02:20">2018/03/14</time></p>

vuejsで遊んでいてふと疑問に思ったので調べてみた。

疑問の発端は、


> 非同期処理を行ってレンダリングしている部分を
> ユーザー側に感知されないために、SSRを導入する。
> そのとき、ユーザー固有のコンテンツとや、全ユーザー対象のコンテンツが混じっている時、
> どうやってキャッシュするのだろうか


SSRするのはいいのだが、リソースはエコに使いたいので、
部分的なキャッシュはないものかと思って探したら速攻で出てきた。

- Caching <https://ssr.vuejs.org/en/caching.html>
- [(日本語訳)](https://github.com/vuejs/vue-ssr-docs/blob/master/ja/caching.md)

enドキュメントからトピックだけ抜き出すと、以下の2つが今回の疑問に対する答え。

- Page-level Caching
- Component-level Caching

ページ全体、コンポーネント単位でキャッシングできるようだ。

Page-levelのキャッシュは2通り紹介されていて、1つはNginxの[Microcaching](https://www.nginx.com/blog/benefits-of-microcaching-nginx/)を使う方法。
もう一つは、NodeJS側で実装する方法

Component-levelだと、キャッシュオブジェクトに対してインターフェースを実装することで実現できるとのこと。
例として[isaacs/node-lru-cache](https://github.com/isaacs/node-lru-cache)が挙げられている。



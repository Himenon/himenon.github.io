# nodeのrequestライブラリの`json`オプションの取り扱いについて

## TL;DR

つべこべいわず、該当コード見たほうが早い

- <https://github.com/request/request/blob/master/request.js#L1278-L1313>

コードを読んでもわからなかったら続きをどうぞ。

## 簡単に調べてみた

知人が、nodeのHTTP Clientである[reuqest](https://github.com/request/request)をPOST時に利用したときに、
`json: true`のoptionがあるけど、`body`がjsonかされないっていう話を聞いたので、調べてみた。

- [https://stackoverflow.com/questions/27190447/pass-json-to-http-post-request](https://stackoverflow.com/questions/27190447/pass-json-to-http-post-request)
- [send Content-Type: application/json post with node.js](https://stackoverflow.com/questions/8675688/send-content-type-application-json-post-with-node-js)

どうやら、optionの`json`にBooleanではなく、直接Objectを渡したほうが早い。

## 実装コードから調べてみた

### オプションの`json`をどうのように取り扱っているか

冒頭でも紹介した<https://github.com/request/request/blob/master/request.js#L1278-L1313>である。

いろいろぶっ飛ばして、

```js
Request.prototype.json = function (val) {
  var self = this

  // 中略

  self._json = true
  if (typeof val === 'boolean') {
    // jsonオプションの値がbooleanの場合
    if (self.body !== undefined) {
      // bodyがundefinedでなけれあば
      if (!/^application\/x-www-form-urlencoded\b/.test(self.getHeader('content-type'))) {
        // content-typeが application/x-www-form-urlencoded とマッチした倍、
        // https://github.com/request/request/blob/master/lib/helpers.js#L20-L28
        self.body = safeStringify(self.body, self._jsonReplacer)
      } else {
        // rfc3986でエンコード
        // https://github.com/request/request/blob/master/lib/querystring.js#L42-L46
        self.body = self._qs.rfc3986(self.body)
      }
      if (!self.hasHeader('content-type')) {
        // content-typeが指定されていなければ、application/jsonに指定
        self.setHeader('content-type', 'application/json')
      }
    }
} else {
    // jsonがbooleanでないとき 
    // bodyに入れ直していますね。
    self.body = safeStringify(val, self._jsonReplacer)
    if (!self.hasHeader('content-type')) {
      // content-typeが指定されていなければ、application/jsonに指定
      self.setHeader('content-type', 'application/json')
    }
  }

  return self
}
```

これで謎は解けました。
`rfc3986`が出てきたのですが、別の章で紹介。

### もっと詳しく見てみる

渋川さんの記事が大変参考になります。
読んでいた当時はよくわからなかったのですが、今となっては噛み締めて読めますね。。。
RFC大事。

- [encodeURIComponentが世界基準だと誤解してた話](https://qiita.com/shibukawa/items/c0730092371c0e243f62)
- [encodeURIComponent() - MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent)
- [encodeURIComponent() - demo](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent)

RFC3986に厳格に対応したライブラリ

- [ljharb/qs](https://github.com/ljharb/qs)
    - [Query String - Node.js v9.11.1 Documentation](https://nodejs.org/api/querystring.html)
    - requests内部で利用されていますね

RFC3986関連

- [RFC3986 日本語訳の複製](https://triple-underscore.github.io/RFC3986-ja.html)
- [URIに使ってよい文字の話 - RFC2396 と RFC3986](http://freak-da.hatenablog.com/entry/20080321/p1)
- [RFC3986を読みながらURLエンコードについて考えた](http://info-i.net/rfc3986-url)

# Module jsで非同期関数を実行する

TwitterのOAuth認証を試したい時などでこの欲求は生じる

```js
// twitter-oauth.mjs
import OAuth from 'oauth';
import util from 'util';

(async () => {
  const oa = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    process.env.CONSUMER_KEY,
    process.env.CONSUMER_SECRET,
    '1.0A',
    null,
    'HMAC-SHA1'
  );
  oa.getOAuthRequestToken = util.promisify(oa.getOAuthRequestToken)
  const oauth_token = await oa.getOAuthRequestToken();
  const url = `https://api.twitter.com/oauth/authorize?oauth_token=${oauth_token}`;
  console.log(url);
})();
```

```bash
$ node --experimental-modules twitter-oauth.mjs
```

即時関数でwrapしで実行するのがミソ。


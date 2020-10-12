---
title: WEBアプリケーションにおけるGoogle Analyticsの導入と実装の手引
keywords:
  - Google Analytics
  - 実装
  - analytics.js
  - gtag.js
  - TypeScript
  - ページビュー
  - pageview
  - 仮想ページビュー
description: Google OptimizeをWEBアプリケーションで利用する方法
---



## WEB アプリケーションへの導入方法

`analytics.js`と`gtag.js`を利用する 2 通りの方法があります。
(2020/10/08)現在では、デフォルトで`gtag.js`を利用することが進められています。

analytics.js を利用していて、gtag.js に移行したい場合は[analytics.js から gtag.js に移行する](https://developers.google.com/analytics/devguides/collection/gtagjs/migration?hl=ja)に移行方法があります。

また、その他の計測方法は[ウェブページの測定オプション](https://support.google.com/analytics/answer/7538414)に記載があります。

- [サイトに analytics.js を追加する](https://developers.google.com/analytics/devguides/collection/analyticsjs?hl=ja)
- [サイトに gtag.js を追加する](https://developers.google.com/analytics/devguides/collection/gtagjs?hl=ja)

## TypeScript の型定義

型定義は`gtag.js`のほうが直感的で利便性が良いです。

### gtag.js

```sh
yarn add -D @types/gtag.js
```

- https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/gtag.js/index.d.ts

### analytics.js

```sh
yarn add -D @types/google.analytics
```

- https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/google.analytics/index.d.ts

## 計測する

### イベントを送信する

#### gtag.js

```js
const eventAction = "";
const eventCategory = "";
const eventLabel = "";
const eventValue = "";

// gtag.js
gtag("event", eventAction, {
  event_category: eventCategory,
  event_label: eventLabel,
  value: eventValue,
});

// analytics.js
ga("send", "event", eventCategory, eventAction, eventLabel, eventValue);
```

- [gtag.js - イベント測定](https://developers.google.com/analytics/devguides/collection/gtagjs/events?hl=ja)
- [analytics.js - イベント測定](https://developers.google.com/analytics/devguides/collection/analyticsjs/events?hl=ja)

### ページビュー

```js
const GA_MEASUREMENT_ID = "";

// gtag.jsの場合 configの指定タイミングでpageviewが送信されるようになっている
gtag("config", GA_MEASUREMENT_ID, {
  page_title: document.title,
  page_path: location.pathname,
});

// analytics.jsの場合
ga("create", GA_MEASUREMENT_ID, "auto");
ga("send", "pageview", location.pathname);
```

- [gtag.js - ページビューの測定](https://developers.google.com/analytics/devguides/collection/gtagjs/pages?hl=ja)
- [analytics.js - ページビューの測定](https://developers.google.com/analytics/devguides/collection/analyticsjs/pages?hl=ja)

#### 仮想ページビューを送信する

手動でpage_viewを送信する方法。Single Page Applicationなどで利用する

```js
const GA_MEASUREMENT_ID = "";
const PAGE_LOCATION = "";
const PAGE_TITLE = "";
const PAGE_PATH = location.pathname;
// gtag.jsの場合
gtag("config", GA_MEASUREMENT_ID, {
  send_page_view: false, // 複数のpageviewが計測されないように、config指定時にpage viewの送信を行わない
});
gtag("event", "page_view", {
  page_title: PAGE_TITLE,
  page_location: PAGE_LOCATION,
  page_path: PAGE_PATH,
  send_to: GA_MEASUREMENT_ID, // 複数のIDが存在する場合、計測対象を明示する
})

// analytics.jsの場合
ga("set", "page", PAGE_LOCATION);
ga("send", "pageview");
```

- [analytics,js - シングルページ アプリケーションの測定](https://developers.google.com/analytics/devguides/collection/analyticsjs/single-page-applications?hl=ja)
- [gtag.js を使用した単一ページ アプリケーションの測定](https://developers.google.com/analytics/devguides/collection/gtagjs/single-page-applications?hl=ja)




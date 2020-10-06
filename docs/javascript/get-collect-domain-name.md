---
title: "URLからJavaScriptでドメイン名を抽出するには？"
description: "与えられた文字列から、文字列操作でドメイン名だけを抽出する"
keywords:
  - javascript
  - ドメイン名
  - 抽出
createdAt: 2018-09-16 12:45:00
updatedAt: 2019-05-21 11:22:01
---

<https://stackoverflow.com/questions/8498592/extract-hostname-name-from-string>

```javascript
function extractHostname(url) {
    var hostname;
    //find & remove protocol (http, ftp, etc.) and get hostname

    if (url.indexOf("://") > -1) {
        hostname = url.split('/')[2];
    }
    else {
        hostname = url.split('/')[0];
    }

    //find & remove port number
    hostname = hostname.split(':')[0];
    //find & remove "?"
    hostname = hostname.split('?')[0];

    return hostname;
}

function extractRootDomain(url) {
    var domain = extractHostname(url), // 大事
        splitArr = domain.split('.'),
        arrLen = splitArr.length;

    if (arrLen > 2) {
        domain = splitArr[arrLen - 2] + '.' + splitArr[arrLen - 1];
        //check to see if it's using a Country Code Top Level Domain (ccTLD) (i.e. ".me.uk")
        // 二文字のドメインがないことを利用して、co.jpとかを判定している
        if (splitArr[arrLen - 1].length == 2 && splitArr[arrLen - 1].length == 2) {
            //this is using a ccTLD
            domain = splitArr[arrLen - 3] + '.' + domain;
        }
    }
    return domain;
}
```
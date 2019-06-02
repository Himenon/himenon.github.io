---
title: "PandasのColumnをDateTimeに型変換する"
description: "日付変換"
tags: "python,jupyter,pandas,datetime"
createdAt: 2018-03-26 01:22:30
updatedAt: 2019-05-21 09:35:05
---

## to_datetimeを利用する

```python
df = df.to_datetime(df['created_at'], format='')
```

strftimeのリファレンスを読みながら調整

- http://strftime.org/
- https://pandas.pydata.org/pandas-docs/stable/generated/pandas.to_datetime.html

**Twitterの場合**

```bash
Sun Mar 25 09:10:42 +0000 2018
```

```bash
%a %b %d %H:%M:%S +0000 %Y
```

- [Going from twitter date to Python dateTime date - StackOverflow]( https://stackoverflow.com/questions/7703865/going-from-twitter-date-to-python-dateTime-date)

## Timezoneの変更

http://pman0214.github.io/blog/pandas-tz-convert.html
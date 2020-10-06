---
title: "CeleryのPeriodic Tasksを使う"
description: "定期的なタスク（Periodic Task）の使い方についてまとめました。"
keywords:
  - celery
  - python.celery
  - periodic task
  - 定期実行
createdAt: 2018-03-07 07:16:19
updatedAt: 2019-05-22 01:08:17
---

## settings.pyのロード

どうやら`settings.py`を探索しに行っているようなので、
次のようなディレクトリ管理ができない。

```
proj/
    settings/
        __init__.py
```

また、

```
proj/
    settings.py
    config/
        prd_settings.py
        dev_settings.py
```

などのようにして、`settings.py`から`prd_settings`を`import`してもだめだった。

`settings.py`内部では条件分岐などは利用できるようだ。

```python
from settings import prd_settings
INSTALLED_APPS = prd_settings.INSTALLED_APPS
```

以下もダメ

```
from . import settings

__all__ = ['settings']
```

## celery_app

<http://tokibito.hatenablog.com/entry/20150409/1428590388>

この方のやり方の場合、`urls`に登録した場合のみ、Djangoの管理画面から表示される。








---
title: "DjangoにAppを新たに追加したときにやること"
createdAt: 2018-03-06 06:50:19
updatedAt: 2019-05-21 11:22:01
---

## urlpatternの追加

```python
urlpatterns = [
    ....
    url(r'^another/app/', include('another_app.urls')),
] + static(settings.STATIC_ROOT, document_root=settings.STATIC_ROOT)
```

## ラベルとパスを付ける

```python
from django.apps import AppConfig

class AnotherAppConfig(AppConfig):
    name = 'another_app'   # プロジェクトルートからのPath
    label = 'another_app'  # プロジェクト内で固有のラベル
```


## Migration

## STATICFILES_DIRS

Staticディレクトリを追加したいバア追加したい場合

```python
STATICFILES_DIRS [
    # ....
    'path/to/your/app/static'
]
```


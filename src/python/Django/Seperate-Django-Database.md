---
title: "Djangoで複数のデータベースを利用する"
createdAt: 2019-05-21 10:46:07
updatedAt: 2019-05-21 10:46:07
---

# Djangoで複数のデータベースを利用する

<p id="updated_at">更新日: <time dateTime="2018-04-16T01:00">2018/04/16</time></p>

ユーザー管理用のデータベースと、分析用のデータベースなどのように分離したいときがあります。
Django 2.0のドキュメントでは[Multiple databases](https://docs.djangoproject.com/en/2.0/topics/db/multi-db/)の章に説明があります。

やることは4つ

1. `settings.py`の`DATABASES`に複数のDBの接続先を記入する
1. `settings.py`に`DATABASE_APPS_MAPPING`を定義し、アプリケーションごとにKV形式で接続先のDB名を記述する
1. `settings.py`に`DATABASE_ROUTERS`を定義し、接続するDBを振り分けるためのRouterの定義を配列形式で記述する
1. `DATABASE_ROUTERS`に定義されたrouterを用意する

実際に具体例を示してみます。
ここで示す具体例では、`DATABASE_APPS_MAPPING`に指定したとおりにデータベースが
振り分けるという単純なことだけを達成します。

ちょっと大雑把ではありますが、下記のようなディレクトリ構成を取っているものとします。
`myapp`はdjangoのアプリケーションです。

```
myapp/
├── myapp/settings.py
├── manage.py
└── routers.py
```

## settings.py

```python
# myapp/settings.py
from os import environ

# 接続先データベースの定義
DATABASES = {
  'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'mydb',
        'USER': environ.get('DEFAULT_MYSQL_USER'),
        'PASSWORD': environ.get('DEFAULT_MYSQL_PASSWORD'),
        'HOST': environ.get('DEFAULT_DB_HOST', '127.0.0.1'),
        'PORT': environ.get('DEFAULT_DB_PORT', '3306'),
        'OPTIONS': {
            'init_command': "SET sql_mode='STRICT_TRANS_TABLES'",
            'charset': 'utf8mb4',
        },
        'TEST': {
            'CHARSET': 'utf8mb4',
            'COLLATION': 'utf8mb4_general_ci',
        },
  },
  'analytics': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'mydb',
        'USER': environ.get('ANALYTICS_MYSQL_USER'),
        'PASSWORD': environ.get('ANALYTICS_MYSQL_PASSWORD'),
        'HOST': environ.get('ANALYTICS_DB_HOST', '127.0.0.1'),
        'PORT': environ.get('ANALYTICS_DB_PORT', '3306'),
        'OPTIONS': {
            'init_command': "SET sql_mode='STRICT_TRANS_TABLES'",
            'charset': 'utf8mb4',
        },
        'TEST': {
            'CHARSET': 'utf8mb4',
            'COLLATION': 'utf8mb4_general_ci',
        },
  }
}

# アプリケーションごとの接続先DBのマッピング
DATABASE_APPS_MAPPING = {
    # defaultには管理系のTable
    'admin'              : 'default',
    'auth'               : 'default',
    'contenttypes'       : 'default',
    'sessions'           : 'default',
    'messages'           : 'default',
    'staticfiles'        : 'default',
    'django_celery_beat' : 'default',
    # analyticsには分析計のTable
    'myapp'              : 'analytics',
}

# 利用するRouter, manage.pyから見ての相対パス
DATABASE_ROUTERS = [
    'router.DatabaseRouter',
]
```

## Database routers

以下の4つのメソッドが定義されたクラスを用意します。

- `db_for_read`
- `db_for_write`
- `allow_relation`
- `allow_migrate`

参考: [Database routers](https://docs.djangoproject.com/en/2.0/topics/db/multi-db/#database-routers)

`router.DatabaseRouter`は次のように定義しています。

```python
# routers.py
from myapp.settings import DATABASE_APPS_MAPPING

class DatabaseRouter(object):
    def db_for_read(self, model, **hints):
        if model._meta.app_label in DATABASE_APPS_MAPPING:
            return DATABASE_APPS_MAPPING[model._meta.app_label]
        return None

    def db_for_write(self, model, **hints):
        if model._meta.app_label in DATABASE_APPS_MAPPING:
            return DATABASE_APPS_MAPPING[model._meta.app_label]
        return None

    def allow_relation(self, obj1, obj2, **hints):
        db1 = DATABASE_APPS_MAPPING.get(obj1._meta.app_label)
        db2 = DATABASE_APPS_MAPPING.get(obj2._meta.app_label)
        if db1 and db2:
            return db1 == db2
        return None

    def allow_migrate(self, db, app_label, model=None, **hints):
        if db in DATABASE_APPS_MAPPING.values():
            return DATABASE_APPS_MAPPING.get(app_label) == db
        elif app_label in DATABASE_APPS_MAPPING:
            return False
```

これで設定完了です

## Migration

Migrationはコマンドが変わります。
通常、`./manage.py migrate`を行うと、`default`で指定されたDBに対してMigrationが実行されますが、
今回は分離しているので、`--database`引数を用いて明示的に指定する必要があります。

```bash
$ ./manage.py migrate                          # defaultに対するMigration
$ ./manage.py migrate --database=analytics     # analyticsに対するMigration
```

これでMigrationが実行されます。
また、その他のコマンドでもDB単位で実行する必要があるので、注意が必要です。


## 最後に

最近、Python界隈が分析系や深層学習などで騒がれていますが、
データを蓄積するDBの管理の話が出てこないのが気になります。

みなさん、どうやって管理しているのでしょう？
分析基盤の担当の方がいらっしゃれば良いのですが、全員がそうではないと思いますので、
この記事が一人で全部やらないといけないなぁ、と思っている人のところに届けばと思います。

間違いがあればTwitterなどで報告してくれると修正いたします。



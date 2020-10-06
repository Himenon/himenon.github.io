---
title: "Djangoにおける静的ファイルの探索がコケたときのエラー"
description: "静的ファイルの探索エラー"
keywords:
  - python
  - django
  - static file
createdAt: 2018-09-15 11:55:29
updatedAt: 2019-05-21 11:22:01
---

```
root@f363e9217eab:/django# ./manage.py collectstatic

You have requested to collect static files at the destination
location as specified in your settings.

This will overwrite existing files!
Are you sure you want to do this?

Type 'yes' to continue, or 'no' to cancel: yes
Traceback (most recent call last):
  File "./manage.py", line 20, in <module>
    execute_from_command_line(sys.argv)
  File "/usr/local/lib/python3.6/site-packages/django/core/management/__init__.py", line 364, in execute_from_command_line
    utility.execute()
  File "/usr/local/lib/python3.6/site-packages/django/core/management/__init__.py", line 356, in execute
    self.fetch_command(subcommand).run_from_argv(self.argv)
  File "/usr/local/lib/python3.6/site-packages/django/core/management/base.py", line 283, in run_from_argv
    self.execute(*args, **cmd_options)
  File "/usr/local/lib/python3.6/site-packages/django/core/management/base.py", line 330, in execute
    output = self.handle(*args, **options)
  File "/usr/local/lib/python3.6/site-packages/django/contrib/staticfiles/management/commands/collectstatic.py", line 199, in handle
    collected = self.collect()
  File "/usr/local/lib/python3.6/site-packages/django/contrib/staticfiles/management/commands/collectstatic.py", line 124, in collect
    handler(path, prefixed_path, storage)
  File "/usr/local/lib/python3.6/site-packages/django/contrib/staticfiles/management/commands/collectstatic.py", line 354, in copy_file
    if not self.delete_file(path, prefixed_path, source_storage):
  File "/usr/local/lib/python3.6/site-packages/django/contrib/staticfiles/management/commands/collectstatic.py", line 260, in delete_file
    if self.storage.exists(prefixed_path):
  File "/usr/local/lib/python3.6/site-packages/django/core/files/storage.py", line 392, in exists
    return os.path.exists(self.path(name))
  File "/usr/local/lib/python3.6/site-packages/django/contrib/staticfiles/storage.py", line 50, in path
    raise ImproperlyConfigured("You're using the staticfiles app "
django.core.exceptions.ImproperlyConfigured: You're using the staticfiles app without having set the STATIC_ROOT setting to a filesystem path.
```

```python
import os
ROOT_PATH = os.path.dirname(__file__)

STATICFILES_DIRS = [os.path.join(ROOT_PATH, 'static')]
```

[Django 静的ファイル (static) 関係の設定まとめ](https://qiita.com/aion/items/add0c983150a2a1e100d)

> The reason that STATICFILES_DIRS wants a filesystem path is that it needs to know where the files live in the operating system (so things like manage.py collectstatic are possible). The STATIC_URL setting is for webserver paths, and that's what it uses to show to the user in the admin or the {% static %} tag or whatever. STATICFILES_DIRS is server-side only and never shows up in any rendered templates or anything.

※まとまってない

Djangoを本番環境にデプロイするとき、静的ファイル関係の設定でいろいろはまったので、まとめる。
基本的に以下の5つあるようだが、上から3つだけ使用していたので、それらに関してまとめる。
ちなみに以下のそれぞれの定数はsetting.pyで設定する。

```
STATIC_ROOT
STATIC_URL
STATICFILES_DIRS (Prefixes (optional))
STATICFILES_STORAGE
STATICFILES_FINDERS
```

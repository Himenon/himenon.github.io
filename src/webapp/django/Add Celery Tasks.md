# Celeryのアプリを追加するときに気をつけること


## Model絡みのメソッドは、実行時に呼び出す

Bad

```
from my_project import model
```


Good

```
def hello():
    from my_project import model
```

Why ?


## admindjangoで`periodic task`を追加しようとすると落ちる


```
RuntimeError at /admindjango_celery_beat/periodictask/add/
'path' must be None or a list, not <class '_frozen_importlib_external._NamespacePath'>
Request Method: GET
Request URL:    http://localhost:8001/admindjango_celery_beat/periodictask/add/
Django Version: 2.0
Exception Type: RuntimeError
Exception Value:    
'path' must be None or a list, not <class '_frozen_importlib_external._NamespacePath'>
Exception Location: /usr/local/lib/python3.6/imp.py in find_module, line 271
Python Executable:  /usr/local/bin/python
Python Version: 3.6.4
Python Path:    
['/django',
 '/usr/local/lib/python36.zip',
 '/usr/local/lib/python3.6',
 '/usr/local/lib/python3.6/lib-dynload',
 '/usr/local/lib/python3.6/site-packages']
Server time:    火, 6 3月 2018 15:59:01 +0900
```

## Periodic tasks won't be dispatched unless you set the CELERYBEAT_SCHEDULER setting to djcelery.schedulers.DatabaseScheduler, or specify it using the -S option to celerybeat

settings.pyに下記を追加

```
CELERYBEAT_SCHEDULER = "djcelery.schedulers.DatabaseScheduler"
```
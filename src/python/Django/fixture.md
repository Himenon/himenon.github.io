# fixtureを読み込む

- http://cortyuming.hateblo.jp/entry/20130824/p1
- http://django-testing-docs.readthedocs.io/en/latest/fixtures.html
- https://code.djangoproject.com/wiki/Fixtures

```bash
python manage.py loaddata "$p"
```

## データベースが異なる場合は指定する必要がある

* 作成日：2017年08月156日
* 公開日：2018年09月15日

```bash
python manage.py loaddata ./another/app/fixtures/init_data.yaml --database target_db
```


## autofixture

- <https://github.com/gregmuellegger/django-autofixture>

```
# Install
pip install django-autofixture
```

```python
# setting.py
INSTALLED_APPS = [
    'autofixture',
]

# コマンド
python manage.py loadtestdata blog.Category:3 blog.Entry:20

# docker-dev run dev_app
docker-dev run dev_app python manage.py loadtestdata MyPage.MyPageElement:30 
# 後ろは、 [app_name].[model_name]:[number]
```
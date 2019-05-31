---
title: "Flaskのpytestのコードを少しだけ覗いてみる"
createdAt: 2018-03-30 04:56:23
updatedAt: 2019-05-31 23:50:47
---
## Flaskのテストコードより

`unittest.TestCase`のsetUpやtearDownを使って、テスト対象のインスタンスを使いまわすやり方があるが、
単純にインスタンスがほしいというだけの場合がある。
それを実現するためにテスト用のメソッド内でインスタンスを生成するのも芸がない。
また、Flaskの用にデコレータを使ったメソッドのテストはどのようにやるのか調べたら、
`pytest.fixture`の使い方に興味深い方法があったので紹介。

[flask/tests/conftest.py](https://github.com/pallets/flask/blob/master/tests/conftest.py#L61-L64)

```python
class Flask(_Flask):
    testing = True
    secret_key = 'test key'

@pytest.fixture
def app():
    app = Flask('flask_test', root_path=os.path.dirname(__file__))
    return app

@pytest.fixture
def client(app):
    return app.test_client()
```

[flask/tests/test_basic.py](https://github.com/pallets/flask/blob/master/tests/test_basic.py#L28-L35)

```python
def test_options_work(app, client):
    @app.route('/', methods=['GET', 'POST'])
    def index():
        return 'Hello World'

    rv = client.open('/', method='OPTIONS')
    assert sorted(rv.allow) == ['GET', 'HEAD', 'OPTIONS', 'POST']
    assert rv.data == b''
```

**ドキュメント**

- [Fixtures as Function arguments - pytest](https://docs.pytest.org/en/latest/fixture.html#fixtures-as-function-arguments)
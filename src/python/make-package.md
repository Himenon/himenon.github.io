---
title: 簡単なPythonのパッケージを作る方法
description: "pythonのライブラリを作る方法を紹介します。"
keywords: "python.library"
createdAt: 2016-12-04 03:49:00
updatedAt: 2020-03-26 00:15:00
---

> 追記: 2017/11/16
> よく見られているっぽいので、名前変えました。

Pythonのファイル分割とパッケージとかまでをすごいざっくりまとめてみる。

「パッケージの最小サンプル」だけ見たい人は多分目次から飛んだほうが早いのでオススメ。

# Pythonでファイルを分割するということ

## 「ファイル分割 = 名前空間の作成」が気持ちいいぞ

個人的に気に入ってるのがファイル分割。
何かしらいろいろと作ってくるとコード数が増えて、「昨日書いたコードは今日の敵」のようなことになってしまうので、なるべく機能ごとにまとめて管理していきたい。

だいたいこんな理由ではじめてファイル分割を検索するんだけど、「 **Python ファイル分割** 」みたいな感じでググっても、記事が古かったり、2系で書いてあるから不安になったり、リファレンスのモジュールの項を見ても欲しい情報に速攻にたどり着けなかったりする。

参考：

- [6. モジュール](http://docs.python.jp/2/tutorial/modules.html)

なので、さっさとコードを書いて後から説明していく。


ファイル構成は次の通り

```
advent2016        # ディレクトリ
├── another.py # 分割したファイル
└── main.py    # インポートする側
```


```python
# another.py
year = 2016

def hello(name):
    print("Hello {0}".format(name))

def goodbye(name):
    print("Goodbye {0} !".format(name))
```

```python
# main.py
import another # .pyなどはいらない。

another.hello("Advent Calender")

another.goodbye( another.year )
```

ここまで書いて、`main.py` を実行すると次のようになる。

```bash
$ python main.py

Hello Advent Calender
Goodbye 2016 !
```

さらにインポートの方法も複数あって、それを自分で選択できるのが便利。
例えば、インポートするときの名前を変更したいなら、

```python
# main2.py
import another as an

an.hello("Advent Calender")

an.goodbye( an.year )
```

のように、 `as` を使って `another` を `an` に置き変えることが可能だ。
名前空間が必要ではない場合、は次のように `from` を使って書くこともできる。

```py
from another import *

hello("Advent Calender")
goodbye( year )
```

`*` (アスタリスク) は `another.py` で記述されているものを全てを引用することが可能だ。ただし、ファイルをインポートした時に同じ名前のメソッドがあった場合は危険であるから、必要なメソッドや変数のみに絞ってインポートしたい時がある。その場合は次のようにすれば良い。


```python
# main3.py
from another import hello

hello("Advent Calender")

goodbye( year )           # エラー
```

さっきの `*` アスタリスクの部分に必要なものを明示的に書いてあげればよいだけである。

さて、少しだけ注意しておきたいことが有る。
インポートするファイルに直接実行コードが書いてある時だ。

```python
# another.py
year = 2016

def hello(name):
    print("Hello {0}".format(name))

def goodbye(name):
    print("Goodbye {0} !".format(name))
  
print("Hello from another.py") # 追加
```

この場合、どのようになるか。
仮に、 `main.py` で実行した時、次の様になる。

```bash
$ python main.py

Hello from athoer.py
Hello Advent Calender
Goodbye 2016 !
```

`another.py` がインポートされた段階で実行されていることがわかる。
これを避けるためには次のようにすると良い。

```python
# another.py
year = 2016

def hello(name):
    print("Hello {0}".format(name))

def goodbye(name):
    print("Goddbye {0} !".format(name))

if __name__ == '__main__': # 追加

    print("Hello from another.py") # 追加
```

`if __name__ == '__main__':` の内側に書いてしまえば、直接実行された時以外は内側のコードは実行されなくなる。
インポートされる可能性のあるファイル単体で実行するときは、書いておくほうが無難であろう。

## ディレクトリ単位での分割も良いぞ

ファイル分割を個々まで説明してきたが、せっかくなのでディレクトリを利用した場合も説明しておこう。
例えば次のようなファイル構成を作っておく。

```
advent2016-part2        # ディレクトリ
├── Special          # ディレクトリ
│   └── sunday.py   # ファイル (追加)
└── main.py          # ファイル
```

早速 `sunday.py` を `main.py` にインポートするコードを書いてみる。

```python
# sunday.py
filename = "sunday.py"

def hello(name):
    print("Hello {0}. From sunday.py".format(name))
```

```python
# main.py
import Special.sunday

print( Special.sunday.filename )
Special.sunday.hello("HELLO")
```

見ての通り、 `import Special.sunday` でディレクトリ内にあるコードも読み込みが可能だ。
ただし、上記のようにインポートした時は `Special.sunday` をいちいち書く必要がある。
が、ここまで読めば分かる通り、 `as` や `from` を利用すれば、長々と記述する必要がなくなるわけである。

```python
import Special.sunday as sunday

print( sunday.filename )
sunday.hello("HELLO")
```

すばらしい。好きなようにインポートするのがよいだろう。また、どこからインポートされているのかを確認したければ、

```python
import Special
print( Special.__path__ )
```

とすると絶対パスが確認ができる。

細かなエラーなどについては [Pythonのimportについてまとめる](http://qiita.com/suzuki-hoge/items/f951d56290617df4279e) を参照することをおすすめしたい。

## 次に

いやはや、ファイル分割はコードの見通しを良くする上でとても大事なことだけれども、
ここまでの内容だけだと、一つのディレクトリの中でたくさんコードを管理してしまうことになってしまう。

1つのディレクトリ内でたくさんのコードを用意していればそれだけ引っ張り出せるのだけれど、
人間は忘れてしまう生き物なので、どこに何があるのかいづれわからなくなってしまう。

決して忘れることに罪はないので、忘れないうちに忘れたときの手を打っておくのが健全だろう。

なので、パッケージ化してしまって、どこからでも引っ張りだせれば至極便利。

# パッケージ化するって、つまりそういうこと

頻度の高くないものや、小規模なプロジェクトにおいてはそのまま使うのが効率が良いとは思う。
だが、この逆はパッケージ化したほうが便利ではなかろうか。そのはずだ。

Pythonのパッケージ化、でググってだいたい引っかかるのがこの辺。

- [PyPIデビューしたい人の為のPyPI登録の手順 - Qiita : 2016年06月10日](http://qiita.com/kinpira/items/0a4e7c78fc5dd28bd695)
- [PyPIデビュー - 清水川Web](http://www.freia.jp/taka/docs/pyhack4/pypi/)
- [PyPIデビュー2015](https://tell-k.github.io/pyconjp2015/#1)
- [PyPIデビューした 〜 PyPIデビューまでの道のり 〜](http://gaujin.jp/media/1/python/osakapy/2015-12/)

ざっと見た感じだと長いので、ここではさくさく終わらせていこう。

## パッケージ化してしまえ

`setup.py` さえ作ってしまえパッケージ化は簡単。

```python
from setuptools import setup, find_packages

setup(
    name='パッケージ名',
    version="0.0.1",                 # X.Y.Z 形式
    description="短めの説明",
    long_description="長めの説明",
    url='必要ならばURL',
    author='作者名',
    author_email='メールアドレス',
    license='ライセンス',
    classifiers=[
        # パッケージのカテゴリー
        # https://pypi.python.org/pypi?:action=list_classifiers
        # からあったものをコピペ。
    ],
    keywords='キーワード',
    install_requires=["依存関係のあるパッケージ"],
)
```

これが終わったら、コマンドでインストールしてしまえばいい。

### ローカルでインストール(開発モード)

```bash
pip install -e
python setup.py develop
```

これで、ローカル環境ではどこからでもインポートできる。


### パッケージの最小サンプル

試しに最小サンプルを用意しておこう。ただ単純に「"Farewell 2016 !"」と出力するだけのパッケージだ。 

```
Farewell2016
├── Farewell2016
│   └── Greet.py
└── setup.py
```

```Greet.py
def farewell():
	print("Farewell 2016 !")
```

```python
# setup.py
from setuptools import setup, find_packages

setup(
    name='Farewell2016',
    version="0.0.1",                 
    description="さよなら2016年",
    long_description="2016年にお別れを言うだけのパッケージ",
    author='k.himeno',
    license='MIT',
    classifiers=[
        "Development Status :: 1 - Planning"
    ],
    keywords='farewell'
)
```

書き終わったら `setup.py` のあるディレクトリで次のコマンドを実行すれば良い。

```bash
pip install -e
python setup.py develop
```

これだけだ！

試しに、全く関係のないディレクトリで次のコードを実行してみるとよい。

```python
# sample.py
from Farewell2016.Greet import farewell
farewell()
```

これだけでも随分と楽になる。

## せっかくなのでPyPIに登録しちゃう？

せっかく作ったらアップロードしちゃいましょう。

（とかいって、アドベントカレンダー用に何かパッケージ作ろうとしてたら、まぁまぁ凝ったものを作ってしまった。）

参考程度にソースコード

- ソースコード: https://github.com/Himenon/CountDownApp
- PyPI: https://pypi.python.org/pypi?:action=display&name=CountDownApp&version=0.0.1

こやつの構成は次の通り。

```
CountDownApp
├── CountDownApp       # パッケージの中身
│   ├── __init__,py 
│   └── app.py        
├── MANIFEST.in        # 配布ソースコードに何を含めるか書いたファイル
├── README.rst         # 長い説明とかをまとめているファイル
├── VERSION            # 勝手に作ったバージョンファイル
├── image.png          # ただの画像
├── requirements.txt   # 依存している他のパッケージをまとめるやつ
├── setup.cfg          # オプションをまとめる便利なファイル
└── setup.py           # パッケージの情報が詰まったファイル
```

このパッケージのファイルをもとに簡単に説明してみる。

### 配布用ソースコードの作成

以下のコマンドで出来上がる。

```
python setup.py sdist
```

`MANIFEST.in` に従ってパッケージ化される。

```MANIFEST.in
include README.rst
include setup.cfg
```

- http://docs.python.jp/2/distutils/sourcedist.html
- https://docs.python.org/3/distutils/sourcedist.html


### 配布用のバイナリの作成

`wheel` パッケージを利用するのでインストールしておく。

```bash
pip install wheel
```

wheelのドキュメント

- http://wheel.readthedocs.io/en/latest/

実行方法は

```
python setup.py bdist_wheel
```

とすればよい。

[Defining the Python version](http://wheel.readthedocs.io/en/latest/#defining-the-python-version)では、
`--universal` と `--python-tag XXX` が説明されてあるが、どの環境に対してパッケージ化するかが選択できる。

`setup.cfg` ファイルにこれらのオプションをまとめておくことができる。

```cfg
# setup,cfg
[bdist_wheel]
universal=1
```

こうすれば、わざわざオプションをつけなくてよい。

**setup,cfgについて**

- http://docs.python.jp/2/distutils/configfile.html
- https://docs.python.org/3/distutils/configfile.html

### PyPIへアップロード

配布用のソースコードとバイナリを作成してアップロードするなら

```bash
python setup.py sdist bdist_wheel upload
```

でよい。

# さいごに

この記事は、箱入り娘状態のコードがあって、公開できるコードがあるのに、公開の方法を知らないという人に届いてホスィ。

コードを共有してくれると僕と僕以外の全て、つまり「全て」が嬉しいので、パッケージを公開するなり、記事を公開するなりやってみませぬか？

おわり。

2016/12/5 追記
-------------

※ 編集リクエストくださってる方ありがとうございます！

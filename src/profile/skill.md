---
title: "スキルセット"
createdAt: 2018-03-27 02:40:39
updatedAt: 2019-05-21 11:22:01
---

# スキルセット

<p id="created_at">作成日: <time dateTime="2018-03-27T02:00">2018/03/27</time></p>

**学習フェーズ**

- 狭く深く <-- 今ここ
- より速く
- 深淵から横へ
- 堅実に強く
- 天元突破

## Computer Langage

### Python

最もよく使う言語。WEBアプリケーション、ツール開発などさっさと使いたい時に用いる。
wxpythonでGUIの基本的な部分は学んだ。

#### 読んだ本 / もっている本

- [入門 Python 3](https://www.oreilly.co.jp/books/9784873117386/)
- [退屈なことはPythonにやらせよう](https://www.oreilly.co.jp/books/9784873117782/)
- (バイブル) [実践 Python 3](https://www.oreilly.co.jp/books/9784873117393/)
- (読書中) [エキスパートPythonプログラミング改訂2版](https://www.kadokawa.co.jp/product/301801000262/)

#### 自作ライブラリ

- <https://pypi.org/project/hakka/>
- <https://pypi.org/project/OrderedFormat/>


#### 遊んだもの

- [MHWの被ダメージ計算](https://gist.github.com/Himenon/57cc1e750ea4d386adde1e427cfab9c4)

#### 直接利用したことのあるpipライブラリ

- airflow
- alembic
- anyjson
- APScheduler
- bcrypt
- celery
- certifi
- click
- [cookiecutter](cookiecutter)
- Django
- django-admin2
- django-braces
- django-celery-beat
- django-celery-results
- django-extra-views
- django-filter
- django-model-utils
- djangorestframework
- docutils
- flake8
- Flask
- Flask-Admin
- Flask-API
- Flask-Cache
- Flask-Cors
- Flask-Login
- Flask-RESTful
- Flask-Session
- Flask-SocketIO
- flower
- google
- gspread
- gunicorn
- h5py
- ipython
- Jinja2
- jupyterlab
- lxml
- Markdown
- markdown-include
- matplotlib
- mkdocs
- mkdocs-material
- mkdocs-windmill
- mock
- mockredispy
- mysqlclient
- nose
- notebook
- numpy
- pandas
- pipenv
- psycopg2
- pygame
- pymongo
- pytest
- python-socketio
- pytz
- PyYAML
- pyzmq
- redis
- requests
- scikit-learn
- scipy
- Scrapy
- scrapy-djangoitem
- scrapy-splash
- scrapyd
- scrapyd-client
- selenium
- six
- SQLAlchemy
- tornado
- Twisted
- wxpython

### Ruby

リハビリが必要

- (読了) 改訂2版 パーフェクトRuby 

参考

- https://github.com/Himenon/BookMaker

#### 使ったことのあるgem

- rails==4.2.3
- sqlite3
- sass-rails
- uglifier
- coffee-rails
- jquery-rails
- turbolinks
- carrierwave
- mini_magick
- remotipart
- seed-fu
- slim-rails
- pandoc-ruby
- htmlbeautifier
- font-awesome-rails
- quiet_assets
- wkhtmltopdf-binary-11
- wicked_pdf
- rubyzip
- bower-rails
- jquery-turbolinks
- compass-rails
- byebug
- meta_request
- web-console
- spring
- rspec
- rspec-rails
- shoulda-matchers
- factory_girl_rails

### Julia

研究室にいた時、数値計算用として利用。
constと@parallelを利用して、Matlabで7日間かかっていた計算を7分にしたのはいい思い出。
(Matlabの使い方がよくわからなかったのが原因でもある)
現在はほとんど利用していないので、リハビリが必要。

### C

[ふつうのLinuxプログラミング 第2版](http://www.sbcr.jp/products/4797386479.html)を写経したレベル。
Socketプログラミングや、LINUXユーザー管理、パーミッション、シグナルなど、
WEBを取り扱う上での基礎の基礎を学んだ。

積本: Linuxプログラミングインタフェース

### Swift

アルバイトで教えていた経験あり(2年くらい)。
iOS/macOSのアプリケーショの作成経験があるが、どっちかというとmacOSのアプリケーション作成のほうが好き。
iOSのリリースはしていない。macOSに関してはGithubからダウンロードできるものもある。

以下の本は読んだ

- MAC OS X COCOAプログラミング 第4版

[Realm](https://realm.io/jp/)も使える。

#### 参考リポジトリ

- ios
    - <https://github.com/Himenon/iosWorkspace>
    - <https://github.com/Himenon/MusicButton>
- macOS
    - <https://github.com/Himenon/VideoStreaming>
    - <https://github.com/Himenon/Timer>: Releaseからダウンロードできる
    - <https://github.com/Himenon/Seal2Imag>

####　パッケージ管理

cocoapodsとcarthageは利用できる。
[Realm](https://realm.io/jp)が利用したことがある。
React Nativeのエラーの時にこの知識が活躍した。

#### Xcode

Xcode(>=9.2)のインタフェースはちょくちょく触ります。

### PHP

- PHP >= 7.0
- Laravel 5.4

Laravelは良かったです。

### JavaScript

#### VanilaJS

すごく昔に作った作品。物理の研究で、電磁波の挙動をアニメーションした時に作った。

- <https://codepen.io/Himenon/pen/wzApRb>

LaravelのValidation->afterの実装パターンを見て、
Toggle系のイベント発火うまくできるんじゃないかと実装したやつ

- <https://gist.github.com/Himenon/e65ea464b1ea53f1d8f781bd66da94e0>

#### Virtual DOM

VDOMの仕組みは[picodom](https://github.com/jorgebucaran/ultradom)の作者の発表(Node学園2017)と、
実際にソースコードを読んでコードレベルで理解した。

- vue.js
- React
- Ultradom(旧picodom)

vuexを用いた状態管理はWebsocketの実装と相性が良く、気持ちよく書ける。

### NodeJS

Cloud Functionで利用。
WEBアプリケーションをこれで作成したことはない。
ツールとして利用することは度々あるので、ちょっとしたことはかける。

いまはZappierやIFTTT、Cloud Functionと遊んでます。

#### 作ったもの

- [Himenon/web2pdf - Github](https://github.com/Himenon/web2pdf)
- [web2pdf - npm](https://www.npmjs.com/package/web2pdf)

Markdownで提出したらPDFを要求されたときの緊急避難対応用に作成した。
せっかくなので、npmでインストールできるようにリリースもしておいた。
リリースするならテストしろよってことで、jestでテストをちょこっと書いてtravis-ciにツッコんだ。
初めてnpmに登録したりしたので、2時間かかったけど、次はもうちょっと早く行けそう。

## Web Application Framework

### [Bottle](https://github.com/bottlepy/bottle)

プラグインを登録

<https://github.com/bottlepy/bottle/blob/master/bottle.py#L916-L932>

からの、発火。

<https://github.com/bottlepy/bottle/blob/master/bottle.py#L815-L825>

わかりやすい。

### Django

バージョンは2.0を利用。（開発途中まで1系だったが、v2に切り替えた。一部Modelだけ変更したが、それ以外はテスト落ちず）。
データ基盤の中核として利用した。
APIは[Django REST framework](http://www.django-rest-framework.org/)を利用。
Task Queueに関しては、[Celery](http://www.celeryproject.org/)を導入し、
Celery 4系をDjango 2系に組み込んだ記事はなかったので、
[記事](/webapp/django/Introduction-of-Celery-Django/)にした。

### Flask

#### Fixtureの使い方がうまい

Fixtureを生成

<https://github.com/pallets/flask/blob/master/tests/conftest.py#L61-L64>

setUp, tearDownを使わずにテストを作成。

<https://github.com/pallets/flask/blob/master/tests/test_basic.py#L28-L35>

賢い

### Laravel

Version 5.4を半年ほど。
一本記事を書いてます（本サイトに移植中）。

<http://www.archiveknow.com/2017/10/fw-laravel-validator-after.html>

この辺のコード賢いなぁと。

<https://github.com/illuminate/validation/blob/fd94fb74ae3aec60c745d2a537e766c18eedbab6/Validator.php#L243-L250>

### Sintra

最近鈍っている。

### Ruby on Rails

Active Recordは優秀。最近鈍っている。

## Database

### RDBMS

- MySQL
- PostgreSQL

基本的にはORM任せにしている。最低限のCRUDとストアドプロシージャなどの操作はできる。
チューニングはほとんどやっていない(Cloud任せ)。
Slow Queryを見つけるぐらいはできる。

### NOSQL

以下の本は抑えている。なので「NO」になっている。

- 【読了】NOSQLの基礎知識 (ビッグデータを活かすデータベース技術) 
- 【辞書的に利用】RDB技術者のためのNoSQLガイド

#### Redis

RedisはTask Queueでだいぶお世話になっている。
クラスター化はまだしたことがないが、k8sのStatefullSetの勉強がてらそろそろやる。

- (辞書) [Redis入門 インメモリKVSによる高速データ管理](https://www.kadokawa.co.jp/product/311877000000/)

#### Scala

下記のページのScala程度ならやった

<http://docs.scala-lang.org/tour/basics.html>

#### mongoDB

Twitterのデータなどを放り込むときなどに利用。
pubsub機能が公式でサポートされていればな、とか思っている。
クエリは叩けます。

## Infrastructure

### Nginx

ごく普通のレベル。
oatuh2をNginxにツッコんだぐらい。

- <https://github.com/Himenon/oauth2_proxy>

### Ansible

- Golang / C++の計算機サーバーを作成経験あり
- ユーザー管理

#### 直接実験した記事

- <http://www.archiveknow.com/2017/04/ubuntu-server-1604hddunix.html>
- <http://www.archiveknow.com/2017/04/ubuntuufwiptables.html>

### Vagrant

**今はもう使っていない**。Docker以前の開発環境で利用。
ディストリビューションからVagrant用のBoxを1から作ったことがある。

関連記事：<http://www.archiveknow.com/2017/04/vagrant-box.html>

### Kubernetes

メインのデプロイ環境。
[入門 Kubernetes](https://www.oreilly.co.jp/books/9784873118406/)の
6,7割程度は実際にやったことが在る。

Helm Chartsを公開しているので、ぜひ使って欲しいし、
他の人も公開して欲しい。今の所4つホスティングしている。

- <https://github.com/Himenon/charts<>
    - node-red
    - redash
    - scrapy-splash
    - scrapyd

Kubernetesのプロジェクトで、[GoogleCloudPlatform/agones](https://github.com/GoogleCloudPlatform/agones)
をwatch中。

## CI

### Circle CI

Version 2.0以降が使える。
ドキュメントは一部修正PRを投げてマージされている。
KubernetesのDeployフローで利用したことがある。

- <https://github.com/circleci/circleci-docs>

### Travis CI

PublicでCIを回す時はTravis CIを利用する。
自分で仕込める。

### Werker

使ったことはあるが、Circle CIのほうが使いやすかった。

### Fastlane

仕込まれているものを使っただけで、設定はしたことがない。

## Cloud

[酔いどれGCPUG 2018/03/02](https://gcpug-tokyo.connpass.com/event/78667/)というイベントでLTしてきた事がある。
詳細は[酔いどれGCPUG で発表してきました](/presentation/2018/03-02-Yoidore-GCPUG-LT/)に書いてある。

### AWS

EC2とS3程度鹿利用したことがない。GCP民。
AuroraやDynamoDBに興味がある。

### Google Cloud Platform

ざっと使えるかなというのもは次の通り。

- Kubernetes Engine
- Cloud Functions
- Cloud Storage
- Cloud SQL
- Persistent Volume
- Cloud Load balancing
- Cloud DNS
- BigQuery
- CLoud Pub/Sub
- Data Studio
- Stackdriver
- Container Registry
- Container Builder

2017年11月ぐらいから勉強を初めて使えるようになった。
情報収集に関してはGCPUGのSlack、GCPのアーキテクチャ実践レポート、
Twitterなどから逐次吸い上げ。

#### やったこと

- GKEのCI/CD設計
    - Github + Circle CI + Container Builder + Container Registry + GKE + Helm
    - マイクロサービスがsubmoduleの場合の設計を行った。
- GKEを含んだデータ基盤の構築
- GCFのCI/CD設計
    - Github + Circle CI

## Tool

効率が上がるなら投資を惜しまない系です。

### Adobe

- Lightroom (いまはほぼこれ)
- Photoshop (Ligtroomで物足りなくなったら)
- Illustrator (大学時代の図はほとんどこれ)
- Premiere Pro
- InDesign (本を作ったことがある)

### Modeling

- Blender (大学院の修士論文発表のときの図作成ツール)

### CAD

- DraftSight
- AutoCad (2D図面)

### Mac Application

- Alfred
- Filedrop
- HyperSwitch
- Macs Fan Control
- Magnet
- MindNode
- OmniDiskSweeper
- Quiver
- Reeder
- Sketch
- Skim
- Yoink

## 次に学ぶことリスト

1. Streaming系
    - 動画配信したい
    - リアルタイム性を求めて
1. 速さを求めて
    - C/C++
    - Go
    - Scala
1. セキュリティ系
    - より堅牢に、強くなりたい。
1. マイクロサービス系
    - gRPC
    - Task Queue
    - Actor Model
    - 分散処理
1. ネットワーク系
    - 電子を感じたい(意訳: 物理レイヤーが向きだなるまでOSI層を掘り下げていきたい)
1. Event駆動プログラミング
    - Cloud FunctionとかPub/Subを時前で実装できるレベルになりたい
    - Nginxすぎょい

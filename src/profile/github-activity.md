# Githubの活動状況

## 最近力を入れているもの

- [Himenon/hakka-py](https://github.com/Himenon/hakka-py)
    - Workerを作成するためのもの。FlaskとCeleryとrqにインスパイアされた感じ。
    - NodeJS版など、他の言語でも簡単にコンテナをワーカー化できるようなものを画策中
    - pytest-watchを利用してTDD。
- [Himenon/SmallWork](https://github.com/Himenon/SmallWork)
    - WEBアプリケーションの"なうい"技術を追いかけるようのリポジトリ（ちまちま更新）

## どこに行っても役に立つやつ

- [Himenon/oauth2_proxy](https://github.com/Himenon/oauth2_proxy)
    - oauth2_proxyが入ったNginxでReverse Proxyした時に、GoogleなどのOAuth認証がかかるようなもの。
    - それを複数のドメインに対して行ったサンプルコード
    - [記事](/server/Multiple-Reverse-Proxy-Sapmle-with-oauth2_proxy/)を書いて紹介しています。
- [Himenon/charts](https://github.com/Himenon/charts)
    - KubernetesのChartsリポジトリ
    - redashは公式のものなどが無かったので自作しています。(`helm install himenon/redash`でインストールDONE)
    - Kubernetesのことを知らないとそもそも作れないやつです。

## 勉強用リポジトリ

基本Privateの勉強用のリポジトリです。見えない部分のコミットはこっちに寄っています。
もともと130位リポジトリを保有していたのですが、管理できなくなったので"◯◯Workspace"でひとまとめにしています。

非公開の場合は諸般の事情により、なので、面識のある人しか見せていません。

- (公開中) [Himenon/iosWorkspace](https://github.com/Himenon/iosWorkspace)
    - GPS
    - 描画
    - 音（録音/再生）
    - 動画
    - 写真
- (非公開) [Himenon/PythonWorkspace](https://github.com/Himenon/PythonWorkspace)
    - Flask
    - GUI(tk, wxPython, Kivy, PyQt)
    - Design Pattern
    - SeleniumGrid
    - 分析計: Matplotlib / Numpy / ffmpeg
    - Web Application
- (非公開) [Himenon/FrontEndWorkspace](https://github.com/Himenon/FrontEndWorkspace)
    - Chromeの拡張機能
    - 静的サイトジェネレーター用のテンプレート
    - タスクランナー
    - React
    - 可視化ツール系

## 過去の作品

一応、大学時代に作っていたアプリケーション。

- (非公開) [Himenon/BookMaker](https://github.com/Himenon/BookMaker)
    - rails4.2.3で作成
    - MarkdownからPDFを作成するためのウェブアプリケーション
    - pandocを利用
    - 自動保存機能の実装を行っている
    - gulp + Coffee Script
    - 全体的にモノリシック
    - 制作：1人

---
title: "DockerをPycharmで使う"
description: "バックグラウンドでDocker内部のPythonを参照するように設定する"
keywords:
  - docker
  - pycharm
createdAt: 2018-09-13 04:13:53
updatedAt: 2019-05-22 01:08:17
---

## Project Interpreterの設定

```
Preference > Project: [Project Name] > Project Interpreter
```

1. 歯車を押す
2. **Add Remote** を選択
3. **Docker Compose** にチェックを入れる
  - **Server** に名前
  - Configuration file(s):に `docker-compose.yml` を選択
  - Serviceを選択
  - Python interpreter path にdocker環境下でpythonを実行するコマンドを入力


## Python Consoleの設定

```
Preference > Project: [Project Name] > Build, Execution, Deployment > Console > Python Console
```

1. **Python interpreter** のドロップダウンを開く  
2. `Remote Python` が出てきているので、選択


インタプリタは動かない模様

- [Python console fails with volumes value has non-unique elements error](https://youtrack.jetbrains.com/issue/PY-24971)

## 参考

- [Docker 1](https://www.jetbrains.com/help/pycharm/docker.html)
- [Docker 2](https://www.jetbrains.com/help/pycharm/docker-2.html)
- [Configuring Remote Interpreters via Docker](https://www.jetbrains.com/help/pycharm/configuring-remote-interpreters-via-docker.html)
- [Configuring Remote Interpreters via Docker Compose](https://www.jetbrains.com/help/pycharm/configuring-remote-interpreters-via-docker-compose.html)

- [PyCharm 172.3544.46 Release Notes](https://confluence.jetbrains.com/display/PYH/PyCharm+172.3544.46+Release+Notes)

Unresolve Referenceと出た場合

- [Why PyCharm can't resolve reference for a remote Docker interpreter?](https://intellij-support.jetbrains.com/hc/en-us/community/posts/115000373944-Why-PyCharm-can-t-resolve-reference-for-a-remote-Docker-interpreter-)
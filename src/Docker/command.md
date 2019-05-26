---
title: "Dockerコマンド"
createdAt: 2018-09-13 04:06:08
updatedAt: 2019-05-21 09:35:05
---

使っているときは、こんなの覚えているし（笑）
と思っていたんですが、3か月使わなくなって忘れてしまったので、メモ帳から取り出します。

## プロセスの確認

```bash
docker ps
```

```bash
docker-compose ps
```

## コマンドの実行

```bash
docker exec -it [container id] [command]

# ユーザーを指定
docker exec -it --user [desired_user] [container id] [command]
```

```bash
# 起動していない場合
docker-compose run [container name] [command]

# すでに起動している場合
docker-compose exec [container name] [command]
```

### 検証用に一発コマンドでpureな環境に入る

```bash
docker run -it --rm alpine:3.3 /bin/sh
docker run -it --rm centos:7 /bin/bash
docker run -it --rm ubuntu:14.04 /bin/bash
```


* 参考：[Ubuntu や Alpine Linux をワンコマンドで瞬時に立ち上げる](https://qiita.com/dtan4/items/3be396665f9305428f4f)

## イメージの停止・削除

### すべてのdocker psを停止

```bash
# bash, zsh
docker stop $(docker ps -a -q)

# fish
docker stop (docker ps -a -q)
```

### コンテナの削除

```bash
docker rmi `docker images -q`
docker rm -f `docker ps -a -q`

# fish
docker rm -f (docker ps -a -q)
```

### Docker psのNoneを消す

```bash
# bash
docker rmi $(docker images -f "dangling=true" -q)

# fish
docker rmi (docker images -f "dangling=true" -q)

docker images | awk '/<none/{print $3}' | xargs docker rmi
```

### docker-composeの場合

```bash
docker-compose stop
docker-compose rm
```

## Volume系

### データの永続化

開発環境で、MySQLとかのバックアップ撮っておきたいなというとき。

#### Mountする

現在いるディレクトリをサクッとコンテナにマウントして検証したいとき。

```bash
docker run  -v $(pwd):/work -w=/work -it [image name] [command]
```

#### 自前で用意したくないとき

```bash
docker volume create [volume name]
```

* https://docs.docker.com/storage/volumes/#start-a-container-with-a-volume

MySQL 5.7を使ってたときに一瞬ハマったやつ

* [mysql/5.7/docker-entrypoint.sh](https://github.com/docker-library/mysql/blob/master/5.7/docker-entrypoint.sh)
* [MySQL 5.7のmysqld --initializeと鶏卵問題](http://d.hatena.ne.jp/hirose31/20161004/1475582156)
* [--ignore-db-dir=dir_name](https://dev.mysql.com/doc/refman/5.7/en/server-options.html#option_mysqld_ignore-db-dir)

### コンテナ内からホストへファイルをコピーする

```
docker cp <containerId>:/file/path/within/container /host/path/target
```

* 参考
    * [Dockerでホストとコンテナ間でのファイルコピー \- Qiita](https://qiita.com/gologo13/items/7e4e404af80377b48fd5)
    * [Copying files from Docker container to host \- Stack Overflow](https://stackoverflow.com/questions/22049212/copying-files-from-docker-container-to-host)

## 環境変数

docker-composeを使っている場合

- https://docs.docker.com/compose/reference/envvars/
- https://suin.io/535


個人的には、direnvで事足りている

- https://github.com/direnv/direnv

## Inspector

https://docs.docker.com/engine/reference/commandline/ps/#filtering

### --formatコマンド

```bash
# NAME CONTAINER_ID IMAGE
docker ps --format "table {{.Names}}\t{{.ID}}\t{{.Image}}"

# NAME CONTAINER_ID IP
docker inspect --format '{{ .NetworkSettings.IPAddress }}' [CONTAINER NAME]

# NAME CONTAINER_ID IMAGE
docker ps --format "table {{.Names}}\t{{.ID}}\t{{.Image}}\t{{.Networks}}\t"
```

### ネットワークの調査

```bash
$ docker inspect -f '{{.State.Pid}}' [container_name_or_id]
```

* [netstat \- Docker: any way to list open sockets inside a running docker container? \- Stack Overflow](https://stackoverflow.com/questions/40350456/docker-any-way-to-list-open-sockets-inside-a-running-docker-container)

---
title: "Docker Swarmで使うコマンド"
description: "クラスター操作のコマンド"
keywords: "docker,swarm,image,api"
createdAt: 2018-09-13 04:13:53
updatedAt: 2019-05-22 01:08:17
---

## サービスの確認

```bash
docker service ls
```

## プロセスの状態を確認

```bash
docker service ps [NAME]
```

## swarmが管理しているコンテナのログを表示

```bash
docker service logs [Container ID]
```

tail

```bash
docker service logs [Container ID] -f
```

## docker-compose.ymlを利用したDeploy

```bash
docker stack deploy -c docker-compose.yml
```

## 連結しているnodeのIPアドレスを調べる

shなどのシェルで使えるワンライナー

```bash
for NODE in $(docker node ls --format '{{.Hostname}}'); do echo -e "${NODE} - $(docker node inspect --format '{{.Status.Addr}}' "${NODE}")"; done
```

bashなどリッチなシェルが使える場合

```bash
for NODE in $(docker node ls --format '{{.Hostname}}'); \
do echo -e "${NODE} - $(docker node inspect --format '{{.Status.Addr}}' "${NODE}")"; done
```

* https://success.docker.com/article/how-can-i-find-node-ips


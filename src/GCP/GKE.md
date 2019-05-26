---
title: "GKEのコマンド"
createdAt: 2018-03-26 06:03:09
updatedAt: 2019-05-21 11:22:01
---

# GKEのコマンド

## クラスターのリサイズ

単一ゾーン

```bash
$ gcloud container clusters resize CLUSTER_NAME --size
```

マルチゾーン

```bash
$ gcloud container clusters resize CLUSTER_NAME --node-pool NODE_POOL --size SIZE
```

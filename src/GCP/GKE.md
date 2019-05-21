---
title: "GKEのコマンド"
createdAt: 2019-05-21 10:46:07
updatedAt: 2019-05-21 10:46:07
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

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

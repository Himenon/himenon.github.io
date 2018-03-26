# Kubernetesでよく使うコマンド（コピペ用）

## コンテキストの確認

```
$ kubectl config get-contexts
```

## コンテキストの切り替え

docker edgeとGKEを切り替えたりするときに使う

```
$ kubectl config use-context

# Docker for Edge
$ kubectl config use-context docker-for-desktop
```


## DefaultのNamespaceの変更

`--namespace=`が打つのがめんどくさいときに使う

```bash
kubectl config set-context (kubectl config current-context) --namespace=
```


## Deployment, Service, Podsを一気に確認する

```
kubectl get deploy,svc,po
```
---
title: "Kubernetesに配置したNginxでアクセス制御する"
createdAt: 2019-05-21 10:46:07
updatedAt: 2019-05-21 10:46:07
---

# Kubernetesに配置したNginxでアクセス制御する

<p id="created_at">作成日: <time dateTime="2018-02-19T01:30">2018/02/19</time></p>

## TL;DR

コマンドの場合

```
$ kubectl patch svc nodeport -p '{"spec":{"externalTrafficPolicy":"Local"}}'
service "nodeport" patched
```

Serviceの設定の場合

```
service.spec.externalTrafficPolicy = Local
```

- Services | Kubernetes<https://kubernetes.io/docs/concepts/services-networking/service/#type-loadbalancer>
- Using Source IP | Kubernetes<https://kubernetes.io/docs/tutorials/services/source-ip/>

## 背景

NginxをL7ロードバランサー兼、リバースプロキシとして利用していて、
Nginxでリクエスト元のIPアドレスを制限したい時があります。

例えば、社内からアクセスはできるが、社外からは不可にするなどです。

## 検証

Kubernetesを利用していると、ServiceかIngressにExternal IPを割り当て、そこにアクセスしてきます。

Serviceの`Type=LoadBalancer`のみを指定して、その他の設定をデフォルトのまま指定すると、
`service.spec.externalTrafficPolicy `の値は`Cluster`が指定されます。

これは、エンドポイントに送信される送信元のIPアドレスが**Cluster IP**になっており、アクセスログを見てみると、Cluster IPからアクセスされているのが分かります。

{!assets/doc-templates/last-message.md.tpl!}

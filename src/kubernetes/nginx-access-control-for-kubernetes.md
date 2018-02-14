# Kubernetesに配置したNginxでアクセス制御する

<p id="created_at">作成日: <time datetime="2018-02-14T01:30">2018/02/14</time></p>

## 結論

コマンドの場合

```
$ kubectl patch svc nodeport -p '{"spec":{"externalTrafficPolicy":"Local"}}'
service "nodeport" patched
```

Serviceの設定の場合

```
service.spec.externalTrafficPolicy = Local
```

- Services | Kubernetes<br/><https://kubernetes.io/docs/concepts/services-networking/service/#type-loadbalancer>
- Using Source IP | Kubernetes<br/><https://kubernetes.io/docs/tutorials/services/source-ip/>


## 背景

NginxをL7ロードバランサー兼、リバースプロキシとして利用していて、
Nginxでリクエスト元のIPアドレスを制限したい時があります。
例えば、社内からアクセスはできるが、社外からは不可にするなどです。

Kubernetesを利用していると、ServiceかIngressにExternal IPを割り当て、
そこにアクセスしてきます。

ServiceのType=LoadBalancerのみを指定してデフォルトのまま指定すると、`service.spec.externalTrafficPolicy `の値は`Cluster`が指定されます。
これは、endpointに送信される、送信元のIPアドレスがCluster IPになっており、アクセスログを見てみると、、Cluster IPからアクセスされているのが分かります。

TODO 続きを書く


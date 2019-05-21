---
title: "Error: incompatible versions client[v2.8.2] server[v2.7.2]"
createdAt: 2019-05-21 10:46:07
updatedAt: 2019-05-21 10:46:07
---

# Error: incompatible versions client[v2.8.2] server[v2.7.2]

<p id="created_at">作成日: <time dateTime="2018-03-19T22:30">2018/03/19</time></p>

```bash
$ helm install stable/redis
Error: incompatible versions client[v2.8.2] server[v2.7.2]
```

どうやらVersionがClientとServerで異なるようである。

```bash
$ helm version
Client: &version.Version{SemVer:"v2.8.2", GitCommit:"a80231648a1473929271764b920a8e346f6de844", GitTreeState:"clean"}
Server: &version.Version{SemVer:"v2.7.2", GitCommit:"8478fb4fc723885b155c924d1c8c410b7a9444e6", GitTreeState:"clean"}
```

## 再度helm initしてみる

```bash
$ helm init
$HELM_HOME has been configured at /Users/himepro/.helm.
Warning: Tiller is already installed in the cluster.
(Use --client-only to suppress this message, or --upgrade to upgrade Tiller to the current version.)
Happy Helming!
```

インストールされてるから、Tillerのバージョンを上げろって言われた。

## Versionのupgrade

```bash
$ helm init --upgrade
$HELM_HOME has been configured at /Users/himepro/.helm.

Tiller (the Helm server-side component) has been upgraded to the current version.
Happy Helming!
```

サーバー側のバージョンが上がった模様。
確認してみる。


```bash
$ helm version
Client: &version.Version{SemVer:"v2.8.2", GitCommit:"a80231648a1473929271764b920a8e346f6de844", GitTreeState:"clean"}
Server: &version.Version{SemVer:"v2.8.2", GitCommit:"a80231648a1473929271764b920a8e346f6de844", GitTreeState:"clean"
```

おしまい。


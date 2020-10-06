---
title: "2018年3月2日 酔いどれGCPUG で発表してきました"
description: "GKEを数ヶ月扱ってきた中で、最初に見ておくと良かったね、というものをまとめました"
tags: [gke, google kubernetes engine, 発表]
---

<script async className="speakerdeck-embed" data-id="f50568a9df364fd3836f1167e1b3b96b" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js"></script>

## はじめに

「GKE始めるにあたって最初に知っておきたかったこと」というタイトルで発表しました。

<!--truncate-->

※ GKE = Google Kubernetes Engine

LTをした動機は、KubernetesをGoogle Cloud Platformで使うにあたって、
参入障壁がだいぶ高かったので、もっといろんな人が使って、情報を発信してくれるといいな、
というところからです。

説明しきれなかった部分などがあるので、補足的に載せておきます。

## GKEを使う時に必要な知識

GKEを使うにあたっては大きく以下の2つの知識が必要です。

- Gogle Cloud Platform (略称 GCP)
- Kubernetes (略称 k8s)

**GCP**

GCPを初めて使った当初は公式のチュートリアルをコツコツとやって、
このサービスはこれができるのか、あれができるのか、でもお金はこれだけかかるのか、
とかいろいろ試してみると分かります。

**Kubernetes**

Kubernetesは実際にコンテナを載せて、ロードバランサーの設定から、
Podの構成を考えたり、開発環境と本番環境をどうやって切り替えるか、
といったところを実際に手を動かしてやってみるのですが、量が多いです。
（慣れてしまえば、実際にはそうでもないのですが）

どちらにせよ、学習コストが結構かかります。
なので、発表では最初にこれを知っておけば楽ができる、ということにフォーカスを当てています。

## それぞれの章について

次のような章立てで資料を構成しています。

1. Helm
2. 組み合わせ
3. 周辺ツール
4. 情報源

それぞれの章について、もっともっと話したいことがたくさんあったのですが、
今回はぐっとこらえて、全体感を大雑把に説明しました。

ただ、ここでは文字をたくさん書けるので、次に何をやるといいの、というところまで載せて置こうと思います。

一度資料を見た人は復習しながら、初めての人は追加情報としてこれ以降をご覧ください。

### 1. Helm

Helmというkubernetesのパッケージマネージャーがあります。Emacsのhelmではありません(笑)。

- <https://github.com/kubernetes/helm>
- <https://docs.helm.sh/>

helmは何を解決してくれるかというと、設定ファイルをテンプレート化してくれるということです。

#### helmを使わない場合の例

具体的に説明します。Podという単位でKubernetes上にコンテナをデプロイするのですが、
1つのコンテナに対して様々な設定を書く必要があります。

コンテナに関してはdockerを利用するのですが、仮に[hello-world](https://hub.docker.com/r/library/hello-world/)をデプロイしようとすると、[デプロイメント](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/)
という設定ファイルを記述していきます。

`deployment.yaml`というファイル名で以下の設定を記述します。

```yaml
# この設定で動くかどうか確認していませんが、設定内容自体は正しいはずです
apiVersion: extensions/v1beta1     # Version
kind: Deployment                   # マニフェストの種類
metadata:
  name: docker-hello-world         # 名前
  labels:
    app: docker-hello-world        # Deploymentのラベル
spec:
  replicas: 1                      # podのレプリカ数
  template:
    metadata:
      labels:
        app: docker-hello-world    # ラベル
    spec:
      containers:
        - name: docker-hello-world # コンテナの名前
          image: hello-world:linux # イメージ名とタグ
```

Kubernetesへの適用は

```bash
kubectl apply deployment.yaml
```

とすれば完了です。

さて、ここで本番環境、開発環境を切り分けたいとき、
同じ設定ファイルを使うのですが、これをコピーして2つのデプロイメントファイルを作る、ということを想像してみて下さい。

かなり嫌です。

一番変えたいのはコンテナのイメージのタグだけだったりするのに、他の項目まで面倒をみるとなると叫びたくたくなります。

これを解決してくれるのがhelmです。

#### helmを使った場合の例

早速テンプレート化していきます。今回はイメージだけテンプレート化します。
テンプレートはhelmコマンドで作成できます。

```
helm create hello-world-sapmle
```

ここで作成されるテンプレートは次のようになります。

```
hello-world-sample/
├── Chart.yaml
├── charts
├── templates              # テンプレート化したい設定ファイルをここに溜める
│   ├── NOTES.txt
│   ├── _helpers.tpl
│   ├── deployment.yaml
│   ├── ingress.yaml
│   └── service.yaml
└── values.yaml
```

ただ、今回の説明ではdeploymentだけあればいいので、次のようにしておきます。

```
hello-world-sample/
├── Chart.yaml
├── charts
├── templates
│   ├── NOTES.txt
│   ├── deployment.yaml
└── values.yaml
```

`deployment.yaml`を書き直します。

```yaml
# この設定で動くかどうか確認していませんが、設定内容自体は正しいはずです
apiVersion: extensions/v1beta1     # Version
kind: Deployment                   # マニフェストの種類
metadata:
  name: docker-hello-world         # 名前
  labels:
    app: docker-hello-world        # Deploymentのラベル
spec:
  replicas: 1                      # podのレプリカ数
  template:
    metadata:
      labels:
        app: docker-hello-world    # ラベル
    spec:
      containers:
        - name: docker-hello-world # コンテナの名前
          image: {{ .Values.image.repo }}:{{ .Values.image.tag }} # イメージ名とタグ
```

凄くシンプルなのですが、

```yaml
image: hello-world:linux
```

が

```
yaml: {{ .Values.image.repo }}:{{ .Values.image.tag }}
```

に変わりました。別途`values.yaml` というファイルに、実際に入れる値を記入します

```yaml
image:
  repo: hello-world
  tag: linux
```

ローカル環境からkubernetesに対して設定を適用するためには

```
$ helm install ./hello-world-sample --name=hello-my-sample
```

とすれば完了です。`helm create`コマンドではじめに作られる`values.yaml`はデフォルト設定を記述しますが、
値を切り替えたい場合は次のようにします。
仮に、`another-values.yaml`というファイルに別の設定を書いた場合、

```
$ helm install -f ./another-values.yaml ./hello-world-sample --name=hello-my-sample

# アップグレードする場合は、helm upgradeコマンドを使用します
$ helm upgrade hello-my-sample -f ./another-values.yaml ./hello-world
```

とすれば適用できます。設定ファイルだけを切り替えるだけで良いので、
例えばブランチ名をprefixとしてvalues.yamlファイルを切り替えるなどするとCIの設計が簡単になります。

#### 次にやること

テンプレート化が完了すると非常に開発効率が上がります。
それに伴い、様々なことが自動化しやすくなるので次のことをやっていくといいでしょう。

- KubernetesのNamespaceの設計
- Githubのブランチ名の設計(KubernetesのNamespaceと対応させる等)
- CIツールでデプロイ/テストフローの設計
- Helmのホスティング(Public/Private)
- Helm以外のツールを探す(参考資料)

つまり、デプロイフローの設計を行うことで、開発ルールの全般的な設計ができるようになります。


**参考資料**

- [2018/01/10 Kubernetes YAMLの壁](https://deeeet.com/writing/2018/01/10/kubernetes-yaml/)
- [codefresh](https://codefresh.io/)

### 2. 組み合わせ

主にGCPのサービスとの組み合わせの話です。
今回、Container BuilderとCloud SQL、Cloud Storageを中心としたざっくりとした話をしました。

Kubernetesと何をどう連携させていくか、というのをかる〜〜〜く説明したスライドになっています。
ちょっとだけ補足説明を加えておきます。

**Container Builder**

120回/1日までBuildが無料でできます（超えたとしても小額）。
ただ、Buildが成功したかどうか通知させたいとき、そのイベントをPub/Subの方に投げられるので、
それをトリガーにCloud FunctionからSlackに通知を投げさせています。

**Cloud Storage**

データの永続化と言われれば、必ず出てきますが、今回はhelmのPrivateホスティングで利用しました。
helmのパッケージはChartと呼ばれますが、Chartはウェブ上で公開することが可能です。
例えば次のように[bitnami/charts](https://github.com/bitnami/charts)をhelmの探索リポジトリとして加えることができます。

```bash
$ helm repo add bitnami-incubator https://charts.bitnami.com/incubator
```

ただ、やはり構成管理とかはPrivateにしておくべきものです。Google Cloud Storage(GCS)でそれが可能です。
[viglesiasce/helm-gcs](https://github.com/viglesiasce/helm-gcs)という非公式のプラグインが存在します。
実際に使うときは、これをほんの少しだけ改造してGCSにhelmをホスティングし、
gcloud authで認証を通した後にhelmから自前のchartを呼び出せるようにしています。

一貫してGCPを使う場合におすすめです。

**Cloud SQL**

これ、本当はもうちょっとサービスの内容を語りたかったのですが、本題とそれてしまうので、さくっとchartsを紹介するだけになってしまいました。

何を話たかったかというと、Cloud SQLってそれだけで従量課金なんですよね(当たり前だろ、と思う人はすみません)。
以外に一番低いインスタンスを立ち上げても数千円飛んでいってしまうと。それに、PostgreSQLはベータ版です。

要件にも依るのですが、実験的にDBを使いたい場合などPodにMySQLサーバーやPostgreSQLサーバーを立ち上げて、
Persistent VolumeをマウントさせたほうがGKEの稼働料金のみで済むということです。無論、その分のスペックは持って行かれますが。

kubernetes/chartsには

- [MySQL](https://github.com/kubernetes/charts/tree/master/stable/mysql)
- [PostgreSQL](https://github.com/kubernetes/charts/tree/master/stable/postgresql)

が存在します。つまり、

```bash
$ helm install stable/postgresql --name=test-psql
```

とするだけで、Persistent Volumeの要求が自動的に行われ、

```bash
$ helm delete --purge test-psql
```

とすれば、Persistent Volumeごと削除されます。
ここで伝えたい内容が2つ有ります。

**1. Cloud SQLを使わなくてもいいかもしれない例**

例えばですが、[redash](https://redash.io/)はユーザー管理にPostgresを利用しています。
使い方にもよりますが、分析系は内部の人間のみしか使わないので、Cloud SQLは必要ない、と判断できなくもありません。

**2. KubernetesのVolumeの勉強になる**

[kubernetes/charts - MySQL](https://github.com/kubernetes/charts/tree/master/stable/mysql)を見てみると分かるのですが、
[Persitent Volume Claim](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#persistentvolumeclaims)(PVC)の設定しか記述がありません。

Persistent Volume(PV)はただのボリュームで、
PVCはPVを要求するためだけのものです。PVCの設定で`storageClassName`を明示的に記入した場合、
既存のPVが要求されますが、無記名(`""`)、の場合、ランダムな名前のPVがGCSに生成されてマウントされます。

つまり、AWSのS3やAzureなどのボリュームをマウントしたい場合、予めPVで作成しておき、PVCは`storageClassName`でPVを参照することをするだけでよくなります。

#### 次にやること

- [プロダクトとサービス - Google Cloud Platform](https://cloud.google.com/products/?hl=en)を可能な限りたくさん触る
- Volume関連
    - [CLOUD DATA TRANSFER](https://cloud.google.com/products/data-transfer/?hl=ja)
    - [StatefulSet Basics](https://kubernetes.io/docs/tutorials/stateful-application/basic-stateful-set/)

GKEとその他のサービス連携は

- コンテナを利用するだけで解決できるもの(helm installで終わりなど)
- Kubernetesのマニフェストを書き換えるだけで解決できるもの(Volume関連)

と区別できると思います。
やはり、それを知るためにはいろいろと試してみることが手っ取り早いので、スキマ時間にチュートリアルをバンバンやっておきましょう(自戒)。

### 3. 周辺ツール

GCPのアイコンセットと、draw.ioは知っておくと便利ですよ〜、というぐらいです。

- <https://cloud.google.com/icons/>
- <https://about.draw.io/>

komposeはdocker-composeからkubernetesのマニフェストに移行する時に使う程度

- <https://github.com/kubernetes/kompose>

docker edge版を利用するとkubernetes環境がローカルに手に入るのも知っていれば、そうだね、という程度のもの。
デフォルトでkubernetesが使えるのはうれしいですね。

- <https://www.docker.com/kubernetes>

### 4. 情報源

ただのサイト紹介程度です。
古くなっていたらTwitterでぼやいていただけると....

**スライド中のリンク**

- [Top Level API Objects](https://htmlpreview.github.io/?https://github.com/kubernetes/kubernetes/blob/HEAD/docs/api-reference/v1/definitions.html)
- [kubernetes - github](https://github.com/kubernetes)
- [Google Cloud Platform - github](https://github.com/GoogleCloudPlatform)
- [All Community Tutorials BETA](https://cloud.google.com/community/tutorials/)
- [Solution Article](https://cloud.google.com/solutions/continuous-integration-helm-concourse#architecture)
- [Kubernetes Bootcamp (古いため非推奨)](https://kubernetesbootcamp.github.io/kubernetes-bootcamp/index.html)

**日本語の資料**

- [Kubernetesに入門したい by Hiroaki ONO](https://speakerdeck.com/hihihiroro/kubernetesniru-men-sitai)
Kubernetesの用語など、図付きでわかりやすく説明されています。

**発表系**

- [Kubernetes Meetup Tokyo - connpass](https://k8sjp.connpass.com/)
- [Docker Meetup Tokyo - connpass](https://dockerjp.connpass.com/)


カテゴライズした記事を別途用意しようかなと思います。


## 終わりに

GCPUGの運営の皆さん、お疲れ様でした、そして、ありがとうございました。
gcpugのslackはいつも見ていますが、ためになる情報ばかりで勉強になります。

GCPはまだまだひよっこですが、初めて触ってるときにしかわからないつまづきなどを共有して、
色んな人と情報交換できるようなればいいなと思って発表しました。

開発者が消耗せず、よりクリエイティブなことができる世界に貢献できていれば幸いです。おわり。

**GCPUGの情報**

- <https://gcpug.jp/>
- <https://gcpug-tokyo.connpass.com/>










---
title: "[イベントレポート] Cloud Native Meetup Tokyo #1"
createdAt: 2018-05-22 01:01:01
updatedAt: 2019-05-21 11:22:01
---

※特にガチ目にまとめるわけじゃないです。
独断と偏見で端折って書きます。

## 開催概要

`#1`とあって、Cloud Native Meetup Tokyoの開催理由を[@amsy810](https://twitter.com/amsy810)さんが説明。

* エコシステム多い
* 検証大変
* 同士求む

らしい。

## with NATS with Kubernetesの世界へ

<iframe src="//www.slideshare.net/slideshow/embed_code/key/8H2FNvFZYEcmKJ" width={595} height={485} frameBorder={0} marginWidth={0} marginHeight={0} scrolling="no" style={{border: '1px solid #CCC', borderWidth: '1px', marginBottom: '5px', maxWidth: '100%'}} allowFullScreen> </iframe>
<div style={{marginBottom: '5px'}}> <strong> <a href="//www.slideshare.net/hayahitokawamitsu/with-nats-with-kubernetes" title="with NATS with Kubernetesの世界へ" target="_blank">with NATS with Kubernetesの世界へ</a> </strong> from <strong><a href="https://www.slideshare.net/hayahitokawamitsu" target="_blank">Hosei uni, Faculty of Computer and Information Sciences</a></strong> </div>

Hayahito Kawamitsuさんから。

* NATSってそもそも何？
* スライドは導入を意識して作った
* 資料を既に公開しているので、手を動かしながら確認できるよ
* IoTをやる上で、メッセージングを使うのはスタンダートになっている。
    * GCPだとCloud Pub/Subとか
* CNCFがメッセージングサービスをホストしたよ
    * [CNCFがNATSをホストへ](https://www.linuxfoundation.jp/blog/cncf-to-host-nats/)
* メッセージングどんだけ流行ってるのかGCPのサンプルソリューションの登場回数から調査したよ
    * GCEが1位かと思ったけどそうじゃなかった
    * Pub/Subも10位以内にいるよ
* メッセージングモデルは3つあるよ(だいたいPub/Subの亜種)
    * Pub/Sub
    * Request/Reply
    * Queueing (Load balanced queue subscriber)
* NATSは大きく2つある
    * NATS
        * NATSサーバーに接続した後にメッセージを受取可能
    * Streaming
        * 中にNATSを持っている
        * 繋ぐ前のメッセージを受け取ることもできる
* Monitoring, Loggingあるよ
* ベンチマークとパフォーマンス
    * NATSはパフォーマンスがKafka二倍くらい....ほんと？
        * 結論から言えば、本当
        * ある程度パフォーマンスが出る
    * チューニング用のサポートツールがある

---

【感想】Cloud Pub/Subは[Cloud OnBoard - 東京](https://cloudplatformonline.com/2018-onboard-jp-tokyo.html)でもだいぶ推されいたし、Kubernetes上に自前でメッセージングシステム立てる機会があったので、面白かった。
とりあえず、NATSの性能が本当に真なら、KafkaとRedisの置き換えになるかなぁ。

## Fluent Bit vs Fluentd 1.x

<iframe src="//www.slideshare.net/slideshow/embed_code/key/hzVjSMXIbMY5Bp" width={595} height={485} frameBorder={0} marginWidth={0} marginHeight={0} scrolling="no" style={{border: '1px solid #CCC', borderWidth: '1px', marginBottom: '5px', maxWidth: '100%'}} allowFullScreen> </iframe><div style={{marginBottom: '5px'}}> <strong> <a href="//www.slideshare.net/seiyamizuno35/fluentd12-fluent-bit-97985725" title="Fluentd1.2 & Fluent Bit" target="_blank">Fluentd1.2 &amp; Fluent Bit</a> </strong> from <strong><a href="https://www.slideshare.net/seiyamizuno35" target="_blank">Seiya Mizuno</a></strong> </div>

Mizuno Seiyaさんから。

Fluentdの内部のお話からFluent Bitの話。
内部実装を追って、何やってるか検証してた。
だいぶアーキテクチャ図がわかりやすく、こういう仕組みなのか〜、ほぉ〜、という程度の理解（小並感）

マサカリ歓迎、とのことだったので実況のTwiterにfluentdの中の人から飛んでたのを補足。

<blockquote className="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">fluentdとfluent-bitの使い分けはこんな感じですね &gt; <a href="https://t.co/4M1cqDkqpX">https://t.co/4M1cqDkqpX</a> <a href="https://twitter.com/hashtag/cloudnativejp?src=hash&amp;ref_src=twsrc%5Etfw">#cloudnativejp</a></p>&mdash; SKSの申し子 (@repeatedly) <a href="https://twitter.com/repeatedly/status/998519530669277185?ref_src=twsrc%5Etfw">2018年5月21日</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>

こういうの、発表する側、聞く側とってもためになるので嬉しいです。

---

【感想】fluentd、直接導入したことないので（GKE使ったので）、ふと気になった時にこの発表思い出してみようと思った。


## サービスメッシュと仲間たち 〜Istio & Conduit〜

<script async className="speakerdeck-embed" data-id="d49488e5b2064e0486f96071ad6882fc" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js"></script>

[@amsy810](https://twitter.com/amsy810)さんから。

1行でまとめると、Istio推し。わいが検証する。

Service Meshの話。
マイクロサービスは良いけど、複雑化していくよね、どうやって管理していくの、という導入から、
Istio, Conduit, Linkerdのコンテナパターンと機能・性能比較まで。
IstioはVMまで境界に含めれるらしい、というのは知らなかった。
ただ、Istioのバージョンは0.7でいつGAになるのか、わからないので本番投入はまだ。
あとはレイテンシー問題もあるので、高レイテンシーが許容されるところじゃないとまだ使えない。

---

【感想】家に帰って下のサンプルを動かしてみた。

- [Bookinfo - Istio](https://istio.io/docs/guides/bookinfo.html)
- [Integrating Virtual Machines - Istio](https://istio.io/docs/guides/integrating-vms.html)

YAMLファイルはあるけど、アプリケーションの実装コードがなかったので、`kubectl exec`でアクセスして確認。

- [「サービスメッシュ」「Istio」って何？　どう使える？　どう役立つ？ - @IT](http://www.atmarkit.co.jp/ait/articles/1802/09/news015.html)

サービスメッシュはInjectionするだけなので、
アプリケーション側のエンジニアは特に意識しなくても、良さそうということは分かった。


## LT

[@tn961ir](https://twitter.com/tn961ir)さんから。

**スライドは未公開？**

- **Cloud Native**の定義のPRがあがってる
    - [Create Cloud Native Definition #117](https://github.com/cncf/toc/pull/117)
- [Nginx Unit](https://www.nginx.com/products/nginx-unit/)の話
    - できること/できないことの紹介

【感想】Nginxかわいい

## 全体的な感想

* 検証してくれる方、ありがとうございます。
* まだまだ奥が深いなぁ。
* このあたりのMeetup、強そうな人ばかりで恐縮ですが、同年代の人いないんですかね。。。
* 消化出ていない部分もあるので、コツコツやろう。

気がついたらいっぱい書いてた。おわり。


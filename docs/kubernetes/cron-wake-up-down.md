---
title: "GKEをCronで起動・停止させる"
description: "GKEを平日の朝9:00に起動して、18:00に停止させるようにcronを仕込む"
keywords:
  - kubernetes
  - cron
  - start and stop
createdAt: 2018-03-30 08:41:08
updatedAt: 2019-05-21 11:22:01
---

**目標**

Google Kubernetes Engineを平日の朝9:00に起動して、18:00に停止させる。

## GCEのf1-microを作成する

GCEはf1-microで1ヶ月あたり$4.70ぐらい。
10GBのボリュームがついてくるので、+$0.52で、月に$5.22ぐらいになる

https://cloud.google.com/products/calculator/#id=66ee15ea-0b5f-4aa3-a4e8-af29ca56b810

### GCEの作成

Compute EngineのVMインスタンスを作成する。
今回は全て最小値で作っていく。

一番最後に、gcloudコマンドのシェルを吐き出してくれるので、メモしておいても良いくらい。

```
SA=
PROJECT_ID=
INSTANCE_NAME=

gcloud compute 
--project=$PROJECT_ID instances create $INSTANCE_NAME \
--zone=asia-northeast1-a \
--machine-type=f1-micro \
--subnet=default \
--metadata=type=cron \
--maintenance-policy=MIGRATE \
--service-account=$SA \
--scopes=https://www.googleapis.com/auth/devstorage.read_only,https://www.googleapis.com/auth/logging.write,https://www.googleapis.com/auth/monitoring.write,https://www.googleapis.com/auth/servicecontrol,https://www.googleapis.com/auth/service.management.readonly,https://www.googleapis.com/auth/trace.append \
--min-cpu-platform=Automatic \
--image=debian-9-stretch-v20180307 \
--image-project=debian-cloud \
--boot-disk-size=10GB \
--boot-disk-type=pd-standard \
--boot-disk-device-name=instance-1
```

### Service Accountの発行

自分の利用しているCloud Serviceのアカウントを発行しておく。


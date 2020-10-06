---
title: "Docker Registry API v2を利用してtag、manifest、imageの情報を取得する"
description: "Docker imageの情報を整理するときに利用します。"
keywords:
  - docker
  - image
  - tag
  - manifest
  - api
  - sample
  - fish
  - bash
createdAt: 2019-06-07 13:26:00
updatedAt: 2019-06-10 01:03:54
---

## Docker Registry HTTP API V2

APIを利用してDockerのイメージの情報を収集することが可能です。
エントリーポイントによっては認証をする必要があります。

### 準備

* `jq`（<https://stedolan.github.io/jq/>）をインストールしておくとスムーズです。
    * `jq`はShell上でJSONをパースするコマンドツール

### エントリーポイント

* https://hub.docker.com/v2/users/login/
    * Authentication
* https://registry.hub.docker.com/v2
* https://registry-1.docker.io/v2
    * manifestなどのメタ情報を取得する口

独自にホスティングしている場合は適宜変更すると良いでしょう。
ここでは`https://hub.docker.com/v2`をエントリーポイントとします。

## Authentication（認証）

あらかじめ環境変数にセットしておきます。

```bash
export DOCKER_USERNAME=""
export DOCKER_PASSWORD=""
```

```bash
# bash
TOKEN=$(curl -s -H "Content-Type: application/json" -X POST -d '{"username": "'${DOCKER_USERNAME}'", "password": "'${DOCKER_PASSWORD}'"}' https://hub.docker.com/v2/users/login/ | jq -r .token)

# fish
set TOKEN (curl -s -H "Content-Type: application/json" -X POST -d '{"username": "'$DOCKER_USERNAME'", "password": "'$DOCKER_PASSWORD'"}' https://hub.docker.com/v2/users/login/ | jq -r .token)
```

### namespaceの取得

```bash
# bash
curl -s -H "Authorization: JWT ${TOKEN}" https://hub.docker.com/v2/repositories/namespaces/ | jq -r '.namespaces|.[]'

# fish
curl -s -H "Authorization: JWT "$TOKEN"" https://hub.docker.com/v2/repositories/namespaces/ | jq -r '.namespaces|.[]'

```

### Repositoryの取得

```bash
# bash
USERNAME=library
curl -s -H "Authorization: JWT ${TOKEN}" https://hub.docker.com/v2/repositories/${USERNAME}/?page_size=10000 | jq -r '.results|.[]|.name'

# fish
set USERNAME library
curl -s -H "Authorization: JWT "$TOKEN"" "https://hub.docker.com/v2/repositories/$USERNAME/?page_size=10000" | jq -r '.results|.[]|.name'

```

### imageの情報取得

```bash
# bash
USERNAME=library
REPONAME=node
echo "https://hub.docker.com/v2/repositories/${USERNAME}/${REPONAME}/tags/?page_size=10000"
curl -s -H "Authorization: JWT ${TOKEN}" https://hub.docker.com/v2/repositories/${USERNAME}/${REPONAME}/tags/?page_size=10000

# fish
set USERNAME library
set REPONAME node
echo "https://hub.docker.com/v2/repositories/$USERNAME/$REPONAME/tags/?page_size=10000"
curl -s -H "Authorization: JWT "$TOKEN"" "https://hub.docker.com/v2/repositories/$USERNAME/$REPONAME/tags/?page_size=10000"

```

### manifestsを取得する

```bash
# bash
USERNAME=library
REPONAME=node
TAG=latest
# 認可情報の取得
TARGET_TOKEN=$(curl \
--silent \
"https://auth.docker.io/token?scope=repository:${USERNAME}/${REPONAME}:pull&service=registry.docker.io" \
| jq -r '.token')

curl \
--header "Accept: application/vnd.docker.distribution.manifest.v2+json" \
--header "Authorization: Bearer ${TARGET_TOKEN}" \
"https://registry-1.docker.io/v2/${USERNAME}/${REPONAME}/manifests/${TAG}" \
| jq -r '.config.digest'

```

```bash
# fish
set USERNAME library
set REPONAME node
set TAG latest
# 認可情報の取得
set TARGET_TOKEN (curl \
--silent \
"https://auth.docker.io/token?scope=repository:$USERNAME/$REPONAME:pull&service=registry.docker.io" \
| jq -r '.token')

curl \
--header "Accept: application/vnd.docker.distribution.manifest.v2+json" \
--header "Authorization: Bearer $TARGET_TOKEN" \
"https://registry-1.docker.io/v2/$USERNAME/$REPONAME/manifests/$TAG" \
| jq -r '.config.digest'

```

## 参考

* https://docs.docker.com/registry/spec/api/
* https://docs.docker.com/registry/spec/auth/token/
* https://success.docker.com/article/how-do-i-authenticate-with-the-v2-api
  * 認証（Authentication）を利用した`curl`のサンプルコードが書いてある
* https://stackoverflow.com/questions/55386202/how-can-i-use-the-docker-registry-api-to-pull-information-about-a-container-get
  * 認可（Authorization）を利用した`curl`のサンプルコードが書いてある

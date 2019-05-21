---
title: "GithubのGraphQLを利用する"
createdAt: 2019-05-21 10:46:07
updatedAt: 2019-05-21 10:46:07
---

# GithubのGraphQLを利用する

WEBUI上で手っ取り早く検証ができるのでこれを利用する

- https://developer.github.com/v4/explorer/

自己の環境でやるときは、CORS対策しないと行けないのでやや面倒

### issueの探索

```graphql
query ($owner: String!, $repoName: String!) { 
  repository(owner: $owner, name: $repoName){
    issues(first: 100, states: OPEN) {
      nodes {
        id
        title
        labels(first: 5) {
          nodes {
            id
            name
          }
        }
      }
    }
  }
}
```

```
variables {
  "owner": "Himenon",
  "repoName": "SmallWork"
}
```

### issueからlabelを外す

GraphQLのmutaitonで、removeLabelとかがあればよかったのですが、存在せず、

https://developer.github.com/v4/mutation/


Input Objectsから探しても

https://developer.github.com/v4/input_object/

labelのlの字も無かったので、v3のAPIを叩くことにしました。

#### v3

https://developer.github.com/v3/issues/

Endpoint: `https://api.github.com`

Shellはfishで合わせます

**GET**

```bash
set OAUTH_TOKEN XXXXX
set OWNER Himenon
set REPO himenon.github.io
curl -H "Authorization: token $OAUTH_TOKEN" https://api.github.com/repos/$OWNER/$REPO/labels
```

**POST**

```bash
set NUMBER 1
set LABEL todo
# /repos/:owner/:repo/issues/:number/labels/:name
curl -H "Authorization: token $OAUTH_TOKEN" https://api.github.com/repos/$OWNER/$REPO/issues/$NUMBER/labels/$LABEL -X DELETE
```

### Scheme Type


- Query
- Object
- Mutations

Objects


### 

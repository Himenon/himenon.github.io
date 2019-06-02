---
title: "GitHubで複数ユーザーのログインをした時の対応"
createdAt: 2018-04-16 01:54:44
updatedAt: 2019-05-21 11:22:01
---

# GitHubで複数ユーザーのログインをした時の対応

よくある。いろいろと設定するのが面倒くさいので、remoteに下記のフォーマットで追加して、一気に行く

```
git remote add github https://[username]@github.com/[username]/[repo].git
```
https://Himenon@github.com/Himenon/nuxt-firebase-auth.git
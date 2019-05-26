---
title: "MongoDBの基本クエリ"
createdAt: 2018-03-26 01:22:30
updatedAt: 2019-05-21 11:22:01
---

# MongoDBの基本クエリ

## 文字列中の含む

```javascript
db.client.find({
    'text': {'$regex': 'hello'}
})
```


## 配列


### 長さ

タグが3つ含まれるもの

```js
db.client.find({
    'tags': {'$size': 3}
})
```

https://docs.mongodb.com/manual/reference/operator/query/size/

### 大小比較

Where句を利用する

```js
client.find_one({
    "$where": "this.entities.hashtags > 0"
})
```

https://docs.mongodb.com/manual/reference/operator/query/where/#op._S_where

## Reference

- SQLからの比較: https://docs.mongodb.com/manual/reference/sql-comparison/

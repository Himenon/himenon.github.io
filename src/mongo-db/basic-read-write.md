# mongo DBの基本的なRead Write

## Python

### Write

```python
from pymongo import MongoClient
from dateTime import dateTime as dt

client = MongoClient('localhost', 27017)

db = client.sample_db

# sample_dbというCollectionを使う
collection = db.sample_db

sample_data = {
    "author": 'your name',
    "date": dt.now(),
    "tags": ["mongodb", "nosql", "tutorial", "docker"],
    "comment": "mongodbを使うためのサンプルです",
}

# "ドキュメント"(RDBだとレコードという) をひとつだけ書き込む
collection.insert_one(sample_data)

# Bulkデータのインサートを行う
bulk_data = [
    {"x": 1, "tags": ["dog", "cat"]},
    {"x": 2, "tags": ["cat"]},
    {"x": 2, "tags": ["mouse", "cat", "dog"]},
    {"x": 3, "tags": []}
]

collection.insert_many(bulk_data)
```

### Read

```python
from pymongo import MongoClient
from dateTime import dateTime as dt

client = MongoClient('localhost', 27017)

db = client.sample_db

collection = db.sample_db

# 全部取ってくる
for doc in collection.find():
    # docのtypeはdictionaryです
    # print(doc)
    doc

# 直近の1つだけをとってくる
one_data = collection.find_one()
print(one_data)

# 絞り込んで取得する
filter_one_data = collection.find_one({"author": "your name"})
print(filter_one_data 
```


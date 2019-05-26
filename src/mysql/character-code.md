---
title: "DockerのMySQLでUTF-8を使えるようにする"
createdAt: 2018-09-13 04:13:53
updatedAt: 2019-05-21 11:22:01
---

DockerでMySQLを使うときは、文字コードに気をつけて作成すること。
下記のDockerfileであれば、確実に日本語環境が整う。
`docker-compose`は気をつけること。mysqldのコマンドは叩かないように

```Dockerfile
FROM mysql:5.6

RUN apt-get update && \
    apt-get install -y locales && \
    rm -rf /var/lib/apt/lists/* && \
    echo "ja_JP.UTF-8 UTF-8" > /etc/locale.gen && \
    locale-gen ja_JP.UTF-8
ENV LC_ALL ja_JP.UTF-8

RUN { \
    echo '[mysqld]'; \
    echo 'character-set-server=utf8mb4'; \
    echo 'collation-server=utf8mb4_general_ci'; \
    echo '[client]'; \
    echo 'default-character-set=utf8mb4'; \
} > /etc/mysql/conf.d/charset.cnf
```

docker-compose.ymlもついでに

```yaml
services:
  db:
    build:
      context: .
      dockerfile: ./docker/mysql/Dockerfile
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: $MYSQL_ROOT_PASSWORD
      MYSQL_USER: $MYSQL_USER
      MYSQL_PASSWORD: $MYSQL_PASSWORD
      MYSQL_DATABASE: $MYSQL_DATABASE
      TZ: "Asia/Tokyo"
    ports:
      - 3306:3306
```

* 参考：["Incorrect string value" when trying to insert UTF\-8 into MySQL via JDBC? \- Stack Overflow](https://stackoverflow.com/questions/10957238/incorrect-string-value-when-trying-to-insert-utf-8-into-mysql-via-jdbc)
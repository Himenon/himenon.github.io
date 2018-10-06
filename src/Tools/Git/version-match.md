# Gitの最新のCommitメッセージに対する正規表現

## バージョン情報などに引っ掛けてなにかしたいとき用

```sh
# /bin/sh

COMMIT_MSG=`git log -1 --oneline | awk '{print $2 }'`
PATTERN='^[0-9]\.[0-9]\.[0-9]$'

if [[ $COMMIT_MSG =~ $PATTERN ]];
then
  echo MATCH
else
  echo NOT MATCH
fi
```


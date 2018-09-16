# FirebaseにおけるCloud Functions

## Trigger of Cloud function

### Cloud Firebaseのトリガー

Firestore: [NOSQLクラウドデータベース](https://firebase.google.com/docs/firestore/?hl=ja)

- <https://firebase.google.com/docs/functions/firestore-events?hl=ja>


#### When:

特定のドキュメントに変更が加えられたとき

- onCreate
- onUpdate
- onDelete
- onWrite

#### How:

```js
exports.myFunctionName = functions.firestore
  .document('users/marie')
  .onWrite((event) => {
    // ... Your code here
  });
```

### Cloud Functionを利用する

- [Cloud Functions に TypeScript を使用する](https://firebase.google.com/docs/functions/typescript?hl=ja)


### テスト

- [ローカルでの関数の実行](https://firebase.google.com/docs/functions/local-emulator?hl=ja)
- [Cloud Functions の単体テスト](https://firebase.google.com/docs/functions/unit-testing?hl=ja)
  - Stub/Mock test
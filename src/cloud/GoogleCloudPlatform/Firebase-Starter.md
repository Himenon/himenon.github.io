# Firebaseことはじめ

## 事前準備

<https://firebase.google.com/docs/cli/>

```
npm install -g firebase-tools
```

## Samples

- <https://github.com/firebase/functions-samples>


## Tutorial

```
firebase login
```

```
firebase init
# 選択肢
# Projectの選択
```

まずは空デプロイ

```
firebase deploy
```

## テスト環境

jestを用いる

```bash
$ npm install -D jest @types/jest sinon ts-jest
```

package.jsonに書きを追記

```json
"jest": {
"moduleFileExtensions": [
  "ts",
  "tsx",
  "js"
],
"testMatch": [
  "**/**/tests/*.+(ts|tsx|js)"  // ここはご自由に
],
"transform": {
  "^.+\\.tsx?$": "ts-jest"
},
"globals": {
  "ts-jest": {
    "tsConfigFile": "tsconfig.json"
  }
}
}
```

## WEB側の作成

https://firebase.google.com/docs/web/setup?hl=ja

```javascript
<script src="https://www.gstatic.com/firebasejs/4.9.0/firebase.js"></script>
<script>
  // Initialize Firebase
  // TODO: Replace with your project's customized code snippet
  var config = {
    apiKey: "<API_KEY>",
    authDomain: "<PROJECT_ID>.firebaseapp.com",
    databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
    storageBucket: "<BUCKET>.appspot.com",
    messagingSenderId: "<SENDER_ID>",
  };
  firebase.initializeApp(config);
</script>
```

- API_KEY: 
- PROJECT_ID: 
- DATABASE_NAME:





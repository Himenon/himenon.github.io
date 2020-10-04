---
title: "認証後にcypressを利用してe2eテストを行う"
description: "cypressをログイン後にCORSで弾かれずに実行する方法を紹介します"
keywords:
  - cypress
  - e2e
  - login
  - authorization
  - cors
  - cross origin
createdAt: 2020-04-03 14:00:00
updatedAt: 2020-04-03 14:00:00
---

# 動機

cypressでe2eを行う場合にログインを必要とするページがあります。
また、ログインページとe2e対象のページのURLがcross-originではなく、cypressが失敗する場合もあります。
たとえば、ローカル開発環境で実行したい場合に遭遇します。

## command.jsにログイン方法を定義する

`cypress/support/commands.js`にログイン方法を一度記述することで、`cypress/integration`内部のどこからでも呼び出せるようになります。

### fetch requestを利用してログインする方法 (CORS対策)

`cy.request`を利用することで、ログインページへ訪れずにログインできます。

```js
// cypress/support/commands.js
Cypress.Commands.add("loginByCsrf", (username, password) => {
  cy.request({
    method: "POST",
    url: "formのaction部分",
    failOnStatusCode: false,
    form: true,
    // ログインに必要なparameterを追加する
    body: {
    },
  });
  return cy;
});
```

### UIを直接操作してログインする方法

ログインページと、テスト対象のページがsame originであれば次のようにログインコマンドを定義できます。

```js
// cypress/support/commands.js
Cypress.Commands.add("login", (username, password) => {
  cy.visit("login page url"); // ログインページへ一度繊維
  cy.get('username query selector').type(username);
  cy.get('password query selector').type(password);
  cy.get("submit button query selector").click();
  return cy;
});
```

### 型定義

```ts
// cypress/support/index.d.ts
/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * UIを通じてログインする
     */
    login(email: string, password: string): Chainable<any>;
    /**
     * 直接APIを叩いてログインする
     */
    loginByCsrf(email: string, password: string): Chainable<any>;
  }
}
```

## 使い方

ユーザー情報をfixtureに保存しておきます。

```json
// cypress/fixtures/test-user.json
{
  "username": "username",
  "password": "password"
}
```

```ts
describe("e2eテスト", () => {
  // 一度だけログインすることで、各テスト項目にsessionを引き継ぐことができる
  before(() => {
    cy.fixture("test-user.json").then(loginInfo => {
      cy.loginByCsrf(loginInfo.username, loginInfo.password);
    });
  });
});
```

## 参考

* <https://docs.cypress.io/guides/guides/web-security.html#Limitations>


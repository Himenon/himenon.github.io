---
title: "Nuxt.jsをやる"
createdAt: 2018-04-08 05:47:15
updatedAt: 2019-05-21 11:22:01
---

# Nuxt.jsをやる

## はじめに

オレの求めていたものはこれだった感はんぱない

## 環境構築

```
npm install 
npm install -D pug
npm install --save axios socket.io-client
```


## Vue.jsをNuxt.jsのVue.jsの違うところ

### vuex

#### vuexのstateがfunction

```js
const state = {
    # hogehgoe
}
```

が

```js
const state = () => ({
    # hogehoge
});
```

になる。

#### modulesの扱い

通常のVue.jsでは次のように、`mymodule.js`ファイルに分離された
モジュールを登録していた。

```js
import Vuex from 'vuex'
import Vue from 'vue'
import mymodule from './mymodule'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    mymodule,
  },
  strict: process.env.NODE_ENV !== 'production'
})
```

Nuxt.jsの場合、ファイル単位で既にモジュール化されるため、`mymodule.js`内で
exportするだけでよくなった。

```js
// mymodulejs
const state = () => ({}); // ここは標準のVue.jsと異なる
const actions = {};
const getters = {};
const mutations = {};
const computed = {};
export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations,
    computed
}
```

### computed

- [算出プロパティ vs メソッド](https://jp.vuejs.org/v2/guide/computed.html#%E7%AE%97%E5%87%BA%E3%83%97%E3%83%AD%E3%83%91%E3%83%86%E3%82%A3-vs-%E3%83%A1%E3%82%BD%E3%83%83%E3%83%89)

> Date.now() はリアクティブな依存ではないため、次の算出プロパティは二度と更新されないことを意味します:

リアクティブになっていない場合は例えmapGettersであっても、更新されない








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




# VuexのModuleの使い方

## ディレクトリ構成

```
src/
├── App.vue
├── api
│   └── index.js
├── assets
│   └── logo.png
├── components
│   ├── common
│   │   ├── footer.vue
│   │   └── header.vue
│   ├── form
│   │   └── commonInput.vue
│   └── widget
│       ├── index.js
│       └── top.vue
├── main.js
├── router
│   └── index.js
└── store
    ├── index.js
    └── modules
        └── messages.js
```

## store/module/message.js

```js
import API from '../../api'

const state = {
    messageBody: ''
}

export default {
    namespaced: true,
    state
}
```

## store.index.js

```js
import Vuex from 'vuex'
import Vue from 'vue'
import messages from './modules/messages'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    myMessage: messages
  },
  strict: debug
})
```

## components/wdiget/top.vue

```js
<template lang="pug">
  .wrapper
    h1 Show Message
    p {{ messageBody }}
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'

export default {
    computed: {
        ...mapState('myMessage', {                   // 名前区間の指定
            messageBody: state => state.messageBody  // stateの指定
        })
    }
}
</script>
```

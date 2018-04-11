# Nuxt.jsを読む

## 予備知識

- http://www.embeddedjs.com/

## plugins周り

<https://github.com/nuxt/nuxt.js/blob/dev/lib/app/index.js#L158-L164>

### pluginの読見込み

```javascript
<% if (store) { %>import { createStore } from './store.js'<% } %>

/* Plugins */
<% plugins.forEach(plugin => { %>import <%= plugin.name %> from '<%= plugin.name %>' // Source: <%= relativeToBuild(plugin.src) %><%= (plugin.ssr===false) ? ' (ssr: false)' : '' %>
<% }) %>
```

### pluginの実行メソッド

```javascript
const inject = function (key, value) {
    if (!key) throw new Error('inject(key, value) has no key provided')
    if (!value) throw new Error('inject(key, value) has no value provided')
    key = '$' + key
    // Add into app
    app[key] = value
    <% if (store) { %>
    // Add into store
    store[key] = app[key]
    <% } %>
    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) return
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Vue.prototype.hasOwnProperty(key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }
```

### pluginの発火

```javascript
  <% plugins.filter(p => p.ssr).forEach(plugin => { %>
  // functionだったら実行
  if (typeof <%= plugin.name %> === 'function') await <%= plugin.name %>(app.context, inject)<% }) %>
  <% if (plugins.filter(p => !p.ssr).length) { %>
  // pluginsに複数ある場合かな？
  if (process.browser) { <% plugins.filter(p => !p.ssr).forEach(plugin => { %>
    // functionだったら実行
    if (typeof <%= plugin.name %> === 'function') await <%= plugin.name %>(app.context, inject)<% }) %>
  }<% } %>
```

第二引数のinjectについては下記のissueとdocumentを

- https://ja.nuxtjs.org/guide/plugins/
- https://github.com/nuxt/nuxt.js/issues/2233



## store.js

storeを作成するコード。77行くらいしかないのでさくっと読める

```javascript
export const createStore = storeData instanceof Function ? storeData : () => {
  return new Vuex.Store(Object.assign({
    strict: (process.env.NODE_ENV !== 'production'),
  }, storeData, {
    state: storeData.state instanceof Function ? storeData.state() : {}
  }))
}
```

`storeData instanceof Function ? storeData : () => {}` がみそで、
`storeData`はコレよりも前に、生成される。
`index.js`でVuexのインスタンスをそのままexportしていると`storeData`がFunctionに為り、そのまま返される。
そうでない場合は、moduleを探索される。
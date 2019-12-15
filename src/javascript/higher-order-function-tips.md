---
title: "JavaScriptの高階関数を利用して処理に対して明瞭な命名を行う"
description: "map, filter, reduceを利用して処理を小さく記述する工程をまとめました。"
keywords: "javascript,forEach,map,filter,reduce,例,サンプル,使い方,実用例"
createdAt: 2018-09-16 12:45:00
updatedAt: 2019-05-21 11:22:01
---

2019 アドベントカレンダー ドワンゴの15日目の記事です。

[前日の記事](../blog/2019-12-14-jsconf2019-report)中でテクニカルな話が登場しなかったので、
Pull Requestのレビューでよく指摘した内容をまとめます。

前提として、**プロダクション環境に持っていくコードで、自分以外の人間が保守する可能性のあるコード**を書くならどのように書くか、という視点で説明します。

実行環境として、Google ChromeのDevToolsで動くコードを載せていきます。参考にTypeScriptの実装も載せます。

たとえば、`map`、`filter`、`reduce`でコンパクトにできる表現を、`for`/`forEach`/`while`/`if`で処理を表現している場合です。
表現方法に一定の公式を持っていないために`map`、`filter`、`reduce`の利用方法がわからないのではないか、と見ています。

いくつかのユースケースでどのように使うか紹介します。

## ブログの情報からメニューを作る

たとえば本ブログもそうですが、「記事の一覧」を表示する機能を作りたい場合があります。
ゼロから作る場合、メニューに必要な情報に対して取得できる情報に過不足が生じている場合、最終出力までに変換を入れる必要があります。

初期データとして以下のようなものを考えます。

```javascript
const dataSet = [
  {
    title: "top",
    uri: "/top",
    description: "このwebサイトのTOPページ",
    tags: ["website"],
  },
  {
    title: "about",
    uri: "/about",
    description: "このwebサイトの説明",
    tags: ["about"],
  },
  {
    title: "blog",
    uri: "/blog",
    description: "ブログ一覧",
    tags: ["article"],
  }
];
```

出力としてほしいものは以下のようにします。

```html
<ul>
  <li><a href="https://example.com/top">top</a></li>
  <li><a href="https://example.com/about">about</a></li>
  <li><a href="https://example.com/blog">blog</a></li>
</ul>
```

### 最短で書いた場合

取りあえず動く、を目標に書いたコードは以下のように書けます。

```javascript
const ul = document.createElement("ul");
dataSet.forEach(item => {
  const li = document.createElement("li");
  const anchor  = document.createElement("a");
  anchor.text = item.title;
  anchor.href = "https://example.com" + item.uri;
  li.appendChild(anchor);
  ul.appendChild(li);
});

ul;
```

### 完成版

これと比較して、本番環境に入れる場合のコードは次のようになります。

```javascript
const createElement = ({ tagName, children }) => {
  const element = document.createElement(tagName);
  if (children) {
    element.appendChild(children);
  }
  return element;
}

const createFragment = ({ children }) => {
  const fragment = document.createDocumentFragment()
  children.forEach(child => {
    fragment.appendChild(child);
  });
  return fragment;
}

const createMenuItem = (props) => {
  const anchor = createElement({ tagName: "a" });  
  anchor.text = props.anchor.text;
  anchor.href = props.anchor.href;
  return createElement({ tagName: "li", children: anchor });
}

const createMenu = (props) => {
  const menuItems = props.items.map(createMenuItem);
  return createElement({ tagName: "ul", children: createFragment(menuItems) });
}

const generateMenuProps = (dataSet, baseUrl) => {
  const items = dataSet.map(param => {
    return {
      anchor: {
        text: param.title,
        href: baseUrl + param.uri,
      },
    };
  });
  return { items };
}

const menuProps = generateMenuProps(dataSet, "https://example.com");

createMenu(menuProps);
```

実装コードに大きな開きがあるのを見て取れます。
なぜこのように冗長的なコードになるのか説明します。

### 解説

まずは実装上のルールを以下のように定めています。

#### コーディングルール

1. classの生成や、DOMの生成する、などNative APIを叩く関数は接頭辞に`create`を利用する
2. データ変換をする関数の命名は以下のようにする
   * `convertAtoB([Aのパラメーター])`
     * 入力するAの型が確定している場合
   * `generate[TargetName]([入力パラメーター])`
     * 入力するパラメーターの型が
       * 曖昧な場合
       * 複数存在し、1つの意味で表現できない場合
3. DOM生成の関数のパラメーター`props`と命名する
   * propsはJavaScriptのObjectにする
   * props内のキー名はpropsを利用する関数が必要とするパラメーター名にする
   * propsの少勇者は生成する対象自身とする
4. 同一スコープ内で命名がかぶる場合は、関数名に具象度が1つ高い名前を含める
   * スコープ内で衝突が起きなくなるまでこれを繰り返す
5. 関数を以下の方針で分割する
   * 意味のある単位
     * 意味 ≒ 要件
   * 同じ実装が複数回繰り返された場合
   * Mock/Stubテストが必要となりそうなAPIを直接叩いている場合

#### コーディングルールを適用していく

最短で書いた場合のコードに対してルールを適用します。
ルールをコードに適用していく際、どのようにしていくかはある程度の慣れが必要ですので、
手を動かして検証してみてください。

**Step 1 意味のある単位で分割する**

最初に着手するのは要件からです。
わかりやすのは表示の部分で、最終出力は`ul > li > a`という構造を持っています。
タグだけは意味が伝わらないので、命名をします。

```
MenuItem : li > a のHTMLElement
MenuElement     : ul > MenuItem のHTMLElement
```

これにより、`MenuItem`と`Menu`を生成する必要があります。
返り値は`HTMLElement`であるため、[`document.createElement`](https://developer.mozilla.org/ja/docs/Web/API/Document/createElement)を利用することになります。
これにより、次のように命名が確定します。

```js
// document.createElementはNative APIであるため、接頭辞に`create`を採用
// create + HTMLElement(生成対象)
const createHTMLElement = () => {}
// MenuとMenuItemで名前が衝突するため、具象度を上げる
const createMenuItem = () => {}
const createMenu = () => {}
```

これで骨格が整いました。骨格だけで実装すると、次のようになります。

```js
const createMenuItem = () => {
  const li = document.createElement("li");
  const anchor = document.createElement("a");
  li.appendChild(anchor);
  return li;
}

const createMenu = () => {
  const ul = document.createElement("ul");
  // menuItemをループで生成
  // ul.appendChild(menuItem);
  return ul;
}

createMenu();
```

返り値の命名は`create[生成対象]`のうち、`生成対象`をcamelCaseにすると衝突しにくくなります。
ただ、今回は`document.createElement`を挟んでいるので、ここは生成するタグ名を利用しました。

```js
// 生成対象は引数に合致するため、変数名は`ul`となる
// https://developer.mozilla.org/ja/docs/Web/API/HTMLAnchorElement
const ul = document.createElement("ul");
// `create + [生成対象]`の公式に当てはめられるため、変数名は`menuItem`となる
const menuItem = createMenuItem();
```

余談：ちなみに、`a`タグ生成時の変数名は`a`ではないかというと、Web APIは`HTMLAnchorElement`から命名を引っ張ってきているためです。
TypeScriptであれば、`React`の型定義を参照してみるのも良いでしょう。

参考

* HTMLAnchorElement
  * https://developer.mozilla.org/ja/docs/Web/API/HTMLAnchorElement
* `@types/react`
  * https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/global.d.ts#L32
  * https://github.com/DefinitelyTyped/DefinitelyTyped/blob/288692b272b695eda00a47f93339e1e16ee756b1/types/react/index.d.ts#L2863-L3043

**Step 2 引数を決定する**

`createMenu`と`createMenuItem`引数の名前をまずは決めましょう。
今回は`document.createElement`で生成したDOMに対してパラメーターを渡すため、`props`という変数名になります。

```js
const createMenuItem = (props) => {}
const createMenu = (props) => {}
```

次に、`props`（Object）の中身を決定します。
キー名は生成するHTMLElementの名前を入れるのが良いでしょう。

```js
const createMenuItem = (props) => {
  // props = { anchor: {} };
}
const createMenu = (props) => {
  // props = { items: [ { anchor: { ... } }, { anchor: { ... } } ] }
}
```

ここで不思議だと思うのが、`createMenu`のpropsの名前が`props.menuItems`ではないことでしょう。
実はこれルールにも書きましたが、`props`の所有者は生成対象、つまり`menu`だと考えると、
`menu.items`と読み取ることができます。これによりうまく階層構造を表現できます。

ここまでを実装に落とすと、

```js
const createMenuItem = (props) => {
  const li = document.createElement("li");
  const anchor = document.createElement("a");
  anchor.text = props.anchor.text;
  anchor.href = props.anchor.href;
  li.appendChild(anchor);
  return li;
}

const createMenu = (props) => {
  const ul = document.createElement("ul");
  props.items.forEach(item => {
    const menuItem = createMenuItem(item);
    ul.appendChild(menuItem);
  });
  return ul;
}

createMenu(/** Step3へ */);
```

と書くことができます。

**Step 3 与えられたデータを変換する**

Step2までではまだ実装が不十分です。`dataSet`に対して`createMenu`の引数の型が合致していません。
そのため変換が必要となります。

また、dataSetにはベースURLが存在しないため、追加する実装も必要です。
最短の実装では次のように書いていた部分です。

```js
anchor.href = "https://example.com" + item.uri;
```

つまり、`dataSet`とベースURL`https://example.com`を利用して、`createMenu`にわたす変数を生成する関数を定義します。

関数は`convertAtoB`形式か`generate[TargetName]`のどちらかになりますが、
`convertAtoB`を採用する場合は入力する側のパラメーターが意味のある形でまとまっていなければ`A`を命名することができません。つまり、今回の場合、`dataSet`とベースURLの塊に命名ができれば利用できますが、**具体的な**名前がかんたんには思いつかないので、`generate[TargetName]`形式の命名を行います。

生成対象は`createMenu`の入力変数、つまり、`Menu`の`props` -> `MenuProps`になります。
ゆえに、

```js
const generateMenuProps = () => {}
```

と関数名が決定されます。この関数の引数は`Menu`の`Props`を生成に必要な素材を渡すだけです。

```js
const generateMenuProps = (dataSet, baseUrl) => {}
```

ここまで来たら後は変換する実装コードを書くだけになります。

```js
const generateMenuProps = (dataSet, baseUrl) => {
  const items = dataSet.map(param => {
    return {
      anchor: {
        text: param.title,
        href: baseUrl + param.uri,
      },
    };
  });
  return { items };
}
```

これで完成です。結合してみると、

```js
const createMenuItem = (props) => {
  const li = document.createElement("li");
  const anchor = document.createElement("a");
  anchor.text = props.anchor.text;
  anchor.href = props.anchor.href;
  li.appendChild(anchor);
  return li;
}

const createMenu = (props) => {
  const ul = document.createElement("ul");
  props.items.forEach(item => {
    const menuItem = createMenuItem(item);
    ul.appendChild(menuItem);
  });
  return ul;
}

const generateMenuProps = (dataSet, baseUrl) => {
  const items = dataSet.map(param => {
    return {
      anchor: {
        text: param.title,
        href: baseUrl + param.uri,
      },
    };
  });
  return { items };
}

const menuProps = generateMenuProps(dataSet, "http://example.com");

createMenu(menuProps);
```

ほとんどこれで完成と言っても問題ないでしょう。
Step 4移行は体裁を整えてい作業を行います。

**Step 4**



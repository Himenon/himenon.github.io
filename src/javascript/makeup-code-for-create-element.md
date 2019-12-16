---
title: "JavaScriptでHTMLを動的に生成するときの書き方の実践例"
description: "ある程度形式だった書き方で動的な表示を生成する関数を書くことができるのでその手順を紹介します。"
keywords: "javascript,表示,書き方,例,サンプル,使い方,実用例"
createdAt: 2019-12-15 17:00:00
updatedAt: 2019-12-16 17:00:00
---

2019年アドベントカレンダー ドワンゴの15日目の記事です。（過ぎてしまっていますが）

[前日の記事](../blog/2019-12-14-jsconf2019-report)中でテクニカルな話が登場しなかったので、
普段、自分がどのようにコードを書いているのかを紹介します。

前提として、**プロダクション環境に持っていくコードで、自分以外の人間が保守する可能性のあるコード**を書くならどのように書くか、という視点で説明します。

実行環境として、Google ChromeのDevToolsで動くコードを載せていきます。参考にTypeScriptの実装も載せます。

いくつかのユースケースでどのように使うか紹介します。

## 例題：ブログの情報からメニューを生成する

たとえば本ブログもそうですが、「記事の一覧」を表示する機能を作りたい場合があります。
ゼロから作る場合、メニューに必要な情報に対して取得できる情報に過不足が生じている場合、最終出力までに変換を入れる必要があります。

### 要件定義

初期データとして以下のようなものを考えます。

```js
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

## 最短で書いた場合

**取りあえず動く**ことを目標に書いたコードは以下のように書けます。

```js
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

これと比較して、本番環境に入れる場合のコードは次のように書いています。

## 完成版

```js
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

## 解説編

まずは実装上のルールを以下のように定めています。

### コーディングルール

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

それでは、最短で書いた場合のコードを見つつ、ルールを適用します。
ルールをコードに適用していく際、どのようにしていくかはある程度の慣れが必要ですので、
手を動かして検証してみてください。

### Step 1：意味のある単位で分割する

最初に着手するのは要件からです。
わかりやすのは表示の部分で、最終出力は`ul > li > a`という構造を持っています。
タグだけは意味が伝わらないので、命名をします。

```
MenuItem : li > a のHTMLElement
Menu     : ul > MenuItem のHTMLElement
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

### Step 2：引数を決定する

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
実はこれルールにも書きましたが、`props`の所有者は生成対象、つまり`menu`だと考えると
`menu.items`と読み変えることができます。これにより要件が増えた場合でも柔軟に対応できる構造を表現できます。

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

### Step 3：与えられたデータを変換する

Step2までではまだ実装が不十分です。`dataSet`に対して`createMenu`の引数の型が合致していません。
そのため変換が必要となります。

また、dataSetにはベースURLが存在しないため、追加する実装も必要です。
最短の実装では次のように書いていた部分です。

```js
anchor.href = "https://example.com" + item.uri;
```

つまり、`dataSet`とベースURL`https://example.com`を利用して、`createMenu`にわたす変数を生成する関数を定義します。

関数は`convertAtoB`形式か`generate[TargetName]`のどちらかになりますが、
`convertAtoB`を採用する場合は入力する側のパラメーターが意味のある形でまとまっていなければ`A`を命名することができません。つまり、今回の場合、`dataSet`とベースURLの塊に命名ができれば利用できますが、**具体的な**名前が簡単には思いつかないので、`generate[TargetName]`形式の命名を行います。

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

### Step 4：関数をまとめる

まずやることは関数の分割です。同じような実装を少しだけ抽象化して、まとめていきます。
目にとまるのは、`document.createElement`の部分です。

```js
const li = document.createElement("li");
li.appendChild(/** Children */);
```

このような組み合わせが散見されます。`appendChild`を利用しない場合もあるので、分岐が必要です。
DOMを生成する関数を定義する場合、`props`という引数を定義しますが、今回はもう少し簡潔に書いてみましょう。
`createElement`という関数を新たに作り、「指定されたタグのHTMLElementを生成し、子要素を追加する」処理を与えましょう。

```js
const createElement = ({ tagName, children }) => {
  const element = document.createElement(tagName);
  if (children) {
    element.appendChild(children);
  }
  return element;
}
```

名前の衝突がない場合、[分割代入](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)を行うと
冗長な書き方が避けられます。

```js
const { tagName, children } = props; // 分割代入
```

新しく定義した`createElement`を利用すると、

```js
const createElement = ({ tagName, children }) => {
  const element = document.createElement(tagName);
  if (children) {
    element.appendChild(children);
  }
  return element;
}

const createMenuItem = (props) => {
  const anchor = createElement({ tagName: "a" });  
  anchor.text = props.anchor.text;
  anchor.href = props.anchor.href;
  return createElement({ tagName: "li", children: anchor });
}

const createMenu = (props) => {
  const ul = createElement({ tagName: "ul" });
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

const menuProps = generateMenuProps(dataSet, "https://example.com");

createMenu(menuProps);
```

となります。
`createMenu`を見ていると`createElement`で生成された`ul`は後から`appendChild`でElementを追加しています。これは技術的に2点、実装の思想として1点で注意する点があります。

技術的には

1. `HTMLElement`に`NodeList`をそのまま`appendChild`できない
2. `appendChild`を都度行う場合パフォーマン的を下げるパターンがある

実装の思想的には

1. `createElement`は「子要素を追加する」処理を含む形で実装したがカバーできていない。

技術的な解消方法はシンプルです。
HTMLElementの配列（下記）を直接`appendChild`することができません。
これを行うには、[DocumentFragment](https://developer.mozilla.org/ja/docs/Web/API/DocumentFragment)の形式に変換した上で`appendChild`に渡す必要があります。

```js
// HTMLElementの配列の例
[
  <li><a>...</a></li>, // createMenuで生成したHTMLElement
  <li><a>...</a></li>, // createMenuで生成したHTMLElement
  <li><a>...</a></li>, // createMenuで生成したHTMLElement
]
```

DocumentFragmentを生成するには`document.createDocumentFragment`を利用します。
`document.createElement`と同じように扱うことができるので、`createElement`と似たようなラッパー関数を定義します。

```js
const createFragment = ({ children }) => {
  const fragment = document.createDocumentFragment()
  children.forEach(child => {
    fragment.appendChild(child);
  });
  return fragment;
}
```

これを採用すると`createMenu`は次のようにかけます。

```js
const createMenu = (props) => {
  const menuItems = props.items.map(createMenuItem);
  return createElement({
    tagName: "ul",
    children: createFragment(menuItems) // fragment化して渡すことでappendChildを消せた
  });
}
```

これで最初に提示した**完成版**へたどり着くことができました。

**参考**

* DocumentFragment<br />https://developer.mozilla.org/ja/docs/Web/API/DocumentFragment
* JavaScript 大量の要素をDOMに追加する際の、createDocumentFragmentの使い方。<br />https://qiita.com/39_isao/items/2fa8faed283d455f4181
* 七章第四回　ノードをまとめて扱う：DocumentFragment<br />https://uhyohyo.net/javascript/7_4.html

### Step 5：応用編

ここまで読んでくれた方にもう少し発展系を提示します。
**完成版**ですが、もう少し手を加えると以下のようなことができます。

* `createElement`に`createFragment`を含める
* `anchor.text =` / `anchor.href` を`createElement`の引数として渡す

これを行うことで、`createElement`がより抽象化され、`createMenu`、`createMenuItem`をシンプルに書くことができます。
下記にそれを記すので、自分でチャレンジしたい方はまだスクロールをここで止めてください。

変更した関数だけ以下に記述します。

```js
const createElement = ({ tagName, children, ...props }) => {
  const element = document.createElement(tagName);
  // propsは`tagName`, `children`を除いたパラメータを受け取ることを利用し、
  // createElementの残りのkeyを生成するHTMLElementのプロパティのキーとして利用する
  Object.entries(props).forEach(([key, value]) => {
    element[key] = value;
  });
  if (children) {
    // 配列の場合はcreateFragmentを通す
    element.appendChild(Array.isArray(children) ? createFragment({ children }) : children);
  }
  return element;
}

const createMenuItem = (props) => {
  return createElement({
    tagName: "li",
    children: createElement({ tagName: "a", ...props.anchor }),
  });
}

const createMenu = (props) => {
  return createElement({
    tagName: "ul",
    children: props.items.map(createMenuItem), // childrenは配列も受け取ることができる
  });
}
```

これにより、`createMenu`と`createMenuItem`が`createElement`だけで表現できるようになりました。

Step5の実装コードは[こちら](https://gist.github.com/Himenon/d1cea3447b88a9248c82d82dcac1241b)。

## まとめ

* 要件に対する最短のコーディングを提示し、**プロダクション環境に持っていくコードで、自分以外の人間が保守する可能性のあるコード**を前提としたリファクタリングを行いました。
* コーディングルールを決めておくことで、命名が自動的に決定されることを紹介しました。

## 最後に 

実は、`createElement`の引数や構造化はReactの`React.createElement`あたりを意識しつつ作っています。
JSXを利用してReactを見ていると今回のような`createElement`はなかなか目にしませんが、本質的には近い処理を行っています。
また、Reactの管理下にあると、DOMの差分変更を行えたりより多くの恩恵を受けることができます。
とはいえ、これは`createElement`を深掘って行ったときの話です。
今回の本題はコーディングを勧めていく上の考え方を紹介することにあります。
ある程度のコーディングルールを決めておくことで命名や構造化はほとんどの場合、要件を固めた時点で確定します。
本記事でその一端でもつかめると書いた甲斐があったなぁと思います。

2019年も残すところ僅かです。みなさんんおより良い開発を願ってます！

それでは！

---
title: "mdx-jsの実装を解読するまでの話"
description: "日付変換"
keywords: "JavaScript,JSX,TypeScript,React,mdx-js"
createdAt: 2018-12-12 03:05:00
updatedAt: 2020-03-26 00:15:00
---

この記事は 第2のドワンゴ [Advent Calendar 2018](https://qiita.com/advent-calendar/2018/dwango2) の12日目の記事です。

普段はReactを使ってフロントエンド開発のお仕事をしています。

※ お仕事とは関係ないお話です

## 話のはじまり

* フロントエンド周りのコードを自分のブログとかで動かしてコレクション化したいなぁ
* でも管理するの面倒だなぁ
* そのあたりをうまく管理する静的サイトジェネレーターないかなぁ（[StaticGen](https://www.staticgen.com/)を探した）

1つの解としては外部サービス（[CodeSandbox](https://codesandbox.io/)とか[codepen](https://codepen.io/)、[jsfiddle](https://jsfiddle.net/)）を埋め込んで利用する、に行き着くんですよね。

でも、やっぱり自分の管理下でやりたい、という支配欲（？）があって長続きしません。

「じゃあ作るか → どうやって？」となるんですけど、ゼロベースだとなかなか大変なので、GitHubをググってみて（？）[mdx-js/mdx](https://github.com/mdx-js/mdx)にたどり着きました。

こやつ、何をやっているかというと、Markdown中にJSXを利用できるようにしよう、というもの。
着想が面白くて、コードも興味深い箇所があったので今回はそれを紹介します。

## mdx-jsのざっくりした流れ

※ すごいざっくり説明するので、詳しくは[mdx-js/mdx](https://github.com/mdx-js/mdx)を見てください。

### 1. Markdown中にJSXを書く

```mdx
# ヘッダータイトル
<ExampleComponent>ここがReactによって定義されたコンポーネントに変わる</ExampleComponent>
```

### 2. `ExampleComponent`に定義したコンポーネントをあてる

```tsx
import * as React from "react";

export interface ExampleComponentProps {
  x: number;
  y: number;
}

export class ExampleComponent extends React.Component<ExampleComponentProps, {}> {
  public render() {
    return (
      <div className="my-component">
        {this.props.children} {this.props.x * this.props.y}
      </div>
    );
  }
}
```

### 3. mdx-jsを使ってビルドする

```html
<h1>ヘッダータイトル</h1>
<div className="my-component">ここがReactによって定義されたコンポーネントに変わる</div>
```

## どうやって処理するの？

最初に見たときは「JSXの変換の部分」の処理をすぐに想像できませんでした。

`package.json`をいろいろ見ると、Markdown自体をパースするのは[unifiedjs/unified](https://github.com/unifiedjs/unified)あたり。JSXを変換するものは[@babel/transform-react-jsx](https://www.npmjs.com/package/@babel/plugin-transform-react-jsx)とあたり、とすぐに暴けるのですが、コンポーネントのマッピングをどうやっているのか、なかなか見えてきません。

### 紐解いてみる

答えは[@mdx-js/runtime](https://www.npmjs.com/package/@mdx-js/runtime)のコードにありました。

* https://github.com/mdx-js/mdx/blob/v0.16.0/packages/runtime/src/index.js

v0.16.0以降のバージョンではライブラリ固有のものになりつつあるので、リンクはバージョンを固定しています。また、説明用に使うにはノイズが多いので、処理を抽出したサンプルコードを作成しました。

* https://github.com/Himenon/convert-text-to-react

本題のロジックは

* https://github.com/Himenon/convert-text-to-react/blob/master/src/converter.tsx

にあります。20行にも満たないコードです。

#### サンプルコードの使い方

[READMEのサンプルコード](https://github.com/Himenon/convert-text-to-react)にコメントをつけて説明します。

```tsx
import { convert } from "convert-text-to-react";

export interface ExampleComponentProps {
  x: number;
  y: number;
}

// 適当なコンポーネントを用意する
export class ExampleComponent extends React.Component<ExampleComponentProps, {}> {
  public render() {
    return (
      <div className="my-component">
        {this.props.children} {this.props.x * this.props.y}
      </div>
    );
  }
}

// 変換のマッピング
const components = {
  ExampleComponent,
}

// テキストを変換するを登録した変換マップにしたがって変換する
const result = convert("<ExampleComponent x={1} y={-20}>Result of multiplication:</ExampleComponent>", components);
// ReactElementを得る
```

ざーっくりとこんな感じです。

## プレーンテキストにReactのコンポーネントを適用させる処理

中身の処理を見てみます。コメントを付けながら解説すると、

```ts
import * as babel from "@babel/core";
import * as React from "react";

// JSXを含むプレーンテキストをJSのコードにトランスパイルする
export const toCode = (raw: string): string | null =>
  babel.transform(raw, {
    plugins: ["@babel/plugin-transform-react-jsx"],
  }).code;

export const convert = (raw: string, components: object): React.ReactElement<any> => {
  const code = toCode(raw);
  // キー名を取得
  const keys = Object.keys(components);
  // `keys`の並び順にcomponentsを習得
  const values = keys.map(key => components[key]);
  // React.createElementを含む関数を生成
  const create = new Function("React", ...keys, `return ${code}`);
  // 関数を実行、ReactElementを得る
  return create(React, ...values);
};
```

となります。短いですね！どんどんいきます。

### `Function`とは？

唐突に出てきたFunctionって、普段使わないですよね。
[Function \- JavaScript \| MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Function)によれば、
動的に関数を生成し利用できます。ただし、`eval`と同じくセキュリティとパフォーマンスの問題に悩まされるようです。

サンプルコードを見てみると次のようになっています。

```js
var sum = new Function('a', 'b', 'return a + b');
sum(2, 6)
```

つまり、`Function`の引数の最後以外が生成される関数の引数となり、最後の引数がJavaScriptの構文を含む関数として定義されます。

### 具体的に解説してみる

`convert`関数に渡す引数は次のように定義します。
プレーンテキストをReactElementになるまで順を追って説明すると、

```tsx
const raw = "<ExampleComponent x={1} y={-20}>Result of multiplication:</ExampleComponent>";
const components = {
  ExampleComponent,
}
convert(raw, components)
```

まずは`toCode`でJSXを含むテキストを、JSのシンタックスのコードに変換します。

```js
// IN
toCode("<ExampleComponent x={1} y={-20}>Result of multiplication:</ExampleComponent>");
// OUT
`React.createElement(ExampleComponent, { x: 1, y: -20}, "Result of multiplication:");`
```

JSXがJSのコードに分解されました。次に、`new Function`で必要な引数を用意します。

```js
// IN
const keys = Object.keys(components);
// OUT
["ExampleComponent"] // 文字列の配列

// IN　キーの順序でコンポーネントを取り出していく
const values = keys.map(key => components[key]);
// OUT
[ExampleComponent] // ReactComponentの配列
```

これらを、`new Function`の引数に渡します。

```js
// IN
const create = new Function("React", ...keys, `return ${code}`);
// 展開して書くと
const create = new Function("React", "ExampleComponent", `return React.createElement(ExampleComponent, { x: 1, y: -20}, "Result of multiplication:");`);
```

`new Function`経由ではなく、実際に`create`関数を定義した場合は次のようになります。

```js
const create = (React, ExampleComponent) => React.createElement(ExampleComponent, { x: 1, y: -20}, "Result of multiplication:");
```

もう最後はおわかりですね。

```js
// IN
create(React, ...values);
// 展開して書くと
create(React, ExampleComponent)
```

これでテキストからReactのElementに変換されました！やった！

Spread Operator（`...`）のおかげで、複数の変換マップを入れた場合にも拡張できます（[参考](https://github.com/Himenon/convert-text-to-react/blob/24eddb070b8c2d10d7b1b3136bb0a7b138d13fa6/src/__tests__/index.test.tsx#L41-L45)）。

# おわりに

タイトルに「React意識せずにReactを使いたい」と書きましたが、内部実装を気にせず使う分には達成されるのかな（？）、と思います。

巨人の力を借りて便利なツールを作るときに役に立てばいいなぁ（eval系は注意が必要ですが）。

# おまけ

JSXとか、そのへんのおもしろそうな記事とかリポジトリとかの紹介です。

* [JSXのファクトリ関数を自作する方法と、Reactと全然違う挙動をさせるサンプル](https://qiita.com/boiyaa/items/0e89d7c6cecf8a58d902)
  * これすき
* Hyperappの話
    * VDOMの取扱周りの知識が凝縮しているのでかなり勉強になった。
        * https://qiita.com/JorgeBucaran/items/c48446babe0627e25ee6
        * https://www.youtube.com/watch?v=jM9yubem0Pw
    * Node学園2017の資料がとても良かったのですが、リンクが見当たらない
        * 小さなコードで多いな利益を得るコードは勇気づけられました
        * テストの書き方が参考になる
* https://www.docz.site/
    * mdx-jsを利用しているライブラリ。最近スターを伸ばしているのだけれど、`Function`で頭を悩ましているのだろうか（？）
    * storybookから置き換わるかというとう〜ん、という感じ
* https://github.com/c8r/gen
    * `remark-react`を使った静的サイトジェネレーター（未完成のもの）。mdx-jsの作者のリポジトリにあった
    * 実装が面白かったので型をあてました https://github.com/Himenon/gen
        * さらにmdx-jsに内部実装を切り替えたものを現在作成中 https://github.com/Himenon/rocu

2018年もおわりかー。Twitterたのしい。にゃーん。


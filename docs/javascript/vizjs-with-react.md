---
title: viz.jsをReactを利用する
description: viz.jsをReactで利用する方法を紹介します。
keywords:
  - viz.js
  - react
  - 使い方
  - hooks
  - useEffect
  - typescript
---

# viz.jsとは

[GraphViz](http://www.graphviz.org)を[emscripten](https://emscripten.org)でビルドしたブラウザ用のwrapperライブラリ。

GitHubのリポジトリはArchiveされてしまっているが、npm(https://www.npmjs.com/package/viz.js)の方にはライブラリが存在するので、いまもインストールできる。

* https://github.com/mdaines/viz.js

## Install

```bash
yarn add viz.js
```

## 使い方

API(https://github.com/mdaines/viz.js/wiki/API)に大体書いてあるけれど、Interface化したものをここに残しておく。

```ts
// types/viz.js/index.d.ts
declare module "viz.js" {
  interface VizOption {
    workerURL?: string;
    worker?: any;
    Module?: Function;
    render?: Function;
  }
  interface Image {
    path: string;
    width: string;
    height: string;
  }
  interface File {
    path: string;
    data: string;
  }
  interface RenderOption {
    engine?: string;
    format: "svg", "dot", "xdot", "plain", "plain-ext", "ps", "ps2", "json", "json0";
    yInvert?: boolean;
    images?: Image[];
    files?: File[];
    nop?: number;
  }
  interface RenderImageElementOption {
    scale?: number;
    mimeType?: string;
    quality?: number;
  }
  declare class Viz {
      constructor(option: VizOption);
      renderString(src: string, option?: RenderOption): Promise<string>;
      renderSVGElement(src: string, option?: RenderOption): Promise<HTMLElement>;
      renderImageElement(src: string, option?: RenderImageElementOption): Promise<string>;
      renderJSONObject(src: string, option?: RenderImageElementOption): Promise<Object>;
  }
  export default Viz;
}

declare module "viz.js/full.render.js" {
  export declare function Module () {};
  export declare function render () {};
}
```

`tsconfig.json`で`compilerOptions.typeRoots`に追加することで、型定義が有効になる。

## Reactでviz.jsを利用する

`renderSVGElement`を利用したくなるが、Reactが監視できないので、`renderString`を変わりに利用する。
ただのHTMLのstringとして`dangerouslySetInnerHTML`にわたすことでrenderingを実現できる。

```ts
import React from "react";
import Viz from "viz.js";
import { Module, render } from "viz.js/full.render.js";

export const AppRouter = () => {
  const viz = new Viz({ Module, render });
  const [element, updateElement] = React.useState("");
  React.useEffect(() => {
    const f = async () => {
      const elem: string = await viz.renderString("digraph { a -> b }");
      updateElement(elem);
    };
    f().catch(console.error);
  });
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: element,
      }}
    ></div>
  );
};
```

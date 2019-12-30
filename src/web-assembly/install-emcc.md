---
title: emccコマンドをインストールする
description: emccコマンドをインストールする方法を紹介します。
keywords: webassembly,wasm,emcc,install,インストール,emcc command not found
createdAt: 2019-12-30 18:25:00
updatedAt: 2019-12-30 18:25:00
---

## 動機

C/C++をWebAssemblyにコンパイルする状況が発生したので、コンパイラをインストールした。

## インストール方法

インストール環境はmacOSだったので、参考文献のとおりにやってみた。

```bash
cd ~ # $HOMEディレクトリに配置するようにした
git clone https://github.com/juj/emsdk.git
cd emsdk

./emsdk install latest
./emsdk activate latest
```

バージョンを指定する方法`--build=Release sdk-incoming-64bit binaryen-master-64bit`を試してみたが、うまく行かなかったので、`latest`をインストール。
shellは`fish`を利用していたため、<https://github.com/emscripten-core/emsdk>に存在する`emsdk_env.fish`を以下のコマンドで実行した。

```fish
fish emsdk_env.fish
```

これでfish起動時にPATHが自動的に追加されると期待したが、このファイル自体を起動時に呼び出す必要がある。
shell起動時に実行するファイル`~/.config/fish/config.fish`（bashなら`.bash_profile`など）に以下のスクリプトを追加した。

```fish
source ~/emsdk/emsdk_env.fish > /dev/null
```

新しくターミナルを開き`emcc`のPATHが通っていることを確認してインストールが完了。

```
$ emcc --version                                                                                                                                         月 12/30 18:14:04 2019
emcc (Emscripten gcc/clang-like replacement) 1.39.5 (commit 369013943283939412fb2807bb0d2ded8ebd5a9e)
Copyright (C) 2014 the Emscripten authors (see AUTHORS.txt)
This is free and open source software under the MIT license.
There is NO warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
```

## emcc command not found /  Unknown command 'emcc'

`source ./emsdk_env.sh`を実行して、以下のエラーが出る場合、shellが異なることが原因だった。

```bash
$ source emsdk_env.sh

emsdk_env.sh (line 18): Missing end to balance this if statement
if [ "$SRC" = "" ]; then
^
from sourcing file emsdk_env.sh
	called on standard input

source: Error while reading file 'emsdk_env.sh'
```

これでうまく行かない場合、

```bash
bash ./emsdk_env.sh
```

などのように実行してみると良い。

関連Issue

* https://github.com/emscripten-core/emscripten/issues/5696

## 参考文献

* Mac OS X and Linux installation - WEBASSEMBLY<br /><https://webassembly.org/getting-started/developers-guide/#mac-os-x-and-linux-installation>
* C/C++からWebAssemblyにコンパイルする<br /><https://developer.mozilla.org/ja/docs/WebAssembly/C_to_wasm>

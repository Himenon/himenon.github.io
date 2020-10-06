---
title: rust入門
---

## ログ出力

### println!マクロ

`{}`はplaceholder

```rs
println!("x = {}", 1);
// x = 1
println!("x = {}", "a");
// x = a
println!("{}, {}, {}", 1, 2, 3);
// 1, 2, 3
```

## 可変変数

`mut`キーワードで定義する

```rs
let mut x = 1;
```

## 定数

```rs
const x: i32 = 2; // 変数束縛
```

コンパイル後は**インライン化**される

```
2 * x --> 2 * 2
```

## 演算

### 整数

```rs
fn main() {
  let x = 10;
  let y = 3;
  let mut z;
  z = x + y
  z = x - y
  z = x * y
  z = x / y
  z = x % y
}
```

## 型

後置修飾

```rs
let 変数名: 型
```

### 整数型

* `i8`:
* `i32`:
* `i64`:
* `i128`:
* `u8`:
* `u32`:
* `u64`:
* `u128`:

### リテラル

* ソースコード内に記述できる値：数値・文字・文字列
  * 10進数、2進数、16進数、8進数など

### 浮動少数点数

* `f32`
* `f64`

### bool型

```rs
let x: bool = true;
```

### 文字（char）

「文字」と「文字列」は異なるデータ型であることに注意

**文字型**は**シングルクォート**で囲む

```rs
let character: char = '0';
```

### タプル

定義

```rs
let val = (1, 2, 3);
```

分割代入

```rs
let (x, y, z) = val;
// 無視
let (_, y, z) = val;
```

## 条件分岐

```rs
if condition {

}
```

* AND: `&&`
* OR: `||`

## for文

```rs
for i in 0..10 {
  println!("i = {}.", i);
}
```

## while文

```rs
let mut i = 0;
while i < 10 {
  println!("i = {}.", i);
  i += 1;
}
```

## loop

```rs
let mut i = 0;
loop {
  i += 1;
  if i == 9 {
    break;
  }
}
```

## 関数定義

**返り値**

```rs
fn add(x: i32, y: i32) -> i32 {
  x + y // セミコロンがないことがポイント。セミコロンがある場合は戻り値として認識されない
}

fn add2(x: i32, y: i32) -> i32 {
  return x + y; // もしくは`return ;`をつける
}

fn main() {
  let z = add(10, 5);
  println!("10 + 5 = {}", z);
}
```

## 静的変数

* インライン化されない
* グローバル変数のデータは静的領域内のメモリ領域に格納される

```rs
static PI: f64 = 3.14;
```

## 静的可変変数

静的変数を可変にしたい場合は`mut`を付ける

```rs
static mut PI: f64 = 3.14;
```

静的可変変数を利用する場合は`unsafe`ブロックで囲む。
すなわち、安全ではないコードであることを明示的にする。

```rs
unsafe {
  2.0 * PI * radius
}
```

## マクロ

* あらかじめ定義した規則に従って置換する機能

```rs
macro_rule! マクロ名 {
  マクロの中身
}
```

## 静的メソッド

変数の値に依存しない型固有の操作

```rs
型::メソッド名();
```

## ポインタ

### 生ポインタ

```
let ポインタ変数名; *const 型名 = &変数名;
```

### 可変ポインタ

```
let mut 変数名: *const 型 = &参照先の変数名;
```

### 参照型（Box型）

```
let 変数名: Box< 型 > = Box:new(値);
```

## 配列

```
let 変数名 = [初期値;大きさ];
```

多次元配列

```
let 変数名 = [[初期値; 大きさ2]; 大きさ1];
```

## 構造体

宣言

```rs
struct Human {
  age: i32,
}
```

メソッドの実装

```rs
impl Human {
  fn say(&self) {
    println!("Hello {}", self.age);
  }
}
```

コンストラクタ

```rs
impl Human {
  new (age: i32) -> Human {
    Human{age: age}
  }
}

let human = Human::new(20);
```

## ベクタ型

```rs
let mut vec: Vec<i32> = Vec::new();
vec.push(1);
vec.remove(0);

println!("|vec| = {}", vec.len());
println!("vec elements = {:?}", vec);
```

macroによる定義

```rs
let mut vec: Vec<i32> = vec![1, 3, 5, 7, 9];

for i in 0..vec.len() {
  vec[i] = vec[i] * 2; // indexでアクセス可能
}
```

## 所有権システム

メモリ管理で置きうるバグ

* ダングリングポインタ
  * 開放されたメモリ領域へのアクセス
* メモリの多重開放（multiple free）
* 初期化されていないメモリへのアクセス

### Dropトレイト

### 所有権の移動

* 一度、所有権が移動した変数は利用できない

### コピー型

* プリミティブな型はコピーされる
* Box型のオブジェクトの中身はプリミティブだが、構造体であるため所有権の移動が発生する



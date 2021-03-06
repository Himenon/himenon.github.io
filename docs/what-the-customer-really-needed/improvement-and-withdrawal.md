---
title: 「顧客が本当に必要だったもの」の改善と撤退
description: リリースした成果物の改善と撤退について考える。
image: "docs/what-the-customer-really-needed/images/project_comedy_l.gif"
---

## 改善設計

改善する場合、どこに問題があるのかをまずは明らかにする必要がある。
ほとんどの場合、[フィードバック](./feedback)を受けて改善に着手をする。
そのとき、[事前調査と設計](./preliminary-research-and-design)のどこかで問題が生じている。
スケーラビリティがある実装設計の場合、他の機能やデザインでも問題を抱えている可能性がある。
しかしながら、他で問題がない場合はサービス設計自体に問題を孕んでいる可能性がある。
その場合は[フィードバック](./feedback)を精査し、解決できる問題として昇華しそれを実施する。

## 撤退基準

[改善設計](#改善設計)が[制約条件](./theory-of-constraints)によって実施できない場合にその機能をクローズする。

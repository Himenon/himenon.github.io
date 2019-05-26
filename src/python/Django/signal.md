---
title: "DjangoのSignalの使い方"
createdAt: 2018-09-15 11:55:29
updatedAt: 2019-05-21 11:22:01
---

# DjangoのSignalの使い方

* 作成日：2017年11月06日
* 公開日：2018年09月15日

いわゆるイベントフック


```python
@receiver(pre_save, sender=JobOffer)
def before_save_handler(sender, instance, **kwargs):
    print("保存前に呼び出されている")


@receiver(post_save, sender=JobOffer)
def after_save_handler(sender, instance, **kwargs):
    print("保存後に呼び出されれる")
```

* <https://simpleisbetterthancomplex.com/tutorial/2016/07/28/how-to-create-django-signals.html>
* <https://www.ibm.com/developerworks/jp/opensource/library/os-django-admin/index.html>


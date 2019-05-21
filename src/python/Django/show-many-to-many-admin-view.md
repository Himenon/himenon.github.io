---
title: "DjangoでMany to ManyをAdmin画面のリストに表示する方法"
createdAt: 2019-05-21 10:46:07
updatedAt: 2019-05-21 10:46:07
---

# DjangoでMany to ManyをAdmin画面のリストに表示する方法


## サンプルモデル

```python
class PurchaseOrder(models.Model):
    product = models.ManyToManyField('Product')
    vendor = models.ForeignKey('VendorProfile')
    dollar_amount = models.FloatField(verbose_name='Price')

class Product(models.Model):
   products = models.CharField(max_length=256)

   def __unicode__(self):
       return self.products
```

## Admin

### 正しい実装

```python
# Adminの方に登録する
class PurchaseOrderAdmin(admin.ModelAdmin):
    fields = ['product', 'dollar_amount']
    list_display = ('get_products', 'vendor')

    def get_products(self, obj):
        return "\n".join([p.products for p in obj.product.all()])
```

```python
# Modelに登録する
class PurchaseOrder(models.Model):
    product = models.ManyToManyField('Product')
    vendor = models.ForeignKey('VendorProfile')
    dollar_amount = models.FloatField(verbose_name='Price')

    def get_products(self):
        return "\n".join([p.products for p in self.product.all()])
```

### 間違い

```python
class PurchaseOrderAdmin(admin.ModelAdmin):
    fields = ['product', 'dollar_amount']
    list_display = ('product', 'vendor')
```



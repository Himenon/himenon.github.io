# DjangoでValidation アルファベットのみのバリデーションを実装する

* 作成日：2017年12月01日
* 公開日：2018年09月15日


```python
from django.core.validators import RegexValidator

alphanumeric = RegexValidator(r'^[0-9a-zA-Z]*$', 'Only alphanumeric characters are allowed.')
```

**参考**

- <https://stackoverflow.com/questions/17165147/how-can-i-make-a-django-form-field-contain-only-alphanumeric-characters>


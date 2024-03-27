from django.db import models
from shop.apps.product.models import Product, ProductColor, ProductSize


class Order(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey('user.User', on_delete=models.CASCADE)
    total_price = models.PositiveIntegerField()


class OrderDetail(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    color = models.ForeignKey(ProductColor, on_delete=models.CASCADE)
    size = models.ForeignKey(ProductSize, on_delete=models.CASCADE)
    amount = models.PositiveIntegerField()

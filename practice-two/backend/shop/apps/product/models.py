from django.db import models
from django.core.validators import FileExtensionValidator, MaxValueValidator, MinValueValidator


class ProductColor(models.Model):
    color = models.CharField(max_length=20, null=True, blank=True)

    def __str__(self) -> str:
        return self.color


class ProductSize(models.Model):
    size = models.CharField(max_length=20, null=True, blank=True)

    def __str__(self) -> str:
        return self.size


class Product(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    image = models.FileField(upload_to='static/products', validators=[FileExtensionValidator(['png', 'jpg', 'svg'])], null=True)
    title = models.CharField(max_length=100, blank=True, default='')
    price = models.PositiveIntegerField()
    origin_price = models.PositiveIntegerField(null=True, blank=True)
    number_of_purchases = models.PositiveIntegerField(default=0)
    rating = models.FloatField(validators=[MinValueValidator(1.0), MaxValueValidator(5.0)], null=True, blank=True)
    description = models.TextField(null=True, blank=True)

    colors = models.ManyToManyField(ProductColor)
    sizes = models.ManyToManyField(ProductSize)

    class Meta:
        ordering = ['created']

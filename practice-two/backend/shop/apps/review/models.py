from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator


class Review(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    product = models.ForeignKey('product.Product', on_delete=models.CASCADE)
    user = models.ForeignKey('user.User', on_delete=models.CASCADE)
    content = models.TextField(max_length=255)
    rating = models.FloatField(validators=[MinValueValidator(1.0), MaxValueValidator(5.0)])

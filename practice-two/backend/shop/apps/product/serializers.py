from rest_framework import serializers
from .models import Product


class ProductSerializer(serializers.ModelSerializer):
    colors = serializers.SerializerMethodField('get_colors')
    sizes = serializers.SerializerMethodField('get_sizes')

    def get_colors(self, obj):
        return [color.color for color in obj.colors.all()]

    def get_sizes(self, obj):
        return [size.size for size in obj.sizes.all()]
    

    class Meta:
        model = Product
        fields = ['id', 'image', 'title', 'price', 'origin_price', 'number_of_purchases', 'rating', 'description', 'created', 'colors', 'sizes']

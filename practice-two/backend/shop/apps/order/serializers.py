from rest_framework import serializers
from .models import Order, OrderDetail


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ['id', 'created', 'user', 'total_price']


class CreateOrderDetailSerializer(serializers.ModelSerializer):

    # created = models.DateTimeField(auto_now_add=True)
    # order_detail = models.ForeignKey(Order, on_delete=models.CASCADE)
    # product = models.ForeignKey('product.Product', on_delete=models.CASCADE)
    # color = models.ForeignKey('product.ProductColor', on_delete =models.CASCADE)
    # size = models.ForeignKey('product.ProductSize', on_delete =models.CASCADE)
    # amount = models.PositiveIntegerField()

    # colors = serializers.SerializerMethodField('get_colors')
    # sizes = serializers.SerializerMethodField('get_sizes')

    # def get_colors(self, obj):
    #     return [color.color for color in obj.color.all()]

    # def get_sizes(self, obj):
    #     return [size.size for size in obj.sizes.all()]
    
    class Meta:
        model = OrderDetail
        fields = ['id', 'created', 'order', 'product', 'color', 'size', 'amount']

    def save(self, **kwargs):
        print(f'-- self.validated_data: {self.validated_data}')
        super().save(**kwargs)

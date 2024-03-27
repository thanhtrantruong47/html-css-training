from functools import reduce

from rest_framework import viewsets, mixins, permissions, authentication
from rest_framework.response import Response

from shop.apps.product.models import Product, ProductColor, ProductSize
from .models import Order, OrderDetail
from .serializers import OrderSerializer, CreateOrderDetailSerializer


class OrderView(viewsets.GenericViewSet):
    queryset = OrderDetail.objects.all()
    serializer_class = CreateOrderDetailSerializer

    authentication_classes = (authentication.TokenAuthentication, )
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    
    def create(self, request, pk=None):        
        total_price = reduce(lambda a, b: a['product']['price'] + b['product']['price'], request.data)
        print(f'-- total_price: {total_price}')
        order = Order.objects.create(user=self.request.user, total_price=total_price)

        for item in request.data:
            print({
                # id', 'created', 'order_detail', 'product', 'color', 'size', 'amount'
                'order': order,
                'product': Product.objects.get(pk=item['product']['id']),
                'color': ProductColor.objects.get(color=item['color']),
                'size': ProductSize.objects.get(size=item['size']),
                'amount': item['amount']
            })

            order_detail_serializer = OrderDetail.objects.create(
                order= order,
                product=Product.objects.get(pk=item['product']['id']),
                color=ProductColor.objects.get(color=item['color']),
                size=ProductSize.objects.get(size=item['size']),
                amount=item['amount']
            )
            
        return Response(self.get_serializer().data)

from rest_framework import viewsets, filters
from rest_framework.decorators import action
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.response import Response

from shop.apps.review.models import Review
from shop.apps.review.serializers import ListReviewProjectSerializer
from .models import Product
from .serializers import ProductSerializer


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = [filters.OrderingFilter]

    pagination_class = LimitOffsetPagination

    @action(detail=True, methods=['get'], url_path="reviews")
    def listReviews(self, request, pk=None):
        queryset = Review.objects.filter(product=pk)
        serializer = ListReviewProjectSerializer(queryset, many=True)
        return Response(serializer.data)

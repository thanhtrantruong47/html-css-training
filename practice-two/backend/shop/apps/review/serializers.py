from rest_framework import serializers
from shop.apps.user.serializers import UserSerializer
from .models import Review


class ListReviewProjectSerializer(serializers.ModelSerializer):
    user = UserSerializer(many=False)
    
    class Meta:
        model = Review
        fields = ['id', 'created', 'content', 'rating', 'user']

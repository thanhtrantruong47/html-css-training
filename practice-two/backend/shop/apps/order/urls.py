from django.urls import path, include
from rest_framework import routers
from .views import OrderView


router = routers.DefaultRouter()
router.register(r'order', OrderView, basename='order')

urlpatterns = [
    path('', include(router.urls)),
]

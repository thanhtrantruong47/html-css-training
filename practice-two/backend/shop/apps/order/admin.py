from django.contrib import admin
from .models import Order, OrderDetail


class OrderDetailInline(admin.TabularInline):
    model = OrderDetail


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    inlines = [
        OrderDetailInline,
    ]


@admin.register(OrderDetail)
class OrderDetailAdmin(admin.ModelAdmin):
    pass

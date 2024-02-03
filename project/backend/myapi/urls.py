from django.urls import path
from myapi import views

urlpatterns = [
    path('register/', views.register),
    path('login/', views.login),
    path('test_token/', views.test_token),
    path('logout/', views.logout),
    path('create_admin/', views.create_admin),
    path('create_support/', views.create_support),
    path('categories/', views.category_list),
    path('create_category/', views.create_category),
    path('products/', views.product_list),
    path('create_product/', views.create_product),
    path('create_item/', views.create_item)
]
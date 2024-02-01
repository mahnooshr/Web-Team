from django.urls import path
from myapi import views

urlpatterns = [
    path('categories/', views.CategoryList.as_view()),
    path('categories/<int:pk>/', views.CategoryDetail.as_view()),
    path('items/', views.ItemList.as_view()),
    path('items/<int:pk>/', views.ItemDetail.as_view()),
    path('giftcards/', views.GiftCardList.as_view()),
    path('giftcards/<int:pk>/', views.GiftCardDetail.as_view()),
    path('userreviews/', views.UserReviewList.as_view()),
    path('userreviews/<int:pk>/', views.UserReviewDetail.as_view()),
    path('orders/', views.OrderList.as_view()),
    path('orders/<int:pk>/', views.OrderDetail.as_view())
]
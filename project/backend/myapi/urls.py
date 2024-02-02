from django.urls import path
from myapi import views

urlpatterns = [
    path('register/', views.register),
    path('login/', views.login),
]
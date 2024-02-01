from django.urls import path
from .views import handler

urlpatterns = [
    path("api/", handler, name="generate_random_number"),
]

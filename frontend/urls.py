from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('bands/<int:id>', index),
    path('bands/', index)
]
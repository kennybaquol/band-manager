from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('login/', index),
    path('signup/', index),
    path('bands/create', index),
    path('bands/<int:id>', index),
    path('bands/', index)
]
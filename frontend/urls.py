from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('login/', index),
    path('signup/', index),
    path('bands/create', index),
    path('bands/<int:band_id>', index),
    path('bands/', index),
    path('bands/<int:band_id>/venues/create', index),
    path('bands/<int:band_id>/venues/<int:venue_id>', index),
    path('bands/<int:band_id>/venues/', index),
]
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('bands/', views.bands_index, name='bands_index'),
    path('bands/<int:band_id>/', views.bands_detail, name='detail'),
    path('bands/create/', views.BandCreate.as_view(), name='bands_create'),
    path('bands/<int:pk>/update/', views.BandUpdate.as_view(), name='bands_update'),
    path('bands/<int:pk>/delete/', views.BandDelete.as_view(), name='bands_delete'),
    path('bands/<int:band_id>/add_venue/', views.add_venue, name='add_venue'),
    path('venues/<int:band_id>/', views.venues_index, name='venues_index'),
]
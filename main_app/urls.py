from django.contrib import admin
from django.urls import path, include
from .views import *
# from rest_framework.routers import DefaultRouter
from . import views

# router = DefaultRouter()
# router.register(r'bands', views.BandViewSet, basename='band')
# urlpatterns = router.urls

urlpatterns = [
    # path('', include(urlpatterns)),
    path('', views.home, name='home'),
    path('bands', BandView.as_view()),
    path('accounts/', include('django.contrib.auth.urls')),
    path('accounts/signup/', views.signup, name='signup'),
    path('about/', views.about, name='about'),
    path('get-all-bands/', GetAllBands.as_view()),
    path('bands/', views.bands_index, name='bands_index'),
    path('get-band/', GetBand.as_view()),
    path('bands/<int:band_id>/', views.bands_detail, name='detail'),
    path('create-band', CreateBandView.as_view()),
    path('bands/create/', views.BandCreate.as_view(), name='bands_create'),
    path('bands/<int:pk>/update/', views.BandUpdate.as_view(), name='bands_update'),
    path('bands/<int:pk>/delete/', views.BandDelete.as_view(), name='bands_delete'),
    path('bands/<int:band_id>/add_venue/', views.add_venue, name='add_venue'),
    path('bands/<int:band_id>/venues', views.venues_index, name='venues_index'),
    path('bands/<int:band_id>/venues/<int:venue_id>/', views.venues_detail, name='venues_detail'),
    path('bands/<int:band_id>/venues/create/', views.venues_create, name='venues_create'),
    path('bands/<int:band_id>/venues/<int:venue_id>/update/', views.venues_update, name='venues_update'),
    path('bands/<int:band_id>/venues/<int:venue_id>/edit_venue/', views.edit_venue, name='edit_venue'),
    path('bands/<int:band_id>/venues/<int:pk>/delete/', views.VenueDelete.as_view(), name='venues_delete'),
]
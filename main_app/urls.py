from django.contrib import admin
from django.urls import path, include
from .views import *
from . import views

from rest_framework_simplejwt.views import(
    TokenObtainPairView,
    TokenRefreshView
)

urlpatterns = [
    # path('', include(urlpatterns)),
    path('accounts/', include('django.contrib.auth.urls')),
    path('accounts/signup/', views.signup, name='signup'),

    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    path('', views.home, name='home'),
    path('bands/', BandView.as_view()),
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
    path('bands/<int:band_id>/get-venues/', GetVenues.as_view()),
    path('bands/<int:band_id>/venues/<int:venue_id>/get-venue/', GetVenue.as_view()),
    path('bands/<int:band_id>/venues/', views.venues_index, name='venues_index'),
    path('bands/<int:band_id>/venues/<int:venue_id>/delete', DeleteVenue.as_view()),
    path('bands/<int:band_id>/venues/<int:venue_id>/', views.venues_detail, name='venues_detail'),
    path('bands/<int:band_id>/venues/create-venue/', CreateVenue.as_view()),
    path('bands/<int:band_id>/venues/create/', views.venues_create, name='venues_create'),
    path('bands/<int:band_id>/venues/<int:venue_id>/update/', views.venues_update, name='venues_update'),
    path('bands/<int:band_id>/venues/<int:venue_id>/edit_venue/', views.edit_venue, name='edit_venue'),
    path('bands/<int:band_id>/venues/<int:pk>/delete/', views.VenueDelete.as_view(), name='venues_delete'),
]
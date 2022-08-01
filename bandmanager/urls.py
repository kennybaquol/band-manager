from django.contrib import admin
# Add the include function to the import
from django.urls import path, include
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('main_app/', include('main_app.urls')),
    path('', include('frontend.urls'))
]
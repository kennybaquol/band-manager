from django.contrib import admin
from .models import Band, Venue

class BandAdmin(admin.ModelAdmin):
    title = 'name'

# Register your models here
admin.site.register(Band)
admin.site.register(Venue)
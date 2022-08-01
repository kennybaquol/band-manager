from rest_framework import serializers
from .models import *

class BandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Band
        fields = '__all__'

class CreateBandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Band
        fields = ['name']

class VenueSerializer(serializers.ModelSerializer):
    class Meta:
        model = Venue
        fields = '__all__'
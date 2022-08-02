from django.db import models
from django.urls import reverse
from datetime import date
from django.contrib.auth.models import (
    User,
    AbstractBaseUser,
    BaseUserManager,
    PermissionsMixin
)

STATUSES = (
    ('Not Contacted', 'Not Contacted'),
    ('Contacted', 'Contacted'),
    ('Followed Up With', 'Followed Up With'),
    ('Successfully Booked', 'Successfully Booked (B)'),
    ('Not Going To Work', 'Not Going To Work (X)')
)

class Band(models.Model):
    name = models.CharField(max_length=150)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('detail', kwargs={'band_id': self.id})

class Venue(models.Model):
    name = models.CharField(max_length=150)
    state = models.CharField(max_length=150)
    city = models.CharField(max_length=150)
    email = models.CharField(max_length=150, blank=True, null=True)
    phone = models.CharField(max_length=30, blank=True, null=True)
    note = models.CharField(max_length=150, blank=True, null=True)
    status = models.CharField(max_length=150)
    band = models.ForeignKey(Band, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['-status']

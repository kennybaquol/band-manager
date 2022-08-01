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
    email = models.CharField(max_length=150, blank=True)
    phone = models.CharField(max_length=30, blank=True)
    note = models.CharField(max_length=150, blank=True)
    status = models.CharField(max_length=30, choices=STATUSES, default=STATUSES[0][0])
    band = models.ForeignKey(Band, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.get_status_display()} on {self.name}"

    class Meta:
        ordering = ['-status']

# class User(models.Model):
#     username=models.CharField(max_length=255, unique=True, db_index=True)
#     password=models.CharField(max_length=255, unique=True, db_index=True)

#     def __str__(self):
#         return self.username

# class UserManager(BaseUserManager):

#     def create_user(self, username, password=None):
#         if username is None:
#             raise TypeError('Users should have a username')

#         user=self.model(username=username)
#         user.set_password(password)
#         user.save()
#         return user

#     def create_superuser(self, username, password=None):
#         if password is None:
#             raise TypeError('Users should have a password')

#         user=self.create_user(username, password)
#         user.is_superuser = True
#         user.is_staff = True
#         user.save()
#         return user

# class User(AbstractBaseUser, PermissionsMixin):
#     username=models.CharField(max_length=255, unique=True, db_index=True)
#     username=models.CharField(max_length=255, unique=True, db_index=True)
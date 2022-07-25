from django.forms import ModelForm
from .models import Venue

class VenueForm(ModelForm):
    # def __init__(self, *args, **kwargs):
    #     super().__init__(*args, **kwargs)
    #     self.fields['email'].required = False
    #     self.fields['phone'].required = False
    #     self.fields['note'].required = False

    class Meta:
        model = Venue
        fields = ['name', 'state', 'city', 'email', 'phone', 'note', 'status']
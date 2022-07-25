from django.shortcuts import render, redirect
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from .models import Band 
from .forms import VenueForm

# Define the home view
def home(request):
    return render(request, 'home.html')

def about(request):
    return render(request, 'about.html')

def bands_index(request):
    bands = Band.objects.all()
    return render(request, 'bands/index.html', { 'bands': bands })

def bands_detail(request, band_id):
  band = Band.objects.get(id=band_id)
  venue_form = VenueForm()
  return render(request, 'bands/detail.html', { 
    'band': band,
    'venue_form': venue_form 
  })

class BandCreate(CreateView):
  model = Band
  fields = '__all__'
  success_url = '/bands/'

# **NEED TO REMOVE ABILITY TO UPDATE AND DELETE BANDS LATER**
class BandUpdate(UpdateView):
  model = Band
  fields = []

class BandDelete(DeleteView):
  model = Band
  success_url = '/bands/'
# **NEED TO REMOVE ABILITY TO UPDATE AND DELETE BANDS LATER**

def add_venue(request, band_id):
  # create a ModelForm instance using the data in request.POST
  print('running add venue in views')
  form = VenueForm(request.POST)
  # validate the form
  if form.is_valid():
    # don't save the form to the db until it
    # has the band_id assigned
    new_venue = form.save(commit=False)
    new_venue.band_id = band_id
    new_venue.save()
  return redirect('detail', band_id=band_id)
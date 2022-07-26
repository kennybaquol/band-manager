from django.shortcuts import render, redirect
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from .models import Band, Venue
from .forms import VenueForm

# Define the home view
def home(request):
    return render(request, 'home.html')

def about(request):
    return render(request, 'about.html')

def bands_index(request):
    bands = Band.objects.all()
    return render(request, 'bands/index.html', { 'bands': bands })

def venues_index(request, band_id):
  band = Band.objects.get(id=band_id)
  venues = band.venue_set.all()
  # venue_form = VenueForm()
  return render(request, 'venues/index.html', {
    'venues': venues,
    'band': band,
    # 'venue_form': venue_form
  })

def bands_detail(request, band_id):
  band = Band.objects.get(id=band_id)
  return render(request, 'bands/detail.html', { 
    'band': band,
  })

def venues_detail(request, band_id, venue_id):
  band = Band.objects.get(id=band_id)
  venue = Venue.objects.get(id=venue_id)
  return render(request, 'venues/detail.html', { 
    'band': band,
    'venue': venue 
  })

# GET route that takes the user to the page with the add venue form
def venues_create(request, band_id):
  band = Band.objects.get(id=band_id)
  venue_form = VenueForm()
  return render(request, 'venues/create.html', {
    'band': band,
    'venue_form': venue_form
  })

# POST route that creates a Venue using the completed form data
def add_venue(request, band_id):
  # create a ModelForm instance using the data in request.POST
  form = VenueForm(request.POST)
  # validate the form
  if form.is_valid():
    # don't save the form to the db until it
    # has the band_id assigned
    new_venue = form.save(commit=False)
    new_venue.band_id = band_id
    new_venue.save()
  return redirect('detail', band_id=band_id)

# GET route that takes the user to the page with the edit venue form
def venues_update(request, band_id, venue_id):
  band = Band.objects.get(id=band_id)
  venue = Venue.objects.get(id=venue_id)
  venue_form = VenueForm()
  return render(request, 'venues/update.html', {
    'band': band,
    'venue': venue,
    'venue_form': venue_form
  })

# POST route that edits the current Venue using the completed form data
def edit_venue(request, band_id, venue_id):
  venue = Venue.objects.get(id=venue_id)
  form = VenueForm(request.POST)
  # validate the form
  if form.is_valid():
    venue = form.save(commit=False)
    venue.band_id = band_id
    Venue.objects.update(id=venue_id)
    # new_venue = form.save(commit=False)
    # new_venue.band_id = band_id
    # new_venue.save()
  return redirect('detail', band_id=band_id)

class BandCreate(CreateView):
  model = Band
  fields = '__all__'
  success_url = '/bands/'

class VenueDelete(DeleteView):
  model = Venue
  success_url = '/bands/'

# **NEED TO REMOVE ABILITY TO UPDATE AND DELETE BANDS LATER**
class BandUpdate(UpdateView):
  model = Band
  fields = []

class BandDelete(DeleteView):
  model = Band
  success_url = '/bands/'
# **NEED TO REMOVE ABILITY TO UPDATE AND DELETE BANDS LATER**
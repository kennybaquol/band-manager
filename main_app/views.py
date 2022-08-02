from django.shortcuts import render, redirect
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.contrib.auth import login
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import LoginRequiredMixin
from .models import *
from .forms import VenueForm

from .serializers import *
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response

from operator import length_hint

# class BandViewSet(viewsets.ModelViewSet):
#   serializer_class = BandSerializer
#   queryset = Band.objects.all()

class BandView(generics.ListAPIView):
  queryset = Band.objects.all()
  serializer_class = BandSerializer

class GetUser(APIView):
  serializer_class = UserSerializer
  # lookup_url_kwarg = 'id'

  print('running GetUser api view')

  def post(self, request, format=None):
    # id = request.GET.get(self.lookup_url_kwarg)
    print('request data: ')
    print(request.data)
    id = request.data

    user = User.objects.get(id=id)
    print(user)
    if user:
      return Response(UserSerializer(user).data, status.HTTP_200_OK)
    # print(id)
    # if id != None:
    #   band = Band.objects.get(id=id)
    #   # band = Band.objects.get(name="Confined")
    #   print(band)
    #   # if len(band) > 0:
    #   if band:
    #     data = BandSerializer(band).data
    #     print(data)
    #     # data['user'] = self.request.session.session_key == band[0].user
    #     return Response(data, status=status.HTTP_200_OK)
    #   return Response({'Bad Request': 'Invalid Band Id'}, status=status.HTTP_404_NOT_FOUND)
    
    return Response({'Bad Request': 'Band paramter not found in request'}, status=status.HTTP_400_BAD_REQUEST)  

class GetBand(APIView):
  serializer_class = BandSerializer
  lookup_url_kwarg = 'id'

  def get(self, request, format=None):
    id = request.GET.get(self.lookup_url_kwarg)
    print(id)
    if id != None:
      band = Band.objects.get(id=id)
      # band = Band.objects.get(name="Confined")
      print(band)
      # if len(band) > 0:
      if band:
        data = BandSerializer(band).data
        print(data)
        # data['user'] = self.request.session.session_key == band[0].user
        return Response(data, status=status.HTTP_200_OK)
      return Response({'Bad Request': 'Invalid Band Id'}, status=status.HTTP_404_NOT_FOUND)
    
    return Response({'Bad Request': 'Band paramter not found in request'}, status=status.HTTP_400_BAD_REQUEST)

class GetAllBands(APIView):
  serializer_class = BandSerializer

  def post(self, request, format=None):
    print('running getallbands api view')

    # bands = []
    # for band in Band.objects.filter():
    #   bands.append(band)

    id = request.data
    # user = User.objects.get(username=username)
    print(id)

    bands = Band.objects.filter(user=1)

    print(bands)
    if bands:
      data = []
      for band in bands.iterator():
        currentBandData = BandSerializer(band).data
        data.append(currentBandData)
      # data['user'] = self.request.session.session_key == band[0].user
      return Response(data, status=status.HTTP_200_OK)
    # return Response({'Bad Request': 'Invalid Band Id'}, status=status.HTTP_404_NOT_FOUND)
    
    return Response({'Bad Request': ''}, status=status.HTTP_400_BAD_REQUEST)

class CreateBandView(APIView):
  serializer_class = CreateBandSerializer
  
  def post(self, request, format=None):
    print('Running CreateBandView')
    
    serializer = self.serializer_class(data=request.data)
    print('Checking if the serializer is valid')
    if serializer.is_valid():
      print('lel')
      name = serializer.data.get('name')
      print(request.data)
      dataSet = request.data
      username = dataSet['username']
      user = User.objects.get(username=username)
      print(user)
      queryset = Band.objects.filter(name=name)
      print('Checking if the queryset exists')
      print(queryset)
      if queryset.exists():
        print('QuerySet Exists')
        for band in queryset.iterator():
          print(type(band.user.username))
          print(username)
          if band.user.username == username:
            return Response({'Bad Request': 'You already have a band with this name!'}, status=status.HTTP_400_BAD_REQUEST)
      print('Does not exist')
      band = Band(name=name, user=user)
      band.save()

      return Response(BandSerializer(band).data, status=status.HTTP_201_CREATED)

    return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)

class GetVenues(APIView):
  serializer_class = VenueSerializer

  def get(self, request, *args, **kwargs):
    print('Running GetVenues API View')

    id = kwargs['band_id']
    print(id)

    venues = Venue.objects.filter(band=id)

    print(venues)
    if venues:
      data = []
      for idx, venue in enumerate(venues):
        currentVenueData = VenueSerializer(venues[idx]).data
        data.append(currentVenueData)
      # data['user'] = self.request.session.session_key == band[0].user
      return Response(data, status=status.HTTP_200_OK)
    # return Response({'Bad Request': 'Invalid Band Id'}, status=status.HTTP_404_NOT_FOUND)
    
    return Response({'Bad Request': ''}, status=status.HTTP_400_BAD_REQUEST)

class GetVenue(APIView):
  serializer_class = VenueSerializer

  def get(self, request, *args, **kwargs):
    print('Running GetVenue API View')

    band_id = kwargs['band_id']
    venue_id = kwargs['venue_id']
    venue = Venue.objects.get(id=venue_id)

    print(venue)
    if venue:
      data = VenueSerializer(venue).data
      # data['user'] = self.request.session.session_key == band[0].user
      return Response(data, status=status.HTTP_200_OK)
    # return Response({'Bad Request': 'Invalid Band Id'}, status=status.HTTP_404_NOT_FOUND)
    
    return Response({'Bad Request': ''}, status=status.HTTP_400_BAD_REQUEST)

class CreateVenue(APIView):
  serializer_class = CreateVenueSerializer
  
  def post(self, request, *args, **kwargs):
    print('Running CreateVenue API view')

    id = kwargs['band_id']
    print(id)
    
    serializer = self.serializer_class(data=request.data)
    print(serializer)
    print('Checking if the serializer is valid')
    if serializer.is_valid():

      name = serializer.data.get('name')        
      state = serializer.data.get('state')
      city = serializer.data.get('city')
      email = serializer.data.get('email')
      phone = serializer.data.get('phone')
      note = serializer.data.get('note')
      selectedStatus = serializer.data.get('status')
      band = Band.objects.get(id=id)

      print('email passed through was:')
      print(email)
      print('phone passed through was:')
      print(phone)      
      print('note passed through was:')
      print(note)

      # user = User.objects.first()
      # print(user)

      queryset = Venue.objects.filter(name=name)
      print('Checking if the queryset exists')
      print(queryset)
      if queryset.exists():
        print('Exists')
        venue = queryset[0]
        venue.state = state
        venue.city = city
        venue.email = email
        venue.phone = phone
        venue.note = note
        venue.status = selectedStatus
        venue.save(update_fields=['state', 'city', 'email', 'phone', 'note', 'status'])
      else:
        print('Does not exist')
        venue = Venue(name=name, state=state, city=city, email=email, phone=phone, note=note, status=selectedStatus, band=band)
        venue.save()
      
      return Response(VenueSerializer(venue).data, status=status.HTTP_201_CREATED)

    return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)

class DeleteVenue(APIView):
  serializer_class = VenueSerializer

  def delete(self, request, *args, **kwargs):
    print('Running GetVenue API View')

    band_id = kwargs['band_id']
    venue_id = kwargs['venue_id']
    venue = Venue.objects.get(id=venue_id)

    print(venue)
    if venue:
      venue.delete()
      # data['user'] = self.request.session.session_key == band[0].user
      return Response(data, status=status.HTTP_200_OK)
    # return Response({'Bad Request': 'Invalid Band Id'}, status=status.HTTP_404_NOT_FOUND)
    
    return Response({'Bad Request': ''}, status=status.HTTP_400_BAD_REQUEST)










def signup(request):
  error_message = ''
  if request.method == 'POST':
    # This is how to create a 'user' form object
    # that includes the data from the browser
    form = UserCreationForm(request.POST)
    if form.is_valid():
      # This will add the user to the database
      user = form.save()
      # This is how we log a user in via code
      login(request, user)
      return redirect('/')
    else:
      error_message = 'Invalid sign up - try again'
  # A bad POST or a GET request, so render signup.html with an empty form
  form = UserCreationForm()
  context = {'form': form, 'error_message': error_message}
  return render(request, 'registration/signup.html', context)

# Define the home view
def home(request):
    return render(request, 'home.html')

def about(request):
    return render(request, 'about.html')

@login_required
def bands_index(request):
    bands = Band.objects.filter(user=request.user)
    return render(request, 'bands/index.html', { 'bands': bands })

@login_required
def venues_index(request, band_id):
  band = Band.objects.get(id=band_id)
  venues = band.venue_set.all()
  # venue_form = VenueForm()
  return render(request, 'venues/index.html', {
    'venues': venues,
    'band': band,
    # 'venue_form': venue_form
  })

@login_required
def bands_detail(request, band_id):
  band = Band.objects.get(id=band_id)
  return render(request, 'bands/detail.html', { 
    'band': band,
  })

@login_required
def venues_detail(request, band_id, venue_id):
  band = Band.objects.get(id=band_id)
  venue = Venue.objects.get(id=venue_id)
  return render(request, 'venues/detail.html', { 
    'band': band,
    'venue': venue 
  })

# GET route that takes the user to the page with the add venue form
@login_required
def venues_create(request, band_id):
  band = Band.objects.get(id=band_id)
  venue_form = VenueForm()
  return render(request, 'venues/create.html', {
    'band': band,
    'venue_form': venue_form
  })

# POST route that creates a Venue using the completed form data
@login_required
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
@login_required
def venues_update(request, band_id, venue_id):
  band = Band.objects.get(id=band_id)
  venue = Venue.objects.get(id=venue_id)
  return render(request, 'venues/update.html', {
    'band': band,
    'venue': venue
  })

# POST route that edits the current Venue using the completed form data
@login_required
def edit_venue(request, band_id, venue_id):
  # venue = Venue.objects.get(id=venue_id)
  form = VenueForm(request.POST)
  # validate the form
  if form.is_valid():
    venue = form.save(commit=False)
    band = Band.objects.get(id=band_id)
    venue.id = venue_id
    venue.band_id = band.id
    venue.save()
  return redirect('detail', band_id=band_id)

class BandCreate(LoginRequiredMixin, CreateView):
  model = Band
  fields = ['name']
  success_url = '/bands/'

  # This inherited method is called when a
  # valid band form is being submitted
  def form_valid(self, form):
    # Assign the logged in user (self.request.user)
    form.instance.user = self.request.user  # form.instance is the band
    # Let the CreateView do its job as usual
    return super().form_valid(form)

class VenueDelete(LoginRequiredMixin, DeleteView):
  model = Venue
  success_url = '/bands/'

# **NEED TO REMOVE ABILITY TO UPDATE AND DELETE BANDS LATER**
class BandUpdate(LoginRequiredMixin, UpdateView):
  model = Band
  fields = []

class BandDelete(LoginRequiredMixin, DeleteView):
  model = Band
  success_url = '/bands/'
# **NEED TO REMOVE ABILITY TO UPDATE AND DELETE BANDS LATER**
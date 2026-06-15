from django.shortcuts import render, redirect
from .forms import LeadForm

def home(request):

    success = False

    if request.method == 'POST':

        form = LeadForm(request.POST)

        if form.is_valid():

            form.save()

            form = LeadForm()

            success = True

    else:

        form = LeadForm()

    return render(
        request,
        'home.html',
        {
            'form': form,
            'success': success
        }
    )
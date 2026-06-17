from django.template.loader import render_to_string 
from django.shortcuts import render
from .forms import LeadForm


def home(request):

    return render(
        request,
        'home.html'
    )


def contact(request):

    success = False

    if request.method == 'POST':

        form = LeadForm(request.POST)

        if form.is_valid():

            lead = form.save()

            # Email temporarily disabled
            
            form = LeadForm()

            success = True

    else:

        form = LeadForm()

    return render(
        request,
        'contact.html',
        {
            'form': form,
            'success': success
        }
    )
def services(request):

    return render(
        request,
        'services.html'
    )
def about(request):

    return render(
        request,
        'about.html'
    )
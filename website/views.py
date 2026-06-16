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

            from django.core.mail import send_mail

            send_mail(
                subject='🚀 New Lead - MindRizz',
                message=f"""
        New Lead Received

        Name: {lead.name}

        Email: {lead.email}

        Phone: {lead.phone}

        Company: {lead.company}

        Requirement:

        {lead.requirement}

            """,
            from_email=None,
            recipient_list=['navaneshwarreddy1614@gmail.com'],
            fail_silently=False,
            )   

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
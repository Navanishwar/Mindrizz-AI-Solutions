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

            print("FORM IS VALID")

            lead = form.save()

            print("LEADS SAVED:", lead.id)
            from django.core.mail import send_mail

            message = render_to_string(
                'emails/leads_notification.txt',
                {
                    'lead': lead
                }
            )
            try:
                send_mail(
                    subject='🚀 New Lead - MindRizz',
                    message=message,
                    from_email=None,
                    recipient_list=['navaneshwarreddy1614@gmail.com'],
                    fail_silently=False,
                )
            except Exception as e:
                print("EMAIL ERROR:", repr(e))

            auto_reply = render_to_string(
                'emails/auto-reply.txt',
                {
                    'lead': lead
                }
            )
            try:
                send_mail(
                    subject='Thank you for contacting MindRizz',
                    message=auto_reply,
                    from_email=None,
                    recipient_list=[lead.email],
                    fail_silently=False,
                )
            except Exception as e:
                print("EMAIL ERROR:", repr(e))

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
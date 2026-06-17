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

            print("STEP 1 - FORM VALID")

            lead = form.save()

            print("STEP 2 - SAVE COMPLETE")

            print("LEADS SAVED:", lead.id, lead.name, lead.email)

            from django.core.mail import send_mail

            message = render_to_string(
                'emails/leads_notification.txt',
                {
                    'lead': lead
                }
            )
            print("STEP 3 - TEMPLATE RENDERED")

            try:
                print("STEP 4 - ABOUT TO SEND ADMIN EMAIL")
                import socket

                try:
                    print("SMTP IP:", socket.gethostbyname("smtp.gmail.com"))
                except Exception as e:
                    print("DNS ERROR:", e)
                    
                send_mail(
                    subject='🚀 New Lead - MindRizz',
                    message=message,
                    from_email=None,
                    recipient_list=['navaneshwarreddy1614@gmail.com'],
                    fail_silently=False,
                )
                print("STEP 5 - ADMIN EMAIL SENT")
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
from django import forms
from .models import Lead

class LeadForm(forms.ModelForm):

    class Meta:
        model = Lead

        fields = [
            'name',
            'email',
            'phone',
            'company',
            'requirement'
        ]

        widgets = {
            'name': forms.TextInput(attrs={
                'placeholder': 'Your Name'
            }),

            'email': forms.EmailInput(attrs={
                'placeholder': 'Business Email'
            }),

            'phone': forms.TextInput(attrs={
                'placeholder': 'Phone Number'
            }),

            'company': forms.TextInput(attrs={
                'placeholder': 'Company Name'
            }),

            'requirement': forms.Textarea(attrs={
                'placeholder': 'Tell us about your AI automation requirement...'
            }),
        }
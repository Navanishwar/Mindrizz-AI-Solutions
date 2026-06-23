import os
import sys
import django

# Setup Django environment
sys.path.append('e:\\AG\\Mindrizz-AI-Solutions')
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'mindrizz_site.settings')
django.setup()

from website.forms import LeadForm

# Simulate post data
data = {
    'name': 'John Doe',
    'email': 'john@example.com',
    'phone': '123-456-7890',
    'company': 'Acme Corp',
    'requirement': 'Test requirement description.'
}

form = LeadForm(data=data)
print('Form is valid:', form.is_valid())
if not form.is_valid():
    print('Form errors:', form.errors.as_data())

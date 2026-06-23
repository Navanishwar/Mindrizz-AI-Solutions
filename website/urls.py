from django.urls import path
from django.views.generic.base import TemplateView, RedirectView
from .views import home, contact, services, about

urlpatterns = [
    path('', home, name='home'),
    path('services/', services, name='services'),
    path('about/', about, name='about'),
    path('contact/', contact, name='contact'),
    path('robots.txt', TemplateView.as_view(template_name="robots.txt", content_type="text/plain"), name='robots_txt'),
    path('sitemap.xml', TemplateView.as_view(template_name="sitemap.xml", content_type="application/xml"), name='sitemap_xml'),
    path('favicon.ico', RedirectView.as_view(url='/static/images/favicon.png', permanent=True), name='favicon_ico'),
]
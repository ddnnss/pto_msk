from django.shortcuts import render
from django.http import HttpResponse
from .models import *
def index(request):
    allBanners = Banner.objects.filter(isActive=True)

    return render(request, 'pages/index.html', locals())

def robots(request):

    robotsTxt = f"User-agent: *\nDisallow: /admin/\nHost: locaclhost\nSitemap: localhost/sitemap.xml"

    return HttpResponse(robotsTxt, content_type="text/plain")


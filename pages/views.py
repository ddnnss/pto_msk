from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from .models import *
def index(request):
    allBanners = Banner.objects.filter(isActive=True).order_by('order')
    allSevices = Service.objects.filter(isHomeVisible=True)
    homeActive = 'current-menu-item'
    return render(request, 'pages/index.html', locals())
def about(request):
    allSevices = Service.objects.filter(isHomeVisible=True)
    aboutActive = 'current-menu-item'
    return render(request, 'pages/about.html', locals())

def projects(request):
    allSevices = Service.objects.filter(isHomeVisible=True)
    allProjects = Project.objects.all()
    projectsActive = 'current-menu-item'
    return render(request, 'pages/projects.html', locals())

def contacts(request):
    allSevices = Service.objects.filter(isHomeVisible=True)
    contactsActive = 'current-menu-item'
    return render(request, 'pages/contacts.html', locals())

def service(request, slug):
    allSevices = Service.objects.filter(isHomeVisible=True)
    curService = get_object_or_404(Service, nameSlug=slug)
    serviceActive = 'current-menu-item'
    return render(request, 'pages/service.html', locals())
def robots(request):

    robotsTxt = f"User-agent: *\nDisallow: /admin/\nHost: locaclhost\nSitemap: localhost/sitemap.xml"

    return HttpResponse(robotsTxt, content_type="text/plain")


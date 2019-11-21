from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, HttpResponseRedirect
from django.contrib import messages
from .models import *
from .forms import *

def callback(request):
    if request.POST:
        req = request.POST
        form = CallbackForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Спасибо, форма успешно отправлена')
            return HttpResponseRedirect('/contacts/')
    else:
        form = CallbackForm()
    return render(request, 'pages/contacts.html', locals())

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
    form = CallbackForm()
    return render(request, 'pages/contacts.html', locals())

def service(request, slug):
    allSevices = Service.objects.filter(isHomeVisible=True)
    curService = get_object_or_404(Service, nameSlug=slug)
    serviceActive = 'current-menu-item'
    return render(request, 'pages/service.html', locals())
def robots(request):

    robotsTxt = f"User-agent: *\nDisallow: /admin/\nHost: locaclhost\nSitemap: localhost/sitemap.xml"

    return HttpResponse(robotsTxt, content_type="text/plain")


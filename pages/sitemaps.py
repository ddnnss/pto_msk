from django.contrib.sitemaps import Sitemap
from django.shortcuts import reverse
from .models import *


class StaticViewSitemap(Sitemap):
    changefreq = "monthly"
    priority = 0.5

    def items(self):
        return ['index','services','projects','about','contacts','posts']

    def location(self, item):
        return reverse(item)


class ServicesSitemap(Sitemap):
    changefreq = "monthly"
    priority = 0.5
    def items(self):
        return Service.objects.all()



class BlogSitemap(Sitemap):
    changefreq = "monthly"
    priority = 0.5
    def items(self):
        return BlogPost.objects.all()


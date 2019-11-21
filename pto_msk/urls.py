from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
#from service.sitemaps import *
from django.contrib.sitemaps.views import sitemap

admin.site.site_header = "PTO-MSK"
admin.site.site_title = "PTO-MSK администрирование"
admin.site.index_title = "PTO-MSK администрирование"

# sitemaps = {
#     'static': StaticViewSitemap,
#     'services': ServicesSitemap,
#     'blog': BlogSitemap
# }

urlpatterns = [
    path('admin/', admin.site.urls),
    # path('sitemap.xml', sitemap, {'sitemaps':sitemaps}),
    path('', include('pages.urls')),
    path('ckeditor/', include('ckeditor_uploader.urls')),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

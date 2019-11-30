from django.contrib import admin
from .models import *

class ServiceNameAdmin(admin.ModelAdmin):

    exclude = ['nameSlug','views']

    class Meta:
        model = Service
admin.site.register(Service,ServiceNameAdmin)
admin.site.register(Project)
admin.site.register(Banner)
admin.site.register(Callback)
admin.site.register(SeoTag)

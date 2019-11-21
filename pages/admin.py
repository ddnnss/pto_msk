from django.contrib import admin
from .models import *

class ServiceNameAdmin(admin.ModelAdmin):

    exclude = ['name_slug']

    class Meta:
        model = Service
admin.site.register(Service,ServiceNameAdmin)
admin.site.register(Project)
admin.site.register(Banner)

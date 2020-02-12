from django.contrib import admin
from .models import *

class ServiceNameAdmin(admin.ModelAdmin):

    exclude = ['nameSlug','views']

    class Meta:
        model = Service

class ProjectImageInline(admin.TabularInline):
    model = ProjectImage
    readonly_fields = ('image_tag',)
    exclude = ('image_small',)
    extra = 0

class ProjectAdmin(admin.ModelAdmin):

    exclude = ['nameSlug']
    inlines = (ProjectImageInline,)
    class Meta:
        model = Project

admin.site.register(Service,ServiceNameAdmin)
admin.site.register(Project,ProjectAdmin)
admin.site.register(Banner)
admin.site.register(Callback)
admin.site.register(SeoTag)

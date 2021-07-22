from django.contrib import admin
from .models import Movieapi,Classification,Video,VideoYun

# Register your models here.
class MovieapiAdmin(admin.ModelAdmin):
    list_display = ("name","actors","area","score","director")
    # def classification(self,obj):
    #     print(obj.classification.classify_name)
    #     return obj.classification.classify_name

admin.site.register(Movieapi,MovieapiAdmin)
admin.site.register(Classification)
admin.site.register(Video)
admin.site.register(VideoYun)
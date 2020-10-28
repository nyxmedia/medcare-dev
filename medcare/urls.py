from opal.urls import urlpatterns as opatterns
from django.conf.urls import url, include
from django.conf.urls.i18n import i18n_patterns

from django.contrib import admin
admin.autodiscover()

from opal import views

urlpatterns = []

urlpatterns += opatterns

# i18n url wrapping breaks the AJAX:
# for opalurl in opatterns:
#   urlpatterns += i18n_patterns(opalurl)

urlpatterns += [
    url(r'^i18n/', include('django.conf.urls.i18n'))
]

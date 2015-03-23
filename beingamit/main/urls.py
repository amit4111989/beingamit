from django.conf.urls import patterns, include, url

urlpatterns = patterns('',
    url(r'^$', 'main.views.home', name='home'),
    url(r'^page$', 'main.views.page', name='page'),
    url(r'^resume$', 'main.views.resume', name='resume'),
)
from django.conf.urls import patterns, include, url

urlpatterns = patterns('',
    url(r'^$', 'main.views.home', name='home'),
    url(r'^page$', 'main.views.page', name='page'),
    url(r'^resume$', 'main.views.resume', name='resume'),
    url(r'^projects$', 'main.views.projects', name='projects'),
    url(r'^articles$', 'main.views.articles', name='articles'),
    url(r'^extra$', 'main.views.extra', name='extra'),
)
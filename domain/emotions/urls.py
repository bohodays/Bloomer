
from django.urls import path
from django.urls.conf import include
from . import views

app_name = 'emotion'

urlpatterns = [
    # path('', views.index, name='index'),
    path('analysis/', views.analysis, name='analysis'),
    # path('result/', views.result, name='result'),
    ]
from django.conf.urls import url

from .views import TaskListCreateView, TaskDetailView

urlpatterns = [
    url(r'(?P<id>[0-9]+)/$', TaskDetailView.as_view(), name='task-detail'),
    url(r'$', TaskListCreateView.as_view(), name='task-list'),
]

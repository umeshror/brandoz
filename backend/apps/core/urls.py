from django.conf.urls import url
from rest_framework import routers

from .views import UserViewSet, GroupViewSet, UserCreateAPIView

router = routers.DefaultRouter()
router.register(r'user', UserViewSet, basename='users')
router.register(r'group', GroupViewSet, basename='groups')
urlpatterns = router.urls
urlpatterns += [
    url(r'^user-create/$', UserCreateAPIView.as_view(), name='user-create'),
]

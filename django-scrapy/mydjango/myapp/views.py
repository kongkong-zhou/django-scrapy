from django.shortcuts import render
from rest_framework import generics
from django.db.models import Q
from rest_framework import filters
from . import models
from . import serializers

class MovieApiList(generics.ListAPIView):
    queryset = models.Movieapi.objects.all()
    serializer_class = serializers.MovieSerializer
    filter_backends = (filters.SearchFilter,)
    search_fields = ('name', 'other_name')

class MovieApiDetail(generics.RetrieveAPIView):
    queryset = models.Movieapi.objects.all()
    serializer_class = serializers.MovieSerializer

# 电影
class MovieList(generics.ListAPIView):
    queryset = models.Movieapi.objects.filter(
        Q(classification=1) | Q(classification=2) | Q(classification=3) | Q(classification=4) | Q(classification=5)
        | Q(classification=6) | Q(classification=7) | Q(classification=8) | Q(classification=9) | Q(classification=10)).order_by('-id')
    serializer_class = serializers.MovieSerializer

class MovieDetail(generics.RetrieveAPIView):
    queryset = models.Movieapi.objects.filter(
        Q(classification=1) | Q(classification=2) | Q(classification=3) | Q(classification=4) | Q(classification=5)
        | Q(classification=6) | Q(classification=7) | Q(classification=8)| Q(classification=9)| Q(classification=10))
    serializer_class = serializers.MovieSerializer
# 剧集
class TeleList(generics.ListAPIView):
    queryset = models.Movieapi.objects.filter(
        Q(classification=11) | Q(classification=12) | Q(classification=13) | Q(classification=14) | Q(classification=15)
        | Q(classification=16) | Q(classification=17)).order_by('-id')
    serializer_class = serializers.MovieSerializer
class TeleDetail(generics.RetrieveAPIView):
    queryset = models.Movieapi.objects.filter(
        Q(classification=11) | Q(classification=12) | Q(classification=13) | Q(classification=14) | Q(classification=15)
        | Q(classification=16) | Q(classification=17))
    serializer_class = serializers.MovieSerializer

# 综艺
class VarietyList(generics.ListAPIView):
    queryset = models.Movieapi.objects.filter(
        Q(classification=18) | Q(classification=19) | Q(classification=20) | Q(classification=21)).order_by('-update_time')
    serializer_class = serializers.MovieSerializer
class VarietyDetail(generics.RetrieveAPIView):
    queryset = models.Movieapi.objects.filter(
        Q(classification=18) | Q(classification=19) | Q(classification=20) | Q(classification=21))
    serializer_class = serializers.MovieSerializer

# 卡通视图
class CartoonList(generics.ListAPIView):
    queryset = models.Movieapi.objects.filter(
        Q(classification=22) | Q(classification=23) | Q(classification=24) | Q(classification=25)).order_by('-update_time')
    serializer_class = serializers.MovieSerializer
class CartoonDetail(generics.RetrieveAPIView):
    queryset = models.Movieapi.objects.filter(Q(classification=22) | Q(classification=23)
                                              | Q(classification=24) | Q(classification=25))
    serializer_class = serializers.MovieSerializer


class DongzuoList(generics.ListAPIView):
    queryset = models.Movieapi.objects.filter(classification=1).order_by('-update_time')
    serializer_class = serializers.MovieSerializer
class XijuList(generics.ListAPIView):
    queryset = models.Movieapi.objects.filter(classification=2).order_by('-update_time')
    serializer_class = serializers.MovieSerializer
class AiqingList(generics.ListAPIView):
    queryset = models.Movieapi.objects.filter(classification=3).order_by('-update_time')
    serializer_class = serializers.MovieSerializer
class KehuanList(generics.ListAPIView):
    queryset = models.Movieapi.objects.filter(classification=4).order_by('-update_time')
    serializer_class = serializers.MovieSerializer
class KongbuList(generics.ListAPIView):
    queryset = models.Movieapi.objects.filter(classification=5).order_by('-update_time')
    serializer_class = serializers.MovieSerializer
class FanzuiList(generics.ListAPIView):
    queryset = models.Movieapi.objects.filter(classification=6).order_by('-update_time')
    serializer_class = serializers.MovieSerializer
class ZhanzhenList(generics.ListAPIView):
    queryset = models.Movieapi.objects.filter(classification=7).order_by('-update_time')
    serializer_class = serializers.MovieSerializer
class JuqingList(generics.ListAPIView):
    queryset = models.Movieapi.objects.filter(classification=8).order_by('-update_time')
    serializer_class = serializers.MovieSerializer
class DongmanList(generics.ListAPIView):
    queryset = models.Movieapi.objects.filter(classification=9).order_by('-update_time')
    serializer_class = serializers.MovieSerializer
class JiluqianList(generics.ListAPIView):
    queryset = models.Movieapi.objects.filter(classification=10).order_by('-update_time')
    serializer_class = serializers.MovieSerializer

class ChinaList(generics.ListAPIView):
    queryset = models.Movieapi.objects.filter(classification=11).order_by('-update_time')
    serializer_class = serializers.MovieSerializer
class HongkongList(generics.ListAPIView):
    queryset = models.Movieapi.objects.filter(classification=12).order_by('-update_time')
    serializer_class = serializers.MovieSerializer
class TaiwanList(generics.ListAPIView):
    queryset = models.Movieapi.objects.filter(classification=13).order_by('-update_time')
    serializer_class = serializers.MovieSerializer
class AmericaList(generics.ListAPIView):
    queryset = models.Movieapi.objects.filter(classification=14).order_by('-update_time')
    serializer_class = serializers.MovieSerializer
class JanpenList(generics.ListAPIView):
    queryset = models.Movieapi.objects.filter(classification=15).order_by('-update_time')
    serializer_class = serializers.MovieSerializer
class OverseasList(generics.ListAPIView):
    queryset = models.Movieapi.objects.filter(classification=16).order_by('-update_time')
    serializer_class = serializers.MovieSerializer
class KoreaList(generics.ListAPIView):
    queryset = models.Movieapi.objects.filter(classification=17).order_by('-update_time')
    serializer_class = serializers.MovieSerializer


class ChinaVarityList(generics.ListAPIView):
    queryset = models.Movieapi.objects.filter(classification=18).order_by('-update_time')
    serializer_class = serializers.MovieSerializer
class JanpenVarityList(generics.ListAPIView):
    queryset = models.Movieapi.objects.filter(classification=19).order_by('-update_time')
    serializer_class = serializers.MovieSerializer
class HongKongVarityList(generics.ListAPIView):
    queryset = models.Movieapi.objects.filter(classification=20).order_by('-update_time')
    serializer_class = serializers.MovieSerializer
class AmericanVarityList(generics.ListAPIView):
    queryset = models.Movieapi.objects.filter(classification=21).order_by('-update_time')
    serializer_class = serializers.MovieSerializer
class ChinaCartoonVarityList(generics.ListAPIView):
    queryset = models.Movieapi.objects.filter(classification=22).order_by('-update_time')
    serializer_class = serializers.MovieSerializer
class JapenCartoonVarityList(generics.ListAPIView):
    queryset = models.Movieapi.objects.filter(classification=23).order_by('-update_time')
    serializer_class = serializers.MovieSerializer
class AmericanCartoonVarityList(generics.ListAPIView):
    queryset = models.Movieapi.objects.filter(classification=24).order_by('-update_time')
    serializer_class = serializers.MovieSerializer
class OverseasCartoonVarityList(generics.ListAPIView):
    queryset = models.Movieapi.objects.filter(classification=25).order_by('-update_time')
    serializer_class = serializers.MovieSerializer
class InterpretationList(generics.ListAPIView):
    queryset = models.Movieapi.objects.filter(classification=26).order_by('-update_time')
    serializer_class = serializers.MovieSerializer







class OverseasList(generics.ListAPIView):
    queryset = models.Movieapi.objects.filter(classification=12).order_by('-update_time')
    serializer_class = serializers.MovieSerializer



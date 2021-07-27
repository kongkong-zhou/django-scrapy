from django.urls import path
from . import views

urlpatterns = [
    path("",views.MovieApiList.as_view()),
    path("<int:pk>/",views.MovieApiDetail.as_view()),
    path("movie/",views.MovieList.as_view()),
    path("movie/<int:pk>/",views.MovieDetail.as_view()),
    path("tele/",views.TeleList.as_view()),
    path("tele/<int:pk>/",views.TeleDetail.as_view()),
    path("cartoon/",views.CartoonList.as_view()),
    path("cartoon/<int:pk>/",views.CartoonDetail.as_view()),
    path("variety",views.VarietyList.as_view()),
    path("variety/<int:pk>/",views.VarietyDetail.as_view()),

    path("tags/dongzuopian/",views.DongzuoList.as_view()),
    path("tags/xijupian/", views.ZhanzhenList.as_view()),
    path("tags/aiqingpian/",views.AiqingList.as_view()),
    path("tags/kehuanpian/", views.KehuanList.as_view()),
    path("tags/kongbupian/",views.KongbuList.as_view()),
    path("tags/fanzuipian/", views.FanzuiList.as_view()),
    path("tags/zhanzhengpian/", views.ZhanzhenList.as_view()),
    path("tags/juqingpian/",views.JuqingList.as_view()),
    path("tags/dongmanpian/", views.DongmanList.as_view()),
    path("tags/jilupian/", views.JiluqianList.as_view()),

    path("tags/guochanju/",views.ChinaList.as_view()),
    path("tags/xianggangju/", views.HongkongList.as_view()),
    path("tags/taiwanju/", views.TaiwanList.as_view()),
    path("tags/meiguoju/", views.AmericaList.as_view()),
    path("tags/ribenju/", views.JanpenList.as_view()),
    path("tags/haiwaiju/", views.OverseasList.as_view()),
    path("tags/hanguoju/", views.KoreaList.as_view()),


    path("tags/daluzongyi/",views.ChinaVarityList.as_view()),
    path("tags/rihanzongyi/", views.JanpenVarityList.as_view()),
    path("tags/gangtaizongyi/", views.HongKongVarityList.as_view()),
    path("tags/oumeizongyi/", views.AmericanVarityList.as_view()),

    path("tags/guochandongman/", views.ChinaCartoonVarityList.as_view()),
    path("tags/rihandongman/", views.JapenCartoonVarityList.as_view()),
    path("tags/oumeidongman/", views.AmericanCartoonVarityList.as_view()),
    path("tags/haiwaidongman/", views.OverseasCartoonVarityList.as_view()),
    path("tags/haiwaiju/", views.OverseasList.as_view()),
    path("tags/dianyingjieshuo/",views.InterpretationList.as_view()),




]
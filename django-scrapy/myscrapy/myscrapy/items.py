# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy
from scrapy_djangoitem import DjangoItem
from myapp.models import Movieapi,Classification,Video

class MovieApiItem(DjangoItem):
    django_model = Movieapi
    tags = scrapy.Field()
    urls = scrapy.Field()

class ClassificationItem(DjangoItem):
    django_model = Classification

class VideoItem(DjangoItem):
    django_model = Video
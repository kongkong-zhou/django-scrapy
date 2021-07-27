# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
from itemadapter import ItemAdapter
from myapp.models import Movieapi,Classification,Video,VideoYun
from xpinyin import Pinyin
from scrapy.pipelines.images import ImagesPipeline
from scrapy.exceptions import DropItem
import scrapy

class ImagesPipeline(ImagesPipeline):
    def get_media_requests(self, item, info):
        yield scrapy.Request(item['img'],meta={'name':item['name']})
    def item_completed(self, results, item, info):
        image_paths = [x["path"] for ok, x in results if ok]
        if not image_paths:
            raise DropItem("Item contains no image")
        item['image_paths'] = image_paths[0].strip("'")
        return item

class MyscrapyPipeline:
    def process_item(self, item, spider):
        try:
            item.save()
        except Exception as e:
            print(e)
        this_movie = Movieapi.objects.get(name=item["name"])
        tag = item["tags"]
        try:
            c = Classification.objects.get(classify_name=tag)
            this_movie.classification.add(c)
            # print(dir(this_movie.movieofvideo))
        except:
            print("新增这个类")
            c = Classification()
            c.classify_name = tag
            p = Pinyin()
            s = "".join(p.get_pinyin(tag).split("-"))
            c.classify_tag = s
            c.save()
            this_movie.classification.add(c)
        for url in item["urls"][0]:
            try:
                v1 = VideoYun()
                v1.video_url = url[1]
                v1.name = url[0]
                v1.movie_id = this_movie.id
                v1.save()
                this_movie.movieofvideoyun.add(v1)
            except Exception as e:
                print(e)
        for url in item["urls"][1]:
            try:
                v = Video()
                v.video_url = url[1]
                v.name = url[0]
                v.movie_id = this_movie.id
                v.save()
                this_movie.movieofvideo.add(v)
            except Exception as e:
                print(e)
        return item

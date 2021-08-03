import scrapy
from ..items import MovieApiItem,ClassificationItem

class Niuninwum3u8Spider(scrapy.Spider):
    name = 'niuninwum3u8'
    allowed_domains = ['765zy.com']
    start_urls = ["http://www.765zy.com/?m=vod-type-id-1.html",
                  'http://www.765zy.com/?m=vod-type-id-2.html',
                  "http://www.765zy.com/?m=vod-type-id-3.html",
                  "http://www.765zy.com/?m=vod-type-id-4.html"
                  ]
    base_url = "http://www.765zy.com"

    def parse(self, response):
        content = response.xpath("//div[@class='xing_vb']/ul")
        for i in content:
            detail = i.xpath("./li/span/a/@href").extract()
            if len(detail) > 0:
                yield scrapy.Request(url=self.base_url + detail[0], callback=self.parseDetail)

        next_url = response.xpath("//a[@class='pagelink_a']/@href").extract()[-2]
        yield scrapy.Request(self.base_url + next_url, callback=self.parse)

    def parseDetail(self, response):
        img = response.xpath("//div[@class='vodImg']/img/@src").extract()[0]
        if img[1] == ".":
            img_url = self.base_url + img[2:]
        elif img[2] == "t":
            img_url = img
        else:
            img_url = self.base_url + img
        name = response.xpath("//div[@class='vodh']/h2/text()").extract()[0]
        try:
            hd = response.xpath("//div[@class='vodh']/span/text()").extract()[0]
        except:
            hd = ""
        score = response.xpath("//div[@class='vodh']/label/text()").extract()[0]

        try:
            other_name = response.xpath("//div[@class='vodinfobox']/ul/li[1]/span/text()").extract()[0]
        except:
            other_name = ""
        try:
            director = response.xpath("//div[@class='vodinfobox']/ul/li[2]/span/text()").extract()[0]
        except:
            director = ""
        try:
            actors = response.xpath("//div[@class='vodinfobox']/ul/li[3]/span/text()").extract()[0]
        except:
            actors = ""
        try:
            serialize = response.xpath("//div[@class='vodinfobox']/ul/li[4]/span/text()").extract()[0]
        except:
            serialize = ""
        tags = response.xpath("//div[@class='vodinfobox']/ul/li[5]/span/text()").extract()[0].strip()
        try:
            area = response.xpath("//div[@class='vodinfobox']/ul/li[6]/span/text()").extract()[0]
        except:
            area = ""
        try:
            language = response.xpath("//div[@class='vodinfobox']/ul/li[7]/span/text()").extract()[0]
        except:
            language = ""
        release_time = response.xpath("//div[@class='vodinfobox']/ul/li[8]/span/text()").extract()[0]
        update_time = response.xpath("//div[@class='vodinfobox']/ul/li[9]/span/text()").extract()[0]
        info = response.xpath("//div[@class='vodplayinfo']/text()").extract()[0]
        urls = []
        hlss = []
        yuns = []
        try:
            yun_urls = response.xpath("//div[@class='vodplayinfo']/div/ul[1]/li")
            for yun_url in yun_urls:
                yunurl = yun_url.xpath("./a/text()").extract()[0].split('$')
                yuns.append(yunurl)
        except Exception as e:
            print(e)
        urls.append(yuns)
        try:
            hls_urls = response.xpath("//div[@class='vodplayinfo']/div/ul[2]/li")
            for hls_url in hls_urls:
                hlsurl = hls_url.xpath("./a/text()").extract()[0].split('$')

                hlss.append(hlsurl)
        except Exception as e:
            print(e)
        urls.append(hlss)
        item = MovieApiItem()
        item["img"] = img_url
        item["name"] = name
        item["hd"] = hd
        item["score"] = score
        item["other_name"] = other_name

        item["director"] = director
        item["actors"] = actors
        item["serialize"] = serialize
        item["area"] = area
        item["language"] = language

        item["release_time"] = release_time
        item["update_time"] = update_time
        item["info"] = info
        item["tags"] = tags

        item["urls"] = urls

        yield item
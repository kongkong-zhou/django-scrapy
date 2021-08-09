#!/bin/bash
cd /var/www/html/mydjango/
python manage.py collectstati --noinput
python manage.py migrate

cd ../myscrapy
scrapy crawl tainkong
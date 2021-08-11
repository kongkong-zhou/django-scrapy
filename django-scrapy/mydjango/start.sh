#!/bin/bash
while !nc -z db 3307;do
  echo "waiting for the MYSQL server"
  sleep3
doen

python manage.py collectstati --noinput&&
python manage.py makemigrations &&
python manage.py migrate

uwsgi --ini /var/www/html/myproject/uwsgi.ini&&

exec "$@"
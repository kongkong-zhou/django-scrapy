FROM python:3.7
ENV PYTHONUNBUFFERED 1

RUn apt-get update
RUN apt-get install python3-dev default-libmysqlclient-dev -y

RUN mkdir -p /var/www/html
WORKDIR /var/www/html
RUN pip install pip -U
ADD requirements.txt /var/www/html
RUN pip install uwsgi && pip install -r requirements.txt

ADD . /var/www/html
# RUN chmod +x ./start.sh
# ENTRYPOINT /bin/bash ./start.sh
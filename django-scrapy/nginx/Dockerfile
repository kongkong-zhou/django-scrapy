FROM nginx:latest

EXPOSE 80 8000

RUN rm /etc/nginx/conf.d/default.conf
ADD nginx.conf /etc/nginx/conf.d/
RUN mkdir -p /usr/share/nginx/html/static
RUN chown -R www-data:www-data /usr/share/nginx/html/static

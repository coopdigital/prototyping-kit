FROM nginx:1.15.8

# Slows down build considerably though; needed for .htaccess/.htpasswd
RUN apt-get update
RUN apt-get install apache2-utils --yes
RUN htpasswd -c /etc/nginx/.htpasswd nginx

COPY default.conf.template /etc/nginx/conf.d/default.conf.template
COPY nginx.conf /etc/nginx/nginx.conf
COPY dist /usr/share/nginx/html

COPY .htaccess /etc/nginx/
COPY .htpasswd /etc/nginx/

CMD /bin/bash -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'
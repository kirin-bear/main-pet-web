FROM nginx:1.21.0-alpine

COPY ./docker/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf
COPY . /srv

WORKDIR /srv
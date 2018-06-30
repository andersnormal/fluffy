# Use the official node image
#  from https://hub.docker.com/r/library/node/
FROM node:10.5.0-alpine

# install nginx and link logs
RUN apk --no-cache add nginx bash \
  && ln -sf /dev/stdout /var/log/nginx/access.log \
  && ln -sf /dev/stderr /var/log/nginx/error.log \
  && mkdir /var/run/nginx

# nginx
COPY conf/default.conf /etc/nginx/conf.d/default.conf
COPY conf/nginx.conf /etc/nginx/nginx.conf

# start script
COPY scripts/start.sh /start.sh

# module
COPY . /fluffy

# link package
RUN cd /fluffy \
  && npm i --production \
  && ln -s /fluffy/bin/fluffy /usr/local/bin/fluffy \
  && chmod +x /start.sh

EXPOSE 80

STOPSIGNAL SIGTERM

ENTRYPOINT ["/start.sh"]

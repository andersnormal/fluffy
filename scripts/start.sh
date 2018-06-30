#!/bin/bash

# Increase the memory_limit
if [ ! -z "$PUBLIC_FOLDER" ]; then
 sed -ri -e 's!/usr/src/app/public!${PUBLIC_FOLDER}!g' /etc/nginx/sites-available/default.conf
fi

# nginx
nginx

# Execute fluffy
# exec ./bin/fluffy
fluffy $@


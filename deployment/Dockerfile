FROM nginx:alpine
LABEL maintainer="Niko Köbler, @dasniko, https://www.n-k.de"

# copy the server run configuration
COPY deployment/bookbox.conf /etc/nginx/conf.d/default.conf

# the actual app files
COPY build /etc/nginx/html

FROM httpd:alpine
COPY ./assets/ /usr/local/apache2/htdocs/assets/
COPY ./css/ /usr/local/apache2/htdocs/css/
COPY ./en/ /usr/local/apache2/htdocs/en/
COPY ./js/ /usr/local/apache2/htdocs/js/
COPY ./index.html /usr/local/apache2/htdocs/
COPY ./favicon.ico /usr/local/apache2/htdocs/
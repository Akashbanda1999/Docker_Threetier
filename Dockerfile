FROM ubuntu:latest
LABEL DEVOPSENGG="Akash"
RUN  apt update
RUN apt install apache2 unzip -y
RUN rm -rf /var/www/html/index.html
WORKDIR /var/www/html/
#ADD https://www.free-css.com/assets/files/free-css-templates/download/page296/healet.zip .
COPY healet.zip .
RUN unzip healet.zip
RUN mv healet-html/*  .
EXPOSE 80
CMD ["apache2ctl" , "-DFOREGROUND"]
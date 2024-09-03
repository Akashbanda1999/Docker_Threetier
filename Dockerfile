FROM ubuntu:latest
LABEL DEVOPSENGG="Akash"
RUN  apt update
RUN apt install apache2 unzip -y
RUN rm -rf /var/www/html/index.html
WORKDIR /var/www/html/
#ADD https://www.free-css.com/assets/files/free-css-templates/download/page296/healet.zip .
COPY Medi.zip .
RUN unzip Medi.zip
RUN cp Medi-html/*  .
EXPOSE 80
CMD ["apache2ctl" , "-DFOREGROUND"]
FROM ubuntu:latest
LABEL microservicehost="traffic-light"
RUN apt update
RUN apt install nginx -y
RUN rm -rf /var/www/html/index.html
WORKDIR /var/www/html/
COPY . .
EXPOSE 88
CMD ["nginx", "-g", "daemon off;"]
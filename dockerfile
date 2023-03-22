FROM nginx:1.11-alpine

COPY . /var/www/html

  
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

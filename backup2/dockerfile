FROM nginx:1.11-alpine

COPY . /var/www/html
COPY nginx.conf /etc/nginx/sites-enabled
  
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

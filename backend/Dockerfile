FROM nginx

COPY nginx.conf /etc/nginx/nginx.conf

COPY  /var/www/html /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
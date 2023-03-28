<<<<<<< HEAD
 FROM nginx:1.11-alpine

 COPY . /var/www/html
  
 EXPOSE 80

 CMD ["nginx", "-g", "daemon off;"]
=======
FROM nginx:1.11-alpine

COPY . /var/www/html
COPY nginx.conf /etc/nginx/sites-enabled
  
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
>>>>>>> 09e07ea09c84176529de524eac39f66267d68652

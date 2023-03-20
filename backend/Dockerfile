 FROM nginx:1.11-alpine

 COPY checkInput.js /usr/share/nginx/html
 COPY readCSV.js /usr/share/nginx/html
 COPY saveCSV.js /usr/share/nginx/html
  
 EXPOSE 80

 CMD ["nginx", "-g", "daemon off;"]
FROM nginx:1.11-alpine

COPY /Frontend//html/index.html /usr/share/nginx/html
COPY /backend/checkInput.js /usr/share/nginx/html
COPY /backend/readCSV.js /usr/share/nginx/html
COPY /backend/saveCSV.js /usr/share/nginx/html

EXPOSE 3000

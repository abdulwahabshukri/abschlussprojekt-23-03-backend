
# Use a base image with the necessary dependencies
FROM node:14-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --only=production
EXPOSE 3000
CMD ["npm", "start"]


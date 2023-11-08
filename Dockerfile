FROM node:latest

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app sources
COPY service1.js .

EXPOSE 8080
CMD [ "node", "service1.js" ]

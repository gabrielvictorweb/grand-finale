FROM node:20.10-alpine

LABEL maintainer="Gabriel Victor <gabrielvictorweb@gmail.com>"

LABEL description="This Dockerfile installs node"

# Create app directory
WORKDIR /app

# Bundle files
COPY ./app .

#Update npm 
RUN npm install -g npm@latest

# Install dependencies
RUN npm install

# Expose ports 8081 19001 19002
EXPOSE 8081 19001 19002
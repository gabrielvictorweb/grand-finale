FROM node:20.10-alpine

WORKDIR /web 

LABEL maintainer="Gabriel Victor <gabrielvictorweb@gmail.com>"

LABEL description="This Dockerfile installs node"

COPY ./web .

RUN npm install -g vite
RUN npm install -g npm@latest
RUN npm install --save-dev
RUN npm install

EXPOSE 5173
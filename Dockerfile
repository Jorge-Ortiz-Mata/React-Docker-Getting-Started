FROM node:16 as base

WORKDIR /react-app-01

RUN apt-get update -qq \
    && apt-get install -y nodejs \
    ca-certificates \
    curl \
    sudo \
    postgresql-client \
    imagemagick \
    libvips

COPY package.json .

RUN npm install

COPY . .

VOLUME [ "/react-app-01/node_modules" ]

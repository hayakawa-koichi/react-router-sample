FROM node:18-slim

ENV TZ Asia/Tokyo

WORKDIR /home/node/app

COPY ./ /home/node/app

EXPOSE 3000

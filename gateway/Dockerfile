FROM node:16
LABEL maintainer balde.saikou@gmail.com
WORKDIR /usr/src/app
COPY ./ ./
RUN npm install nodemon && \
    npm install && \
    apt update && apt install vim -y
EXPOSE 9001
#CMD ["PORT=8080","npm","start"]

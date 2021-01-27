#!/bin/sh
docker run --name mysql-standalone -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=db_store -e MYSQL_USER=akashsharma -e MYSQL_PASSWORD=password -d mysql:5.6

docker build . -t store-web-app-backend

docker run -p 8080:8080 --name store-web-app-backend --link mysql-standalone:mysql -d store-web-app-backend

docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD

docker tag store-web-app-backend:latest $DOCKER_USERNAME/store-web-app-backend:latest

docker push $DOCKER_USERNAME/store-web-app-backend:latest


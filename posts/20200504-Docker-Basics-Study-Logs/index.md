---
title: "Docker Basics Study Logs."
date: "2020-05-04"
tags: ["docker", "log"]
category: "tech"
---

This is my logs, while taking the [docker mastery](https://www.udemy.com/course/docker-mastery/) course on Udemy.

## Create and Use Containers

```bash
docker version
# verified cli can talk to engine

docker info
# most config values of engine
```

```
docker <command> <sub-command>
```

```
docker container run --publish --detach 80:80 nginx
```

1. Download image `nginx` from Docker Hu
2. Started a new container from that image
3. Opened port 80 on the host IP
4. Routes that traffic to the container IP, port 80

`--detach` will make it run on the background.

```bash
docker container ls

docker container stop ea

docker container ls -a
# Container are created on every container run

docker container run --publish --detach 80:80 nginx
# with names

docker container logs webhost
# Checks logs

docker container top webhost
# Check the process of the container

docker container rm -f webhost
# Remove running container
```

- Behind `docker container run`

```
docker container run --publish 8080:80 --name webhost -d nginx:1.11 nginx -T
```

1. Looks for that image locally in image cache
2. Looks in remote image repository (defaults to Docker Hub)
3. Download the latest version (nginx:latest by default)
4. Creates a new container based on that image and prepares to start
5. Gives it a virtual IP on a private network inside docker engine
6. Opens up port 80 on host and forward to port 80 in container
7. Starts container by using `CMD` in the image Dockerfile

- Containers are just process

- Creating 3 different containers

```bash
docker container run --name nginx --publish 80:80  --detach nginx
docker container run --name httpd --publish 8080:80 --detach httpd
docker container run --name mysql --publish 3306:3306 --env MYSQL_RANDOM_ROOT_PASSWORD=yes --detach mysql

docker container logs mysql
# to check the generated root password
```

- What's going on the container

```bash
docker container top  <container_id>
# list proces in one container

docker container inspect <container_ID>
# Gets JSON detail of one container

docker container stats
# Can check all the running container, and make sure to check THE CPU, and memory
```

- Getting a shell inside container

```bash
docker container run -it --name proxy nginx bash

docker container start -ai proxy
# start again, for stopped containers

docker container exec -it mysql bash
# creates additional process, and jump it to the shell for running container
```

- Network

Virtual Network can have multiple containers, can communicate together.

```bash
docker container port <container>
# Quick port check
```

```bash
docker network ls
# show network

docker network inspect <network>
# inspect network, and which containers are inside this network

docker network create my_app_net

docker network connect/disconnect
# connect/disconnect current containers
```

- DNS

The container name works as a host name of the container, so if two containers are in the same virtual network, you can ping each other.

But this needs to be using the default `bridge` network drive, allowing containers to communicate with each other when running on the same docker host.

```bash
docker container run -d --name new_nginx --network my_app_net nginx
# specifying network when running container

docker network inspect my_app_net
```

- Emulate DNS Round Robin

```bash
docker network create search_net

docker container run -d --name search1 --network search_net --network-alias search elasticsearch:2
docker container run -d --name search2 --network search_net --network-alias search elasticsearch:2

docker container run --rm --net search_net alpine nslookup search
# Server:         127.0.0.11
# Address:        127.0.0.11:53
#
# Non-authoritative answer:
#
# Non-authoritative answer:
# Name:   search
# Address: 172.20.0.3
# Name:   search
# Address: 172.20.0.2

docker container run -it --name centos --net search_net centos
# Check if the response of the elasticsearch has different two different names, when you request couple of times
```

## Docker Image

- Consider small OS like alphine

- Layered

```bash
docker image history <image>
docker image inspect <image>
```

- Tags

```bash
docker image tag nginx kawamurakazushi/nginx
docker image push kawmaurakazushi/nginx

docker image tag kawamurakazushi/nginx kawamurakazushi/nginx:testing
```

- Building from Dockerfile

```Dockerfile
FROM
ENV
# set environment variable
WORKDIR
# bascially change directory
COPY
# copy from local
CMD
```

You should put the commands that change the least on the top, and the command that changet most on the bottom, since it caches from the top.

```bash
docker image build customnginx .
```

- if you don't specify `CMD`, it will inherit from the image from `FROM`.

```
docker image build -t nginx-with-html .
docker container run -p 80:80 --rm nginx-with-html
```


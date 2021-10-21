---
title: "Setting up Rust Graphql using actix / juniper / sqlx"
date: "2021-10-17"
tags: ["rust"]
category: "tech"
---

## Introduction

...

## Preparation

First for let's create a simple database with some basic data structures, `users` and `posts`.

Save the following sql file as `init.sql`.

```sql
-- Users
CREATE TABLE users (
    "id" uuid NOT NULL,
    "name" text,
    PRIMARY KEY ("id")
);

-- Posts
CREATE TABLE posts (
    "id" uuid NOT NULL,
    "user_id" uuid NOT NULL,
    "body" text,
    PRIMARY KEY ("id")
);
```

And run Postgres using Docker.
This will run a the database with the following structures.

```bash
docker run --rm \
    -p 5433:5432 \
    -e POSTGRES_HOST_AUTH_METHOD=trust \
    -v $(pwd)/init.sql:/docker-entrypoint-initdb.d/init.sql \
    postgres:12-alpine
```

Add the following dependencies to to the projects:

```json
[dependencies]
actix-cors = "0.5.4"
actix-web = "3.3.2"
juniper = "0.15.7"
sqlx = { version = "0.4.1", features = [ "postgres", "runtime-actix-rustls", "uuid" ] }
```

The prepration is done, so let's start coding...

## Starting up simple graphql server

## Connect sqlx

## Summary

Next I want to write about dataloaders.

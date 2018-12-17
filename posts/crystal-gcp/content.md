---
title: "Deploying Crystal application to GAE (Google App Engine)"
date: "2018-12-17"
tags: ["crystal", "kemal", "Google App Engine"]
category: "tech"
thumbnail: "./thumbnail.png"
---

## Introduction

In this article I will be creating a dumb and simple API and deploy it to GAE (Google App Engine).  
There is not so much documentation about deploying a crystal app to GAE, so it might be valuable for some developers.

For the web server I will be using [Kemal](https://github.com/kemalcr/kemal). It is a simple web server for Crystal, and very similar to [Sinatra](https://github.com/sinatra/sinatra) in Ruby.

## Installation

First you will need to install Kemal.  
Add _kemalr/kemal_ to your shards.yml file.

_shards.yml_

```yml
name: app_name
version: 0.1.0

targets:
  app_name:
    main: src/main.cr

crystal: 0.27.0

license: MIT

dependencies:
  kemal:
    github: kemalcr/kemal
```

And install the dependencies.

```bash
$ shards install
```

Everything is setup, so let's start coding.

## Code

For this example, I will be creating one route, which is the root(/) and returning a static JSON.

_src/main.cr_

```ruby
require "kemal"

before_all do |env|
  env.response.content_type = "application/json"
end

get "/" do
  {"app": "Hello World", "version": "0.1.0"}.to_json
end

Kemal.run
```

Build and run the app.

```
$ crystal build src/main.cr
$ ./main
```

Access _http://localhost:3000_, then it will display the following JSON.

```json
{
  "app": "Hello World",
  "version": "0.1.0"
}
```

Not so interesting, but let's get it up on Google App Engine.

## Deploy

Theres are two things you have to complete before starting to deploy to GAE.  
You should follow google's official documentation for these.

- Create a new Google Cloud Platform project and App Engine application using the Google Cloud Platform Console

  Docs : https://cloud.google.com/appengine/

- Download and install Cloud SDK and then initialize the gcloud tool:

  Docs : https://cloud.google.com/sdk/

### Requirements

GAE has a lot of support for many languages (Go, PHP, Java, [etc...](https://cloud.google.com/appengine/docs/)), which makes it extremely easy to deploy.  
Unfortunately Crystal has no support, so you have to create your own **[custom runtime](https://cloud.google.com/appengine/docs/flexible/custom-runtimes/about-custom-runtimes)**.

To create a custom runtime you must,

- Provide an app.yaml file that describes your application's runtime configuration to App Engine.
- Add a Dockerfile that internally configures the runtime environment.
- The server needs to be listening to port 8080

> https://cloud.google.com/appengine/docs/flexible/custom-runtimes/build

### Provide an app.yaml

Your app.yaml configuration file must contain at least the following settings:

```yml
runtime: custom
env: flex
```

This needs to be stored in the root of the project.

### Add a Dockerfile, and listens to port 8080.

Provide your Dockerfile to the same path as your app.yaml.  
And don't forget to name it _Dockerfile_.

```dockerfile
FROM crystallang/crystal

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY ./ ./

RUN crystal build src/main.cr --release

EXPOSE 8080

CMD ["./main", "-p", "8080"]
```

This Dockerfile should configure the environment for crystal, copies all the code, and build.

And most importantly run the app in port 8080, which GAE expects.

### Finally Deploy it!

finally..

```
gcloud app deploy
```

After waiting for few minutes, it will be deployed, and can be accessed by _https://your-project.appspot.com_.

## Summary

At the end it was very simple. The only complexity was configuring the Dockerfile (which was still very simple for a crystal app).  
This method can be applied to any kind of language without support from GAE!

Happy Coding!

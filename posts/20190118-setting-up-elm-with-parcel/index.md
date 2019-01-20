---
title: "Setting up elm with parcel"
date: "2019-01-18"
tags: ["elm", "parcel"]
category: "tech"
thumbnail: "./thumbnail.jpg"
---

## Introduction

[Parcel](https://parceljs.org/) is a zero configuration web application bundler, and it is actual **zero configuration**.

Recently in [v1.10.0](https://github.com/parcel-bundler/parcel/blob/master/CHANGELOG.md#1100---2018-09-25) parcel added support for Elm, so I would like to try it.

## Requirements

- yarn
- elm

Should be installed.

## Installation

First let's create a project directory.

```
mkdir myapp
cd myapp
```

And initialize the project with _yarn_ and _elm_.

```bash
yarn init
elm init
```

This will create _package.json_, _elm.json_, _src/_.

Then add the dependecies for parcel, using yarn.

```bash
yarn add -D parcel-bundler
```

## Code

The first file you create will be _src/index.html_. This will be the entry point of the application, and parcel will be responsible for resolving any dependencies that is contained in this file.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document</title>
  </head>
  <body>
    <main></main>
  </body>
  <script defer src="./index.js"></script>
</html>
```

Next will the the elm application code. Let's copy and paste the incrementing number app from the [elm guide](https://guide.elm-lang.org/) and save it as _src/Main.elm_.

```elm
import Browser
import Html exposing (Html, button, div, text)
import Html.Events exposing (onClick)

main =
  Browser.sandbox { init = 0, update = update, view = view }

type Msg = Increment | Decrement

update msg model =
  case msg of
    Increment ->
      model + 1

    Decrement ->
      model - 1

view model =
  div []
    [ button [ onClick Decrement ] [ text "-" ]
    , div [] [ text (String.fromInt model) ]
    , button [ onClick Increment ] [ text "+" ]
    ]
```

And finally we will create _src/index.js_, which is imported in _src/index.html_.

This will initialize the elm application, and renders it under the _main_ tag.

```javascript
import { Elm } from "./Main";

Elm.Main.init({
  node: document.querySelector("main"),
});
```

## Running the server

Running the server is extremely easy in parcel.

```
yarn parcel src/index.html
```

The initial load will take a little longer, since it also installs the dependencies of elm, and also the missing dependencies in yarn.

These are the installed dependencies that parcel has automatically detected:

```
"elm-hot": "^1.0.1",
"node-elm-compiler": "^5.0.1",
```

## Summary

This article should give you a start when creating an elm application.

Happy Coding!

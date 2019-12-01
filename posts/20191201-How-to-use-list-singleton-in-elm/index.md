---
title: "How to use List.singleton in elm."
date: "2019-12-01"
tags: ["elm"]
category: "tech"
---

## Introduction

I wrote about some basic tips in functional programming a while ago in this [article](/20191123-Basic-Functional-Programming-Tips-using-elm/) (Basic Functional Programming Tips using elm).

One of the topic was composing functions with `>>` `<<` to do point free programming.

And in this article I want to introduce about one specific function in the List module which is `List.singleton`.

## What is List.singleton

First, let's see the [type definition](https://package.elm-lang.org/packages/elm/core/latest/List#singleton).

```elm
singleton : a -> List a
```

What it simply does is it _creates a list with only one element_.

```elm
singleton 1234 == [1234]
singleton "hi" == ["hi"]
```

It's very simple and straight forward, but when I first look at this **function**, I thought why would any one use this, while you can just define a List on the fly like `[1234]` and `["hi"]`.

But beauty of this is, that `List.singleton` is a **function**.

Meaning you can compose this with other functions 😤

## How to use

Let's take a took at some real life examples.

If you have a List of String, and you want to map the elements and display it as a Html.text. Probably the most simplest approach will be the following.

```elm
import Html exposing (Html, div, text)

fruits : List String
fruits = ["Apple", "Banana", "Peach", "Mango"]

view : Model -> Html msg
view model =
    div [] (fruits |> List.map (\(fruit) -> div [] [text fruit]))

-- div [] [ div [] [text "Apple"], div [] [text "Banana"] ...]
```

This is totally valid, but you can re-write using `List.singleton`.

```elm{8}
import Html exposing (Html, div, text)

fruits : List String
fruits = ["Apple", "Banana", "Peach", "Mango"]

view : Model -> Html msg
view model =
    div [] (fruits |> List.map (div [] << List.singleton << text))
```

Very concise and clean 🤩

You can also use this technique in any kind of map functions.

### Maybe.map

If you want to display the text depending on the Maybe value.

```elm
header : Maybe String
header = Just "foobar"

header
  |> Maybe.map (div [] << List.singleton << text)
  |> Maybe.withDefault (Html.text "")
```

### Tuple.mapSecond

If you want to use other Component module from your own modules.

You will call the init function of the Component, then wrapping the Cmd using `Cmd.map`, with the module's own Msg.

The common approach will be something like this.

```elm
--- Component.elm, Some random component

init : (Model, Cmd Msg)
init = (model, cmd)

--- Main.elm

init : (Model, Cmd Msg)
init =
    let
        (model, cmd) = Component.init
    in
    ({component = model, something = 100} , Cmd.batch [myCmd, cmd |> Cmd.map ComponentMsg])
```

You can do something like this.
Though this might be a overkill, and lose some scalability.

```elm
--- Main.elm

init : (Model, Cmd Msg)
init =
    Component.init
        |> Tuple.mapFirst (\m -> {component = m, something = 100})
        |> Tuple.mapSecond
             (Cmd.batch << (++) [ myCmd ] << List.singleton << Cmd.map ComponentMsg)
```

## Summary

List.singleton is a very simple function, but it has lots of potentials for making your code much nicer to read.

When I first figured this out, I looked though all the code that I wrote in elm, and refactored using the techniques.

Hope you enjoyed reading this article.

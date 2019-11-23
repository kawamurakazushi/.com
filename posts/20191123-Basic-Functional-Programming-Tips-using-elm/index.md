---
title: "Basic Functional Programming Tips using elm."
date: "2019-11-21"
tags: ["elm"]
category: "tech"
---

## Introduction

[elm](https://elm-lang.org/) is a good intro for Functional Programming.
It's simple. The language only has a small set of functional features compared with other full-featured language like Haskell.

For Functional Programmers, you might feel it's not enough, but for Functional Programming beginners, I think it's a great starting point to learn.

In this article I will not cover about the web aspect of elm, it will be about the programming language it self.

As a FP beginner, I wanted to share with some simple example what tool and libraries were useful to write functional code.

## Manipulating List

First simple example is `map`, `filter` and `fold`. I think most of the people is familiar with it, since it's becoming a defacto-standard in many programming languages.

### List.map

`List.map` will apply a function to every element of list.

This is a type definition:

```elm
map : (a -> b) -> List a -> List b
```

It will take a function that gets `a` and return `b`, takes a list of element `a` as a second parameter, and finally returns list of `b`

```elm
List.map (\a -> a * 2) [1, 2, 4]
-- [2, 4, 8]
```

You can use the pipe operator `|>` to make it look more functional.

This is the type definition and the [implementation](https://github.com/elm/core/blob/1.0.2/src/Basics.elm#L873):

```elm
(|>) : a -> (a -> b) -> b

---

apR : a -> (a -> b) -> b
apR x f =
  f x
```

The code can be refactored like this.

```elm
[1, 2, 4]
  |> List.map (\a -> a * 2)
```

As you may know operators like `*` is also a function that has the type definition as follows.

```elm
(*) : number -> number -> number
```

Meaning we can rewrite the function like.

```elm
[1, 2, 4]
  |> List.map (\a -> (*) 2 a)
```

In the end we can refactor the code like this, since `(*) 2`'s type is `number -> number`, which matches the type of the first parameter of List.map which is `(a -> b)` in this case both `a` and `b` is number.

```elm
[1, 2, 4]
  |> List.map ((*) 2)
```

This is called _point free programming_, and one of the fun parts in functional programming.

### List.filter

`List.filter` filters the elements that satisfy the condition.

This is the type definition.

```
filter : (a -> Bool) -> List a -> List a
```

Let's write a simple example of filtering only even numbers

```elm
[1, 2, 3, 4, 5]
  |> List.filter (\a -> modBy 2 a == 0)
-- [2, 4]
```

It's looks nice, it's uses pipes, but can we make it more concise, meaning we make it _point free_?

Yes we can! By introducing `>>` the compose operator.

```elm
[1, 2, 3, 4, 5]
  |> List.filter (modBy 2 >> (==) 0)
```

Looks super nice! And by leveraging the `|>` pipes, you can pipe as many functions and modify the list.

```elm
[1, 2, 3, 4, 5]
  |> List.filter (modBy 2 >> (==) 0)
  |> List.map ((*) 3)
```

### List.foldl & List.foldr

Last function I want to introduce is the `List.foldl` and `List.foldr`. In some programming language it's also known as `reduce`.

It reduces a list from the left for `List.foldl` and right for `List.foldr`.

The type definition is the same for both function.

```elm
 (a -> b -> b) -> b -> List a -> b
```

The first parameter is a function that takes **2** parameters, the first parameter is the element of the list, and the second parameter is the _accumulator_, meaning it will the output, after iterating the elements.

The second parameter is the initial value of the accumulator.

The most famous example is summing up each elements in a list.

```elm
[1, 2, 3, 4]
  |> List.foldl (\a b -> a + b) 0
-- 10
```

Notice the `(+)` type definition is `number -> number -> number`, which again matches the type definition of the first paramter of `foldl`, since the initial value a `number`.

By this you can refactor the code something like this:

```elm
[1, 2, 3, 4]
  |> List.foldl (+) 0
```

Nice and simple 😌

## Summary

Though we only looked at **3** basic function of a List, there's a quite a few techniques you can use to make the code look more functional by using `|>` and `>>`, and using operators like `(+)` and `(*)` in a functional way.

There's a lot more interesting functions in List package in elm, like `filterMap`, and `singleton`.
Which I'm happy to write and share about it later on.

## Reference

If you are more interested it's worth taking a look at the core documentation.
The code is also enjoyable to read!

https://package.elm-lang.org/packages/elm/core/latest/Basics
https://package.elm-lang.org/packages/elm/core/latest/List

Thanks for Reading.

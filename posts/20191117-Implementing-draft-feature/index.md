---
title: "Implementing a draft feature in GatsbyJS Blog"
date: "2019-11-17"
tags: []
category: "tech"
---

## What I wanted to Achieve

There are couple of solution where you can achieve writing drafts using GatsbyJS
And most of it is by filtering with the status of each articles.

But one of the problems of this is, you need to filter it through your GraphQL queries.
Which means you might mistake if you have several places that uses this query.

I wanted something that you just need to do once and works. In detail, it will show on development mode but not on production mode.

## How I tackled this problem

My solution is very simple. Handling by the **file name**. In my case by filtering file that is `draft.md` and only allowing other markdown files.

This is because you can handle the *filtering* in `gatsby-config.js`, and not in the *query*.
Meaning you don't need to change your running code.

This is possible because the `gatsby-source-filesystem` plugin allows us to `ignore` files by their name but not by the some variable inside the markdown file.


```js{9}
// gatsby-config.js

module.exports = {
  plugins: [
    {
      options: {
        name: "posts",
        path: `${__dirname}/posts/`,
        ignore: process.env.NODE_ENV === "production" ? [`**/draft.md`] : [],
      },
      resolve: "gatsby-source-filesystem",
    },
    //..
  ]
  //..
}
```

By using the easy `process.env.NODE_ENV`, you can have the draft feature on development mode but not on production mode.

And if you want to publish the articles you can just change the name of file from `draft.md` to `index.md`.

## Summary

It's not the most elegant solution, but I think it's simple and achieves what I wanted to do.


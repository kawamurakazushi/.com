---
title: "Implementing a draft feature in GatsbyJS Blog"
date: "2019-11-08"
tags: []
category: "tech"
---

## What I wanted to archieve

## How I tackle this problem

Filtering by naming then draft markdown file as `draft.md`

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

The beauty is in `ignore` field.

## Some scripts for generating blog post

```bash
#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const d = new Date();
const year = d.getFullYear();
const month =
  d.getMonth() + 1 < 10 ? `0${d.getMonth() + 1}` : `${d.getMonth() + 1}`;
const date = d.getDate() < 10 ? `0${d.getDate()}` : `${d.getDate()}`;

const dir = `posts/${year}${month}${date}-`;
const fileName = "draft.md";
const content = `---
title: "Hello World"
date: "${year}-${month}-${date}"
tags: []
category: "tech"
---
`;

fs.mkdirSync(dir);
fs.writeFileSync(path.join(dir, fileName), content);
```

https://dev.to/cole_ruche/implementing-a-draft-feature-in-a-gatsby-blog-1m7o

https://www.chaseadams.io/gatsby-drafts/

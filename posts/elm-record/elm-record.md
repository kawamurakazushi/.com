---
title: 'What is Record in Elm ?'
date: '2018-11-15'
tags: ['elm']
category: 'tech'
---

## Record

These are some intersting aspect that are different from other programing language.

- You cannot ask for a field that does not exist.
- No field will ever be _undefined_ or _null_.
- You cannot create recursive records with a this or self keyword.

### Creating new object

To update field in the record,
which means creating a new object from an object.

You can do it as follows:

```elm
{ model | keywords = model.keywords ++ [ model.newKeyword ] };
```

If you want to change multiple fields, you can specify it with a _comma_.

```elm
{ model | keywords = model.keywords ++ [ model.newKeyword ], newKeyword = "" };
```

### Access

There are few different ways to actually access to the model.

```elm
model.keywords;
.keywords model;
```

The _keyword_ can act like a function. Pretty cool.

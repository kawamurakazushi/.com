---
title: "PUT or PATCH. Which should I use for a RESTful API?"
date: "2018-12-15"
tags: ["HTTP", "API"]
category: "tech"
---

## First of all

When designing an API, most of the time you will have CRUD (Create/Read/Update/Delete) system for each resource.
And you will need to think about what HTTP method to use for each CRUD.
Normally you will map it as follows:

- **Create** : POST
- **Read**: GET
- **Update** : PUT/PATCH
- **Delete** : DELETE

There's one problem.

There's 2 options for update.

Is it the same thing? Not really.

## PUT

PUT is a total replacement.
PUT request always contains a full resource, and return the same resource.
This makes the PUT request idempotent\*, which is a necessary quality for a PUT request.
So if there is no resource to _replace_, it will create a new resource to keep the idempodence.

_idempotent_ : In the API point of view, idempotent means, it will produce the **same** result when calling the same request repeatedly.

But this will waste a lot of network bandwidth, if you want to update a part of a resource.
Nevertheless sending a part of a resource, and letting the server decide which to update will loose idempotence.

This is where PATCH come into place.

## PATCH

> Several applications extending the Hypertext Transfer Protocol (HTTP)
> require a feature to do partial resource modification. The existing
> HTTP PUT method only allows a complete replacement of a document.
> This proposal adds a new HTTP method, PATCH, to modify an existing
> HTTP resource.

[RFC 5789](https://tools.ietf.org/html/rfc5789)

PATCH is _not_ idemdepotent.
PATCH request will just contain the minor changes that you want to make in _a_ resource.
It's versatile, it allow partial updates, full, and any other side effects to other resource that you won't expect.

And unlike PUT if you can't find that particular resource, it will fail instead of creating a new resource.

## So which should I use?

It really depends, but in my use case of an API I would use a PATCH for an update although It might be considered unsafe.

In real world situation you want to edit a part of a resource, and not a full replacement.
And for instance, updating resources that has _created_at_ and _updated_at_, is often unpredictable for the end user.

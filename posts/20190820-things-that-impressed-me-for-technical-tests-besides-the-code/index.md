---
title: "Things that impressed me for Technical Tests beside the Code."
date: "2019-08-20"
tags: ["interview"]
category: "tech"
---

Recently in our company we have been giving technical assignments for candidate who are web engineers.

The assignment is about designing an API from a giving frontend page.

There's no any strict requirements, but there is a time frame which is a day. So the candidates has to decide all of the technical stacks, and design choices, which includes the language, framework, database, data structure, etc.

After reviewing couple of the assignments, I started to gain knowledge about what kind of assignment will impress the reviewer from a recruiting point of view.

I'd like to share few of the point that I felt impressive while I was reviewing.

## Documentation

A lot of people do not write any documentation. Most of the reviewer won't spend time reviewing all the code. Documentation would help them speed up the reviewing and evaluation.

I think it's a must have to have a simple but a concrete documentation of the assignment to let then get a grasp understanding of what you have done.

These are what I think a good documentation should include:

### About your technical design choices

If the test doesn't provide you with a specific language or framework to use, you should include why you have made these choices.

If there's a good reason compared to other design choices, you can emphasize that you are a good architect.

It can be simply "Because I am familiar with it", because this is also a great reason.

### Build / Deploy / Tests

**Build**

Instruction how to build is extremely important, because we can't really spend time guessing how to build.
`Dockerfile` would be super nice with the set of `docker-compose.yml`, because we all have different OS, and environment. And a simple `docker-compose up` is super easy to run. The recruiter just need Docker to be installed.

**Deploy**

I don't consider deploying it in a server like Heroku, Now, or Netlify is a must have, but it will be a definite plus. And at least you should include how you want this service to be deployed.

**Tests**

Test is not just for testing the expected values, but it's also good for documentation. By looking at the test you'll understand where's the core logic, and how it's works. Which will be obviously useful for the reviewer.

### Limitation

The test generally has a time frame, and you might not be able to do everything perfectly, which is totally fine and understandable. But it's thoughtful to list what you were not able to do because of the time.

This will let the reviewer know what you are capable of doing, and not letting them think that you haven't thought about it.
And between what you have done, are what you couldn't, we can know how you prioritized certain tasks.

### Endpoints

What endpoint did you make?
Let the reviewer know which url to look at.

## Seed Data / Fake Data

If you will like your reviewer to test the running code.
It's good to prepare some fake data.

It can be an `sql` file, with bunch of queries, your own shellscript,
or `curl` command to post some data. Or the API could event just returns some static hard coded JSON.

Just to make sure that it acts like real life API.

## Repository

First of all, you should ask the company if it's fine to open-source it, and if it's fine you should definitely create a repository for it.

I really hated to get a zip file or a link to dropbox/google drive, and downloading it. It's just much easier and simpler look through the project on github/gitlab.

With good commits, and commit messages, I feel like he can be part of our team :D

It's also a good chance for the recruiter to look inside your github/gitlab account through your tests. Every time I receive a link of the test which is a github/gitlab account, I always look through the repositories, and what they have stared and try to analyze what kind of developer he is.

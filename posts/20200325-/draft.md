---
title: Handling development / production environment for Firebase in an iOS Projects
date: "2020-03-25"
tags: ["firebase", "ios"]
category: "tech"
---

There is quite a few work around to do this, like adding a shell script in the build script so
it will _copy_ the right Google-Service.plist in the specific environment to the root of the project, when building the projec t

but to do this you have to use the `Legacy Build`, which is said to be 3 times slower than the current new build system.

dev
-> master -> commit a production ready Google-Info.Plist

dev-> commit

merge dev into master


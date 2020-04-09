---
title: "Updating PostgreSQL on Mac."
date: "2020-04-09"
tags: []
category: "tech"
---

## TLDR

```
brew upgrade postgresql
brew postgresql-upgrade-database
```

## The Story

After updating, PostgreSQL, I got this following in error.

```bash
$ psql
psql: error: could not connect to server: could not connect to server: No such file or directory
        Is the server running locally and accepting
        connections on Unix domain socket "/tmp/.s.PGSQL.5432"?
```

Once in a while, I get this error, but I always google it try to remove `postmaster.pid`, reinstall postgres, removing that folder, and so on.
And spent couple of hours tackling, and then magically with the combination of that and this command I could make my server run again.

So I finally decided to see the logs, and check what was actually happening.

And understood it was a very simple problem:

```bash{3}
$ tail /usr/local/var/log/postgres.log
2020-04-09 13:47:48.385 JST [69411] FATAL:  database files are incompatible with server
2020-04-09 13:47:48.385 JST [69411] DETAIL:  The data directory was initialized by PostgreSQL version
11, which is not compatible with this version 12.2.
```

The data directory was not compatible with the older version.

And after 1 minute of googling I found that the way to migrate the database to the newer version was kindly written in the `brew info`

```bash{15,16}
$ brew info postgresql
postgresql: stable 12.2 (bottled), HEAD
Object-relational database system
https://www.postgresql.org/
/usr/local/Cellar/postgresql/12.2 (3,218 files, 37.3MB) *
  Poured from bottle on 2020-04-09 at 13:47:38
From: https://github.com/Homebrew/homebrew-core/blob/master/Formula/postgresql.rb
==> Dependencies
Build: pkg-config ✔
Required: icu4c ✔, krb5 ✔, openssl@1.1 ✔, readline ✔
==> Options
--HEAD
        Install HEAD version
==> Caveats
To migrate existing data from a previous major version of PostgreSQL run:
  brew postgresql-upgrade-database

To have launchd start postgresql now and restart at login:
  brew services start postgresql
Or, if you don't want/need a background service you can just run:
  pg_ctl -D /usr/local/var/postgres start
==> Analytics
install: 103,855 (30 days), 264,272 (90 days), 1,020,149 (365 days)
install-on-request: 99,081 (30 days), 248,397 (90 days), 945,833 (365 days)
build-error: 0 (30 days)
```

Just follow the command.

```bash
brew postgresql-upgrade-database
```

And normally you are good to go 😉

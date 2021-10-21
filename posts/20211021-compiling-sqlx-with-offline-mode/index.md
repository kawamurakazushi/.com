---
title: "Compiling sqlx with offline mode."
date: "2021-10-21"
tags: ["rust"]
category: "tech"
---

## Introduction

Without needing to access to the database for code generation. You can generate a file, and reffer to the file on compile time.
I use docker to compile for deployment, and i didn't want my container to access to the database on each compilation.

## TLDR

Edit `Cargo.toml` and add `offline` feature to sqlx.

```toml
sqlx = { version = "0.4.1", features = [ "postgres", "runtime-actix-rustls", "offline" ] }
```

Edit `.env` and enable `SQLX_OFFLINE` mode.

```
SQLX_OFFLINE=true
```

Install sqlx-cli, and run `cargo sqlx prepare`.

```
cargo install sqlx-cli
cargo sqlx prepare
```

This will create `sqlx-data.json`, which has the schema information needed on compile time.

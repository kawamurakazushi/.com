---
title: "Simple dynamic query using sqlx."
date: "2021-11-06"
tags: ["rust", "sqlx"]
category: "tech"
---

## Introduction

By design, sqlx doesn't provide any query builder.
This makes it difficult to make complex conditional query.

But for simple ones, it can be done in the DB level.

## Solution

Adding `$1 IS NULL OR` before confition makes the parameter optional.

If the parameter is `None` the condition will be true, so it will just ignore the condition check,
but it is `Some(value)` it will check for the next `OR` and do the actual condition check.

```rust{16-19}
// Example

pub async fn list_output_notes(
    pool: &PgPool,
    input: ListOutputNotesInput,
) -> Result<Vec<OutputNote>, sqlx::Error> {
    let date = input.page.after.and_then(|a| a.parse());

    let output_notes = sqlx::query_as!(
        OutputNote,
        r#"
    SELECT notes.id, notes.body, notes.output_id, notes.inserted_at, notes.updated_at
    FROM output_notes notes
    JOIN outputs o ON o.id = notes.output_id

    WHERE ($1::uuid IS NULL OR o.user_id = $1)
    AND ($2::uuid IS NULL OR o.book_id = $2)
    AND ($3::uuid IS NULL OR notes.output_id = $3)
    AND ($4::timestamp IS NULL OR notes.inserted_at < $4)
    AND notes.deleted_at IS NULL

    ORDER BY notes.inserted_at DESC
    LIMIT $5;
        "#,
        input.user_id,
        input.book_id,
        input.output_id,
        date,
        i64::from(input.page.first)
    )
    .fetch_all(pool)
    .await;

    output_notes
}
```

## Reference

https://github.com/launchbadge/sqlx/issues/291#issuecomment-832488389

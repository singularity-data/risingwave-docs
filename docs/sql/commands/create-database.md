---
id: create-database
title: CREATE DATABASE
description: Creates a new database
slug: /create-database
---

Use the `CREATE DATABASE` command to create a new database.

## Syntax

```sql
CREATE DATABASE IF NOT EXISTS <database>;
```
## Parameters
|Parameter or clause        | Description           |
|---------------------------|-----------------------|
|*database*            |The name of the database to be created.|
|<b>IF NOT EXISTS</b> clause      |Creates a database if the database name has not already been used, otherwise will throw an error.|

## Example
```sql
CREATE DATABASE IF NOT EXISTS travel;
```
---
id: sql-drop-database
title: DROP DATABASE
description: Remove a database.
slug: /sql-drop-database
---

Use the `DROP DATABASE` command to remove a database from your RisingWave instance.

Before you can remove a database, you must use [DROP SCHEMA](sql-drop-schema.md) to remove all its dependent schemas.

:::caution
`DROP DATABASE` removes all data in a database and cannot be undone.
:::

## Syntax

```sql
DROP DATABASE [ IF EXISTS ] <database>;
```


## Parameters

|Parameter and clause                 | Description           |
|---------------------------|-----------------------|
|**IF EXISTS** clause       |Do not return an error if the specified database does not exist.|
|*database*                 |The name of the database you want to remove. You can use [`SHOW DATABASES`](sql-show-databases.md) to get a list of all available databases.|


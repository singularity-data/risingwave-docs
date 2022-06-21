---
id: sql-drop-table
title: DROP TABLE
description: Remove a table.
slug: /sql-drop-table
---

Use the `DROP TABLE` command to remove a table from the database.

Before you can remove a table, you must remove all its dependent objects (indexes, materialized views, etc.).

## Syntax

```sql
DROP TABLE [<schema>.]<table>;
```


## Parameters

|Parameter                  | Description           |
|---------------------------|-----------------------|
|*schema*                   |Specify the name of a schema to remove the table in that schema. You can use [`SHOW SCHEMAS`](sql-show-schemas.md) to get a list of all available schemas. If you don't specify a schema, the specified source in the default schema "public" will be removed.|
|*table*                    |The name of the table to remove. You can use [`SHOW TABLES`](sql-show-tables.md) to get a list of all available tables.|


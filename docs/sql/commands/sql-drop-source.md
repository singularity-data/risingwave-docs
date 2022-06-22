---
id: sql-drop-source
title: DROP SOURCE
description: Remove a source.
slug: /sql-drop-source
---

Use the `DROP SOURCE` command to remove a [source](create-source.md) if you no longer need the data inflow from the source.

Before you can remove a source, you must use [DROP MATERIALIZED VIEW](sql-drop-mv.md) to remove all its dependent materialized views.

## Syntax

```sql
DROP SOURCE [<schema>.]<source>;
```


## Parameters

|Parameter                  | Description           |
|---------------------------|-----------------------|
|*schema*                   |The schema of the source that you want to remove. You can use [`SHOW SCHEMAS`](sql-show-schemas.md) to get a list of all available schemas. If you don't specify a schema, the specified source in the default schema "public" will be removed.|
|*source*                   |The name of the source to remove.|

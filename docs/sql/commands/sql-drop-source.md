---
id: sql-drop-source
title: DROP SOURCE
description: Remove a source.
slug: /sql-drop-source
---

Use the `DROP SOURCE` command to remove a [source](create-source.md) from your RisingWave instance if you no longer need the data inflow from the source.

Before you can remove a source, you must use [DROP MATERIALIZED VIEW](sql-drop-mv.md) to remove all its dependent materialized views.

## Syntax

```sql
DROP SOURCE [<schema>.]<source>;
```


## Parameters

|Parameter                  | Description           |
|---------------------------|-----------------------|
|*schema*                   |Specify the name of a schema to remove the source in that schema. You can use [`SHOW SCHEMAS`](sql-show-schemas.md) to get a list of all available schemas. If you don't specify a schema, the specified source in the default schema "public" will be removed.|
|*source*                   |The name of the source to remove.|


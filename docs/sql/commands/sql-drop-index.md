---
id: sql-drop-index
title: DROP INDEX
description: Remove an index.
slug: /sql-drop-index
---

Use the `DROP INDEX` command to remove an index from a table or materialized view.

## Syntax

```sql
DROP INDEX [<schema>.]<index>;
```


## Parameters

|Parameter                  | Description           |
|---------------------------|-----------------------|
|*schema*                   |Specify the name of a schema to remove the index in that schema. You can use [`SHOW SCHEMAS`](sql-show-schemas.md) to get a list of all available schemas. If you don't specify a schema, the specified index in the default schema "public" will be removed.|
|*index*                    |The name of the index to remove.|



## Examples

This statement removes the "id_index" index from the "taxi_trips" table in the default schema ("public"):

```sql
DROP INDEX id_index;
```

This statement removes the "ad_id_index" index from the "ad_ctr_5min" materialized view in the "rw_schema" schema:

```sql
DROP INDEX rw_schema.id_index;
```
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
|*schema*                   |The schema of the index that you want to remove. You can use [`SHOW SCHEMAS`](sql-show-schemas.md) to get a list of all available schemas. If you don't specify a schema, the specified index in the default schema "public" will be removed.|
|*index*                    |The name of the index to remove.|


---
id: sql-create-index
title: CREATE INDEX
description: Create an index
slug: /sql-create-index
---

Use `CREATE INDEX` to construct an index on a column of a table or materialized view. The main purpose of creating indexes is to improve data retrieval performance. Indexes can also be used to create materialized views.


## Syntax

```sql
CREATE INDEX <index> ON <table>(<col>);
```

## Parameters

| Parameter| Descriptiion|
|-----------|-------------|
|*index*    |The name of the index. |
|*table*    |The name of a table or materialized view|
|*col*      |The name of a column|

## Examples

This statement creates an index on the `id` column in the `taxi_trips` table:

```sql
CREATE INDEX id_index ON taxi_trips(id);
```

This statement creates an index on the `ad_id` column in the `ad_ctr_5min` materialized view:
```sql
CREATE INDEX ad_id_index ON ad_ctr_5min(ad_id);
```

Alternatively, you can create a materialized view to improve query performance:
```sql
CREATE MATERIALIZED VIEW ad_id_index_mv AS 
    SELECT ad_id FROM ad_ctr_5min
    ORDER BY ad_id;
```



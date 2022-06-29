---
id: sql-create-table
title: CREATE TABLE
description: Create a table.
slug: /sql-create-table
---

Use the `CREATE TABLE` command to create a new table.

## Syntax

```sql
CREATE TABLE <table> (<col> <data_type> [, <col> <data_type>...])
    [ WITH ( 'storage_parameter'=value [, ... ] ) ];
```

## Parameters

| Parameter| Descriptiion|
|-----------|-------------|
|*table*    |The name of the table. If a schema name is given (for example, `CREATE TABLE <schema>.<table> ...`), then the table is created in the specified schema. Otherwise it is created in the current schema.|
|*col*      |The name of a column.|
|*data_type*|The data type of a column. |
|*storage_parameter*| The storage parameter can be used to set options for the table. Currently we support *appendonly* option, `'appendonly' = true` specifies that there is only INSERT operations to the table. If user creates a materialized view on an append-only table, the corresponding stream query plan will be optimized for append-only workload. |

## Examples

The statement below creates a table that has three columns.

```sql
CREATE TABLE taxi_trips(
    id VARCHAR,
    distance DOUBLE PRECISION,
    duration DOUBLE PRECISION
) WITH ('appendonly' = true);
```


---
id: sql-create-table
title: CREATE TABLE
description: Create a table.
slug: /sql-create-table
---

Use the `CREATE TABLE` command to create a new table.

## Syntax

```sql
CREATE TABLE table_name (col_name data_type [, col_name data_type ...])
    [ WITH ( 'storage_parameter' = value [, ... ] ) ];
```

## Parameters

| Parameter| Description|
|-----------|-------------|
|*table_name*    |The name of the table. If a schema name is given (for example, `CREATE TABLE <schema>.<table> ...`), then the table is created in the specified schema. Otherwise it is created in the current schema.|
|*col_name*      |The name of a column.|
|*data_type*|The data type of a column. With the `struct` data type, you can create a nested table. Elements in a nested table need to be enclosed with angle brackets ("<\>"). |
|*storage_parameter*| Set options for the table. Supported options: <ul><li>appendonly<ul><li>`'appendonly' = true` specifies that only INSERT operations on the table are allowed. If you create a materialized view on an append-only table, the corresponding stream query plan will be optimized for the append-only workload.</li></ul></li></ul>|

## Examples

The statement below creates a table that has three columns.

```sql
CREATE TABLE taxi_trips(
    id VARCHAR,
    distance DOUBLE PRECISION,
    duration DOUBLE PRECISION
) WITH ('appendonly' = true);
```

The statement below creates a table that includes nested tables.

```sql
CREATE TABLE taxi_trips(
    id VARCHAR,
    distance DOUBLE PRECISION,
    duration DOUBLE PRECISION,
    fare STRUCT<initial_charge DOUBLE PRECISION, subsequent_charge DOUBLE PRECISION, surcharge DOUBLE PRECISION, tolls DOUBLE PRECISION>
);
```
---
id: sql-create-table
title: CREATE TABLE
description: Create a table
slug: /sql-create-table
---

Use this command to create a new table.

## Syntax

```sql
CREATE TABLE <table> (<col> <data_type> [, <col> <data_type>...]
);
```

## Parameters

### `table`

The name of the table.

### `col`

The name of a column.

### `data_type`

The data type of a column. 

## Example
```sql
CREATE TABLE taxi_trips(
    id VARCHAR,
    distance DOUBLE PRECISION,
    duration DOUBLE PRECISION
);
```


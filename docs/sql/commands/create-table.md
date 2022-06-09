---
id: create-table
title: CREATE TABLE
description: Create a table
slug: /create-table
---

This command creates a new table.

## Syntax

```sql
CREATE TABLE table_name ( 
    column1_name data_type，
    column2_name data_type,
    column3_name data_type,
    ...
);
```



## Example
```sql
CREATE TABLE taxi_trips(
    id VARCHAR,
    distance DOUBLE PRECISION,
    duration DOUBLE PRECISION
);
```


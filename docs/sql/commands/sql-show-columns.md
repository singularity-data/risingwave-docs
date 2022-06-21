---
id: sql-show-columns
title: SHOW COLUMNS
description: Show columns in a table, source, or materialized view.
slug: /sql-show-columns
---

Use the `SHOW COLUMNS` command to view columns in the specified table, source, or materialized view.

## Syntax

```sql
SHOW COLUMNS FROM <table>;
```
## Parameters
|Parameter or clause        | Description           |
|---------------------------|-----------------------|
|*table*                    |The name of the table, source, or materialized view from which the columns will be listed.|


## Example
```sql
SHOW COLUMNS FROM taxi_trips;
```
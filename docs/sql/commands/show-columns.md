---
id: show-columns
title: SHOW COLUMNS
description: Shows columns from given source
slug: /show-columns
---

Use the `SHOW COLUMNS` command to view columns in the given table or source.

## Syntax

```sql
SHOW COLUMNS FROM <table> | <source>;
```
## Parameters
|Parameter or clause        | Description           |
|---------------------------|-----------------------|
|*table* or *source* |Table or source from which the columns will be listed.|


## Example
```sql
SHOW COLUMNS FROM taxi_trips;
```
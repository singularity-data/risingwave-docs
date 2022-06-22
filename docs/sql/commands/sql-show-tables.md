---
id: show-tables
title: SHOW TABLES
description: Show existing tables.
slug: /show-tables
---

Use the `SHOW TABLES` command to view tables in a particular schema.

## Syntax

```sql
SHOW TABLES [FROM <schema>];
```
## Parameters
|Parameter   | Description           |
|---------------------------|-----------------------|
|*schema*                   |Schema from which tables will be listed. If not given, tables from the default schema will be listed.|


## Example
```sql
SHOW TABLES FROM schema_1;
```
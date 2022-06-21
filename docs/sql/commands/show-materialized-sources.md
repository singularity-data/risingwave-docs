---
id: show-materizalized-sources
title: SHOW MATERIALIZED-SOURCES
description: Shows existing materialized sources
slug: /show-materialized-sources
---

Use the `SHOW MATERIALZED SOURCES` command to show materialized sources in the given schema.

## Syntax

```sql
SHOW MATERIALIZED SOURCES [FROM <schema>];
```
## Parameters
|Parameter or clause        | Description           |
|---------------------------|-----------------------|
|*schema*              |Schema from which the materialized sources will be listed. If not given, materialized sources from the default schema will be listed.|


## Example
```sql
SHOW MATERIALIZED SOURCES FROM schema_1;
```
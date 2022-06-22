---
id: show-materizalized-views
title: SHOW MATERIALIZED-VIEWS
description: Show existing materialized views.
slug: /show-mv
---

Use the `SHOW MATERIALZED VIEWS` command to show existing materialized views.

## Syntax

```sql
SHOW MATERIALIZED VIEWS [FROM <schema>];
```
## Parameters
|Parameter      | Description           |
|---------------------------|-----------------------|
|*schema*                   |The schema from which the materialized views will be listed. The default schema is public.|


## Example
```sql
SHOW MATERIALIZED VIEWS FROM schema_1;
```
---
id: create-schema
title: CREATE SCHEMA
description: Create a new schema.
slug: /create-schema
---

Use the `CREATE SCHEMA` command to create a new schema.

## Syntax

```sql
CREATE SCHEMA IF NOT EXISTS [database.]<schema>;
```
## Parameters
|Parameter or clause        | Description           |
|---------------------------|-----------------------|
|*schema*                   |The name of the schema to be created.|
|<b>IF NOT EXISTS</b> *clause*      |Creates a schema if the schema name has not already been used. Otherwise throws an error.|
|*database*                   |The name of the database for the schema to be created in.|

## Example
```sql
CREATE SCHEMA IF NOT EXISTS schema_1;
```
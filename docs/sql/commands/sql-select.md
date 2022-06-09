---
id: sql-select
title: SELECT
description: Retrieve rows
slug: /sql-select
---

Use the `SELECT` command to retrieve rows from a table or materialized view. It returns the rows that satisfy the creteria that you specify with the clauses and conditions in your query.


```sql
SELECT [ ALL | DISTINCT] [ * | <expression> [ AS <output_name> ] [, <expression> [ AS <output_name> ]...] ]
    [ FROM <from_item> [, <from_item> ...] ]
    [ WHERE <condition> ]
    [ GROUP BY grouping_element [, grouping_element... ]
    [ HAVING condition ]
    [ WINDOW window_name AS ( window_definition ) [, ...] ]
    [ ORDER BY ordering_expression [ ASC | DESC | USING operator ] [ NULLS { FIRST | LAST } ] [, ...] ]
    [ LIMIT { count | ALL } ]
    [ OFFSET start [ ROW | ROWS ] ]
```
Where <from_item> is:
```sql
<table>
     [ [ AS ] <alias> [ ( <column_alias_list> ) ] ] |
     ( <select> ) [ AS ] <alias> [ ( <column_alias_list> ) ] |
      <from_item>  <join_type> <from_item>
         [ ON <join_condition> ]
```

## Parameters

### <alias>

An alias is a temporary alternative name for columns, tables, views, materialized views, etc. in a query.

### <table>

The name of a table or materialized view.

### `expression`

A column or an expression.

### `from_item`

It can be a table, materialized view, subquery, or join clause.

### GROUP BY

`grouping_expression` can be:
- Input column names
- Input column expressions without subqueries or correlated columns
- Output column names

**GROUPING SETS** are not supported.


### `ordering_expression` 

The values can be:
- Output column names
- Output column ordinal numbers
- Hidden select expressions

### LIMIT

This clause returns a subset of the rows.

- <count>: Returns the specified number of rows at maximum.
- **ALL**: Returns all rows.

When the ORDER BY clause is not present, the LIMIT clause cannot be used as part of a materialized view.

### OFFSET

The OFFSET clause can only be used with the LIMIT and ORDER BY clauses.

### <select>

A SELECT command. You must enclose the subquery in parentheses, and specify an alias.
When you include a subquery in the FROM clause, the output of the subquery is used as a temporary view that is only valid in the query.

### <join_type>

The values can be: 
- [INNER] JOIN
- LEFT [OUTER] JOIN
- RIGHT [OUTER] JOIN
- FULL [OUTER] JOIN

Currently, only the ON clause is supported for joins.

### <join_condition>

Conditions for the ON clause that must be met before the two from_items can be joined.


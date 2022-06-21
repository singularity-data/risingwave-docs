---
id: sql-select
title: SELECT
description: Retrieve data from a table or a materialized view. 
slug: /sql-select
---

Use the `SELECT` command to retrieve rows from a table or materialized view. It returns the rows that satisfy the creteria that you specify with the clauses and conditions in your query.

## Syntax

```sql
SELECT [ ALL | DISTINCT] [ * | <expression> [ AS <output_name> ] [, <expression> [ AS <output_name> ]...] ]
    [ FROM <from_item> [, <from_item> ...] ]
    [ WHERE <condition> ]
    [ GROUP BY <grouping_expression> [, <grouping_expression>... ]]
    [ HAVING <condition> ]
    [ ORDER BY <sort_expression> [ ASC | DESC ] [, ...] ]
    [ LIMIT <count> ]
    [ OFFSET start [ ROW | ROWS ] ];
```
Where `from_item` can be:
```sql
    <table>  [ [ AS ] <alias> [ ( <column_alias_list> ) ]]
    <window_type> (<table>, <col>, <interval_expression>) [ [ AS ] <alias> [ ( <column_alias_list> ) ] ] 
    (<select>) [ [ AS ] <alias> [ ( <column_alias_list> ) ] ] 
    <from_item>  <join_type> <from_item> [ ON <join_condition> ]
```

## Parameters

|Parameter or clause        | Description           |
|---------------------------|-----------------------|
|*expression*               |A column or an expression.|
|*alias*                    |A temporary alternative name for a table or materialized view in a query.|
|*table*                    |A table or materialized view.|
|*grouping_expression*      |<p>Values can be:</p><ul><li>Input column names</li><li>Input column expressions without subqueries or correlated columns</li></ul>|
|**ORDER BY** clause        | The default sort order is **ASC**. Nulls options are not supported now. If the sort order is **ASC** or unspecified, nulls will be placed in front of non-null values. If the sort order is **DESC**, nulls will be placed after non-null values. This is different from the sort logic in PostgreSQL.|
|*sort_expression*          |<p>Values can be:</p><ul><li>Output column names</li><li>Output column ordinal numbers</li><li>Hidden select expressions</li></ul>|
|**LIMIT** clause           | When the ORDER BY clause is not present, the LIMIT clause cannot be used as part of a materialized view. |
|*count*                    |The number of results you want to get. |
|**OFFSET** clause          |The OFFSET clause can only be used with the LIMIT and ORDER BY clauses.|
|*select*                   |A SELECT command. You must enclose the subquery in parentheses, and specify an alias. When you include a subquery in the FROM clause, the output of the subquery is used as a temporary view that is only valid in the query.|
|*join_type*                |<p>Supported join types:</p> <ul><li>[INNER] JOIN</li><li>LEFT [OUTER] JOIN</li><li>RIGHT [OUTER] JOIN</li><li>FULL [OUTER] JOIN</li></ul><p>Currently, only the ON clause is supported for joins.</p>|
|*join_condition*           |Conditions for the ON clause that must be met before the two from_items can be joined.|
|*window_type*              |The type of the time window function. Possible values are `HOP` and `TUMBLE`.|
|*interval_expression*      |The interval expression, in the format of `INTERVAL '<interval>'`. For example: `INTERVAL '2 MINUTES'`. The standard SQL format, which places time units outside of quotation marks (for example, `INTERVAL '2' MINUTE`), is also supported. |


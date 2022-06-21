---
id: sql-commands
slug: /sql-commands
title: Commands
---

RisingWave supports the following SQL commands.

* [`CREATE SOURCE`](commands/create-source.md)
* `CREATE MATERIALIZED VIEW`
* `CREATE TABLE`
* `DROP TABLE`
* `INSERT INTO`
* `DELETE`
* `SHOW TABLES`
* `SHOW SCHEMAS`
* `SHOW DATABASES`
* `SHOW MATERIALIZED VIEWS`
* `EXPLAIN`

## Notes about EXPLAIN

`EXPLAIN` prints an execution plan of query to help you understand how it runs internally. It's useful to explain a batch query (`SELECT`) or a streaming query (`CREATE MATERIALIZED VIEW`).

Example:

```
=> EXPLAIN SELECT P.name, P.city, P.state, A.id
   FROM auction AS A INNER JOIN person AS P on A.seller = P.id
   WHERE A.category = 10 and (P.state = 'OR' OR P.state = 'ID' OR P.state = 'CA');
                                                QUERY PLAN
----------------------------------------------------------------------------------------------------------
 BatchExchange { order: [], dist: Single }
   BatchProject { exprs: [$3, $4, $5, $0] }
     BatchHashJoin { type: Inner, predicate: $1 = $2 }
       BatchProject { exprs: [$0, $1] }
         BatchExchange { order: [], dist: HashShard([1]) }
           BatchFilter { predicate: ($2 = 10:Int32) }
             BatchScan { table: auction, columns: [id, seller, category] }
       BatchExchange { order: [], dist: HashShard([0]) }
         BatchFilter { predicate: ((($3 = 'OR':Varchar) OR ($3 = 'ID':Varchar)) OR ($3 = 'CA':Varchar)) }
           BatchScan { table: person, columns: [id, name, city, state] }
```

```
=> EXPLAIN CREATE MATERIALIZED VIEW nexmark_q3 AS
     SELECT P.name, P.city, P.state, A.id
     FROM auction AS A INNER JOIN person AS P on A.seller = P.id
     WHERE A.category = 10 and (P.state = 'OR' OR P.state = 'ID' OR P.state = 'CA');
                                                          QUERY PLAN
------------------------------------------------------------------------------------------------------------------------------
 StreamMaterialize { columns: [name, city, state, id, _row_id(hidden), _row_id#1(hidden)], pk_columns: [_row_id, _row_id#1] }
   StreamExchange { dist: HashShard([4, 5]) }
     StreamProject { exprs: [$4, $5, $6, $0, $2, $7] }
       StreamHashJoin { type: Inner, predicate: $1 = $3 }
         StreamProject { exprs: [$0, $1, $3] }
           StreamExchange { dist: HashShard([1]) }
             StreamFilter { predicate: ($2 = 10:Int32) }
               StreamTableScan { table: auction, columns: [id, seller, category, _row_id], pk_indices: [3] }
         StreamExchange { dist: HashShard([0]) }
           StreamFilter { predicate: ((($3 = 'OR':Varchar) OR ($3 = 'ID':Varchar)) OR ($3 = 'CA':Varchar)) }
             StreamTableScan { table: person, columns: [id, name, city, state, _row_id], pk_indices: [4] }
```



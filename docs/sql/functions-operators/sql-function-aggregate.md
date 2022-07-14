---
id: sql-function-aggregate
slug: /sql-function-aggregate
title: Aggregate functions
---


|Function|Argument Type|Return Type|
|---|---|---|
|MIN()|smallint, int, bigint, numeric, real, double precision, varchar|Same as argument type|
|MAX()|smallint, int, bigint, numeric, real, double precision, varchar|Same as argument type|
|SUM()|smallint, int, bigint, numeric, real, double precision|bigint for smallint  or int arguments, numeric for bigint arguments, otherwise the same as the argument data type| 
|COUNT()|bool, smallint, int, bigint, numeric, real, double precision, varchar|bigint|
|AVG()|	smallint, int, bigint, numeric, real, double precision|numeric for integer arguments; double precision for float point arguments|

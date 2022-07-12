---
id: sql-operators
slug: /sql-operators
title: Operators
---



## Logical operators

| Operator | Description | 
| ----------- | ----------- |
| AND | Text |
| OR | Text |
| NOT | Text |


## Comparison operators

| Operator | Description | Expression |
| ----------- | ----------- | ----------- |
| `=` | Equal <br /> TRUE if  | `expression = value` <br /> 1 = 1 → t <br /> '1' = 1 → t <br /> 'a' = 'b' → f <br /> (1, 0) = (1, 1) → f <br /> ('a', 'b') = ('a', 'b') → t |
| `<>` <br/> `!=` | Not equal | `expression <> value` or `expression != value` <br /> 1 &lt;&gt; 1 → f <br /> '1' != 1 → f <br /> 'a' != 'b' → t <br /> (1, 0) &lt;&gt; (1, 1) → t <br /> ('a', 'b') != ('a', 'b') → f|
| `<` | Less than | `expression < value` <br /> 0 &lt; 1 → t <br /> 1 &lt; 1 → f|
| `<=` | Less than or equal to | `expression <= value` <br /> 1 &lt;= 1 → t <br /> 1 &lt;= 0 → f |
| `>` | Greater than | `expression > value` <br /> 1 &gt; 0 → t <br /> 1 &gt; 1 → f |
| `>=` | Greater than or equal to | `expression >= value` <br /> 1 &gt;= 1 → t <br /> 0 &gt;= 1 → f |
| `IS DISTINCT FROM` | Equal (null comparible) | `expression IS DISTINCT FROM value` <br /> 1 IS DISTINCT FROM NULL → t <br /> 1 IS DISTINCT FROM 1 → f  |
| `IS NOT DISTINCT FROM` | Not equal (null comparible) | `expression IS NOT DISTINCT FROM value` <br /> 1 IS NOT DISTINCT FROM NULL → f <br /> |
| `BETWEEN ... AND ...` | Between (inclusive range) | `expression BETWEEN min AND max` <br /> 1 BETWEEN 0 AND 1 → t <br /> 'c' BETWEEN 'a' AND 'b' → f |
| `NOT BETWEEN ... AND ...` | Not between (inclusive range) | `expression NOT BETWEEN min AND max` <br /> 1 NOT BETWEEN 0 AND 1 → f |
| `IN()` | Whether a value is equal to any of the values you specify | `expression IN (value,...)` <br /> 1 IN (0,1,2,3) → t <br /> 'a' IN ('ab','b','c','d') → f|
| `NOT IN()` | Whether a value is not equal to any of the values you specify | `expression NOT IN (value,...)` <br /> 1 NOT IN (0,1,2,3) → f |
| `IS TRUE` | Text | `boolean IS TRUE` |
| `IS NOT TRUE` | Text |  |
| `IS FALSE` | Text |  |
| `IS NOT FALSE` | Text |  |
| IS [NOT] NULL | Text | *** IS NULL causes a crash. Should we show this to users?  |

## Conditional expressions

* CASE WHEN ... THEN ... [ ELSE ... ] returns the value of first true branch
* COALESCE(value [, ...]) returns the first non-null value
* NULLIF(value1, value2) returns null if value1 == value2, otherwise returns value1

## Mathematical functions and operators

* \- (negation)
* \+ (addition)
* \- (subtraction)
* \* (multiplication)
* / (division; results are truncated for integers)
* % (remainder; valid for smallint/int/bigint/numeric)
* ~ (bitwise not)
* &amp; (bitwise and)
* | (bitwise or)
* &num; (bitwise xor)
* &lt;&lt; (bitwise left shift)
* &gt;&gt; (bitwise right shift)
* ABS
* ROUND(numeric, int) → numeric
* ROUND(numeric) → numeric
* ROUND(double precision) → double precision
* FLOOR(numeric) → numeric
* FLOOR(double precision) → double precision
* CEIL(numeric) → numeric
* CEIL(double precision) → double precision


## Aggregation functions

|Function|Argument Type|Return Type|
|---|---|---|
|min|smallint, int, bigint, numeric, real, double precision, varchar|Same as argument type|
|max|smallint, int, bigint, numeric, real, double precision, varchar|Same as argument type|
|sum|smallint, int, bigint, numeric, real, double precision|bigint for smallint  or int arguments, numeric for bigint arguments, otherwise the same as the argument data type|
|count|bool, smallint, int, bigint, numeric, real, double precision, varchar|bigint|
|avg|	smallint, int, bigint, numeric, real, double precision|numeric for integer arguments; double precision for float point arguments|

## String functions

|Function|Return Type|Description|Example|Result|
|---|---|---|---|---|
|replace ( string varchar, from varchar, to varchar )|varchar|Replaces all occurrences in string of substring from with substring to.|`replace('abcdefabcdef', 'cd', 'XX')`|`abXXefabXXef`|
|trim ( string varchar )|varchar|Removes the longest string containing only spaces from the start and end of string.|`trim(' trim ')`	|`trim`|
|ltrim ( string varchar )|varchar|Removes the longest string containing only spaces from the start of string.|`ltrim(' test')`|`test`|
|rtrim ( string varchar ) |varchar|Removes the longest string containing only spaces from the end of string|`rtrim('test ')`|`test`|
|substr ( string varchar, start integer [, count integer ] )|varchar|Extracts the substring of string starting at the start-th character, and extending for count characters if that is specified.| `substr('alphabet', 3)`; `substr('alphabet', 3, 2)`| `phabet`;`ph`|
|upper ( varchar )|varchar|Converts the string to all upper case.|`upper('tom')`|`TOM`|
|lower ( varchar )|varchar|Converts the string to all lower case.|`lower('TOM')`|`tom`|
|position ( string varchar, substring varchar )|integer	|Returns first starting index of the specified substring within string, or zero if it is not present.|`position('high', 'ig')`|`2`|
|length ( varchar )	|integer|Returns the number of characters in the string.|`length('jose')`|`4`|
| concat_ws ( sep varchar, val1 any [, val2 any [, ...] ] ) | varchar | Concatenates strings with a separator. The first argument is used as the separator, and should not be `NULL`. Other `NULL` arguments are ignored. | `concat_ws(',', 'abcde', 2, NULL, 22)` | `abcde,2,22`  |
|  split_part ( string varchar, delimiter varchar, n int )  | varchar | Splits string at occurrences of delimiter and returns the n'th field (counting from one), or when n is negative, returns the \|n\|'th-from-last field. When n is zero, returns a `InvalidParameterValue` error. When the input delimiter is an empty string, returns the input string if querying the first or last field. Otherwise, returns an empty string. | `split_part('abc~@~def~@~ghi', '~@~', 2)` | `def` |


## String matching operators

```sql
string NOT LIKE pattern
String LIKE pattern
```

The `LIKE` expression returns true if the string matches the supplied pattern. The `NOT LIKE` expression returns false if `LIKE` returns true.

If the pattern does not contain percent signs or underscores, then the pattern only represents the string itself; in that case `LIKE` acts like the equals operator. An underscore (_) in a pattern stands for (matches) any single character; a percent sign (%) matches any sequence of zero or more characters.

Examples:

```sql
'abc' LIKE 'abc'           true
'abc' LIKE 'a%'            true
'abc' LIKE '_b_'           true
'abc' LIKE 'c'             false
```


ESCAPE is not supported yet. We are unable to match a literal underscore or percent sign without matching other characters.


## Temporal operators and functions


`extract(field from source) → numeric`

Extract the value of a data or timestamp. `field` is one of: YEAR, MONTH, DAY, HOUR, MINUTE, SECOND, DOY, DOW. `source` is of type date or timestamp.

`date + interval → timestamp`

Add an interval to a date.

`date - interval → timestamp`

Subtract an interval from a date.




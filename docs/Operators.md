---
id: sql-operators
slug: /sql-operators-functions
title: Operators and functions
---

## Logical operators

* AND
* OR
* NOT
* IS [NOT] {TRUE | FALSE}

Comparison operators

* &lt; (less than)
* &gt; (greater than)
* = (equal)
* &lt;= (less than or equal to)
* &gt;= (greater than or equal to)
* &lt;&gt; / != (not equal)
* BETWEEN
* IS [NOT] NULL

## Mathematical functions and operators

* neg
* \+ (addition)
* \- (subtraction)
* \* (multiplication)
* / (division; results are truncated for integers)
* % (remainder; valid for smallint/int/bigint)
* ROUND(numeric, int) → numeric


## Aggregation functions

|Function|Argument Type|Return Type|
|---|---|---|
|min|smallint, int, bigint, numeric, real, double precision, varchar|Same as argument type|
|max|smallint, int, bigint, numeric, real, double precision, varchar|Same as argument type|
|sum|smallint, int, bigint, numeric, real, double precision|bigint for smallint  or int arguments, numeric for bigint arguments, otherwise the same as the argument data type|
|count|bool, smallint, int, bigint, numeric, real, double precision, varchar|bigint|
|avg|	smallint, int, bigint, numeric, real, double precision|numeric for integer arguments; double precision for float point arguments; otherwise the same as the argument data type|

## String functions

|Function|Return Type|Description|Example|Result|
|---|---|---|---|---|
|replace ( string varchar, from varchar, to varchar )|varchar|Replaces all occurrences in string of substring from with substring to.|replace('abcdefabcdef', 'cd', 'XX')|abXXefabXXef|
|substr ( string varchar, start integer [, count integer ] )|varchar|Extracts the substring of string starting at the start-th character, and extending for count characters if that is specified.| `substr('alphabet', 3)`; `substr('alphabet', 3, 2)`| `phabet`;`ph`|
|trim ( string varchar )|varchar|Removes the longest string containing only spaces from the start and end of string.|trim(' trim ')	|trim|
|ltrim ( string varchar )|varchar|Removes the longest string containing only spaces from the start of string.|ltrim(' test')|test|
|rtrim ( string varchar ) |varchar|Removes the longest string containing only spaces from the end of string|rtrim('test ')|test|
|upper ( varchar )|varchar|Converts the string to all upper case.|upper('tom')|TOM|
|lower ( varchar )|varchar|Converts the string to all lower case.|lower('TOM')|tom|
|position ( string varchar, substring varchar )|integer	|Returns first starting index of the specified substring within string, or zero if it is not present.|position('high', 'ig')|2|
|length ( varchar )	|integer|Returns the number of characters in the string.|length('jose')|4|

## String matching operators

```
string NOT LIKE pattern
String LIKE pattern
```

The `LIKE` expression returns true if the string matches the supplied pattern. The `NOT LIKE` expression returns false if `LIKE` returns true.

If the pattern does not contain percent signs or underscores, then the pattern only represents the string itself; in that case `LIKE` acts like the equals operator. An underscore (_) in a pattern stands for (matches) any single character; a percent sign (%) matches any sequence of zero or more characters.

Examples:

```
'abc' LIKE 'abc'           true
'abc' LIKE 'a%'            true
'abc' LIKE '_b_'           true
'abc' LIKE 'c'             false
```


ESCAPE is not supported yet. We are unable to match a literal underscore or percent sign without matching other characters.


## Temporal operators and functions


`extract(field from source) → numeric`

Extract the value of a data or timestamp. field is one of: YEAR, MONTH, DAY, HOUR, MINUTE, SECOND, DOY, DOW.  source is of type date or timestamp

`date + interval → timestamp`

Add an interval to a date.

`date - interval → timestamp`

Subtract an interval from a date.




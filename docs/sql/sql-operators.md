---
id: sql-operators
slug: /sql-operators
title: Operators
---



## Logical operators

| Operator | Expression & Description |
| ----------- | ----------- | 
| `AND` | Logical AND. <br /> `boolean1 AND boolean2` <br /> TRUE if both *boolean1* and *boolean2* are TRUE. |
| `OR` | Logical OR. <br /> `boolean1 OR boolean2` <br /> TRUE if either *boolean1* or *boolean2* is TRUE. |
| `NOT` | Negates value. <br /> `NOT boolean` <br /> |

**Example**
| NOT a | a | b | a AND b | a OR b |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| FALSE | TRUE | TRUE | TRUE | TRUE |
| FALSE | TRUE | FALSE | FALSE | TRUE |
| FALSE | TRUE | NULL | NULL | TRUE |
| TRUE | FALSE | FALSE | FALSE | FALSE |
| TRUE | FALSE | NULL | FALSE | NULL |
| NULL | NULL | NULL | NULL | NULL |



## Comparison operators

| Operator | Expression & Description | Example |
| ----------- | ----------- | ----------- |
| `=` | Equal. <br /> `operand1 = operand2` <br /> TRUE if the operands separated by = have the same value. | 1 = 1 → t <br /> '1' = 1 → t <br /> 'a' = 'b' → f <br /> (1, 0) = (1, 1) → f <br /> ('a', 'b') = ('a', 'b') → t |
| `<>` <br/> `!=` | Not equal. <br /> `operand1 <> operand2` or `operand1 != operand2` <br /> TRUE if the operands separated by &lt;&gt; or != have different values. | 1 &lt;&gt; 1 → f <br /> '1' != 1 → f <br /> 'a' != 'b' → t <br /> (1, 0) &lt;&gt; (1, 1) → t <br /> ('a', 'b') != ('a', 'b') → f|
| `<` | Less than. <br /> `operand1 < operand2` <br /> TRUE if *operand1* is less than *operand2*. | 0 &lt; 1 → t <br /> 1 &lt; 1 → f|
| `<=` | Less than or equal to. <br /> `operand1 <= operand2` <br /> TRUE if *operand1* is less than or equal to *operand2*. | 1 &lt;= 1 → t <br /> 1 &lt;= 0 → f |
| `>` | Greater than. <br /> `operand1 > operand2` <br /> TRUE if *operand1* is greater than *operand2*. | 1 &gt; 0 → t <br /> 1 &gt; 1 → f |
| `>=` | Greater than or equal to. <br /> `operand1 >= operand2` <br /> TRUE if *operand1* is greater than or equal to *operand2*. | 1 &gt;= 1 → t <br /> 0 &gt;= 1 → f |
| `IS DISTINCT FROM` | Equal (null comparible). <br /> `operand1 IS DISTINCT FROM operand2` <br /> TRUE if *operand1* is not equal to *operand2*. | 1 IS DISTINCT FROM NULL → t <br /> 1 IS DISTINCT FROM 1 → f  |
| `IS NOT DISTINCT FROM` | Not equal (null comparible). <br /> `operand1 IS NOT DISTINCT FROM operand2` <br /> TRUE if *operand1* is equal to *operand2*. | 1 IS NOT DISTINCT FROM NULL → f <br /> |
| `BETWEEN ... AND ...` | Between (inclusive range). <br /> `operand BETWEEN min AND max` <br /> TRUE if the operand is greater than or equal to *min* and less than or equal to *max*. | 1 BETWEEN 0 AND 1 → t <br /> 'c' BETWEEN 'a' AND 'b' → f |
| `NOT BETWEEN ... AND ...` | Not between (inclusive range). <br /> `operand NOT BETWEEN min AND max` <br /> TRUE if the operand is less than *min* and greater than *max*. | 1 NOT BETWEEN 0 AND 1 → f |
| `IN()` | Whether a value is equal to any of the values you specify. <br /> `operand IN (value,...)` <br /> TRUE if the operand is equal to one of the specified expressions/values. | 1 IN (0,1,2,3) → t <br /> 'a' IN ('ab','b','c','d') → f|
| `NOT IN()` | Whether a value is not equal to any of the values you specify. <br /> `operand NOT IN (value,...)` <br /> TRUE if the operand is not equal to any specified expressions/values. | 1 NOT IN (0,1,2,3) → f |
| `IS TRUE` | Whether a boolean expression is true. <br /> `boolean IS TRUE` <br /> | true IS TRUE → t <br /> null::boolean IS TRUE → f |
| `IS NOT TRUE` | Whether a boolean expression is false or unknown. <br /> `boolean IS TRUE` <br /> | true IS NOT TRUE → f <br /> null::boolean IS NOT TRUE → t |
| `IS FALSE` | Whether a boolean expression is false. <br /> `boolean IS FALSE` <br /> | true IS FALSE → f <br /> null::boolean IS FALSE → f |
| `IS NOT FALSE` | Whether a boolean expression is true or unknown. <br /> `boolean IS NOT FALSE` <br /> | true IS NOT FALSE → t <br /> null::boolean IS NOT FALSE → t |
| IS [NOT] NULL | Text | *** IS NULL causes a crash. Should we show this to users?  |

## Conditional expressions

* CASE WHEN ... THEN ... [ ELSE ... ] returns the value of first true branch
* COALESCE(value [, ...]) returns the first non-null value
* NULLIF(value1, value2) returns null if value1 == value2, otherwise returns value1

## Arithmetic operators

| Operator | Expression & Description | Example |
| ----------- | ----------- | ----------- |
| `+` | Addition. <br /> `operand1 + operand2` <br /> | 1 + 2 → 3 |
| `-` | Subtraction. <br /> `operand1 - operand2` <br /> | 1 - 2 → -1 |
| `-` | Negation. <br /> `- operand` <br /> | - (-1) → 1 |
| `*` | Multiplication. <br /> `operand1 * operand2` <br /> | 2 * 3 → 6 |
| `/` | Division (results are truncated for integers). <br /> `operand1 / operand2` <br /> | 3 / 2 → 1 <br /> 3.0 / 2 → 1.5 <br />  3 / 1.8 → 1.666... |
| `%` | Remainder (valid for smallint/int/bigint/numeric). <br /> `operand1 * operand2` <br /> | 3 % 2 → 1 |


## Bit string operators

| Operator | Expression & Description | Example |
| ----------- | ----------- | ----------- |
| `~` | Bitwise not. <br /> `~ operand` <br /> | ~ 1 → -2 |
| `&` | Bitwise and. <br /> `operand1 & operand2` <br /> | 3 &amp; 5 → 1 |
| &#124; | Bitwise or. <br /> operand1 &#124; operand2 <br /> | 3 &#124; 5 → 7 |
| `#` | Bitwise xor. <br /> `operand1 # operand2` <br /> | 3 &num; 5 → 6 |
| `<<` | Bitwise left shift. <br /> `operand1 << operand2` <br /> | 1 &lt;&lt; 2 → 4 |
| `<<` | Bitwise right shift. <br /> `operand1 >> operand2` <br /> | 4 &lt;&lt; 2 → 1 |

## Mathematical functions

| Function | Description | Example |
| ----------- | ----------- | ----------- | 
| `ABS (x)` | Returns the absolute value of *x*. | ABS(-3) → 3 |
| `ROUND (x numeric, y int)` → numeric | Rounds *x* to *y* decimal places. *y* cannot be negative. | ROUND(1.23559, 2) → 1.24 |
| `ROUND (numeric)` → numeric <br /> `ROUND (double precision)` → double precision | Rounds to nearest integer. | ROUND(1.23559) → 1 |
| `FLOOR (numeric)` → numeric <br /> `FLOOR (double precision)` → double precision | Returns the nearest integer less than or equal to the argument. | FLOOR(1.23559) → 1 <br /> FLOOR(-1.23559) → -2 |
| `CEIL (numeric)` → numeric <br /> `FLOOR (double precision)` → double precision | Returns the nearest integer greater than or equal to the argument. | CEIL(1.23559) → 2 <br /> CEIL(-1.23559) → -1 |


## Aggregation functions

|Function|Argument Type|Return Type|
|---|---|---|
|`MIN()`|smallint, int, bigint, numeric, real, double precision, varchar|Same as argument type|
|`MAX()`|smallint, int, bigint, numeric, real, double precision, varchar|Same as argument type|
|`SUM()`|smallint, int, bigint, numeric, real, double precision|bigint for smallint  or int arguments, numeric for bigint arguments, otherwise the same as the argument data type| 
|`COUNT()`|bool, smallint, int, bigint, numeric, real, double precision, varchar|bigint|
|`AVG()`|	smallint, int, bigint, numeric, real, double precision|numeric for integer arguments; double precision for float point arguments|

## String functions

|Function|Description|Example|
|---|---|---|
|`REPLACE (string varchar, from varchar, to varchar)` → varchar|Replaces all occurrences in string of substring from with substring to.|`REPLACE('abcdefabcdef', 'cd', 'XX')` → `abXXefabXXef`|
|`TRIM (string varchar)` → varchar|Removes the longest string containing only spaces from the start and end of string.|`TRIM(' cake   ')` → `cake`|
|`LTRIM (string varchar)` → varchar|Removes the longest string containing only spaces from the start of string.|`LTRIM('   cake')` → `cake`|
|`RTRIM (string varchar) `→ varchar|Removes the longest string containing only spaces from the end of string|`RTRIM('cake   ')` → `cake`|
|`SUBSTR (string varchar, start integer [, count integer ])` → varchar|Extracts the substring of string starting at the start-th character, and extending for count characters if that is specified.| `SUBSTR('alphabet', 3)` → `phabet`; <br /> `SUBSTR('alphabet', 3, 2)` → `ph`|
|`UPPER (varchar)` → varchar|Converts the string to all upper case.|`UPPER('tom')` → `TOM`|
|`LOWER (varchar)` → varchar|Converts the string to all lower case.|`LOWER('TOM')` → `tom`|
|`POSITION (string varchar, substring varchar)` → integer	|Returns first starting index of the specified substring within string, or zero if it is not present.|`POSITION('high', 'ig')` → `2`|
|`LENGTH (varchar)` → integer|Returns the number of characters in the string.|`LENGTH('jose')` → `4`|
|`CONCAT_WS (sep varchar, val1 any [, val2 any [, ...] ])` → varchar | Concatenates strings with a separator. The first argument is used as the separator, and should not be `NULL`. Other `NULL` arguments are ignored. | `CONCAT_WS(',', 'abcde', 2, NULL, 22)` → `abcde,2,22` |
|`SPLIT_PART (string varchar, delimiter varchar, n int)` → varchar | Splits string at occurrences of delimiter and returns the n'th field (counting from one), or when n is negative, returns the \|n\|'th-from-last field. When n is zero, returns a `InvalidParameterValue` error. When the input delimiter is an empty string, returns the input string if querying the first or last field. Otherwise, returns an empty string. | `SPLIT_PART('abc~@~def~@~ghi', '~@~', 2)` → `def` |


## String matching operators

```sql
string NOT LIKE pattern
string LIKE pattern
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




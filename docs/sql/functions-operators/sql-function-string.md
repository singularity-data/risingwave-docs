---
id: sql-function-string
slug: /sql-function-string
title: String functions and operators
---


## String functions

|Function|Description|Example|
|---|---|---|
|REPLACE (string varchar, from varchar, to varchar) → varchar|Replaces all occurrences in string of substring from with substring to.|`REPLACE('abcdefabcdef', 'cd', 'XX')` → `abXXefabXXef`|
|TRIM (string varchar) → varchar|Removes the longest string containing only spaces from the start and end of string.|`TRIM(' cake   ')` → `cake`|
|LTRIM (string varchar) → varchar|Removes the longest string containing only spaces from the start of string.|`LTRIM('   cake')` → `cake`|
|RTRIM (string varchar) → varchar|Removes the longest string containing only spaces from the end of string|`RTRIM('cake   ')` → `cake`|
|SUBSTR (string varchar, start integer [, count integer ]) → varchar|Extracts the substring of string starting at the start-th character, and extending for count characters if that is specified.| `SUBSTR('alphabet', 3)` → `phabet`; <br /> `SUBSTR('alphabet', 3, 2)` → `ph`|
|UPPER (varchar) → varchar|Converts the string to all upper case.|`UPPER('tom')` → `TOM`|
|LOWER (varchar) → varchar|Converts the string to all lower case.|`LOWER('TOM')` → `tom`|
|POSITION (string varchar, substring varchar) → integer	|Returns first starting index of the specified substring within string, or zero if it is not present.|`POSITION('high', 'ig')` → `2`|
|LENGTH (varchar) → integer|Returns the number of characters in the string.|`LENGTH('jose')` → `4`|
|CONCAT_WS (sep varchar, val1 any [, val2 any [, ...] ]) → varchar | Concatenates strings with a separator. The first argument is used as the separator, and should not be NULL. Other NULL arguments are ignored. | `CONCAT_WS(',', 'abcde', 2, NULL, 22)` → `abcde,2,22` |
|SPLIT_PART (string varchar, delimiter varchar, n int) → varchar | Splits string at occurrences of delimiter and returns the n'th field (counting from one), or when n is negative, returns the \|n\|'th-from-last field. When n is zero, returns a 'InvalidParameterValue' error. When the input delimiter is an empty string, returns the input string if querying the first or last field. Otherwise, returns an empty string. | `SPLIT_PART('abc~@~def~@~ghi', '~@~', 2)` → `def` |


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


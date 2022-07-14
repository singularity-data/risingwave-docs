---
id: sql-function-logical
slug: /sql-function-logical
title: Logical operators
---



| Operator | Expression & Description |
| ----------- | ----------- | 
| AND | `boolean1 AND boolean2` <br /> Logical AND. <br />  TRUE if both *boolean1* and *boolean2* are TRUE. |
| OR | `boolean1 OR boolean2` <br /> Logical OR. <br /> TRUE if either *boolean1* or *boolean2* is TRUE. |
| NOT | `NOT boolean` <br /> Negates value. <br /> |

**Example**

| NOT a | a | b | a AND b | a OR b |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| FALSE | TRUE | TRUE | TRUE | TRUE |
| FALSE | TRUE | FALSE | FALSE | TRUE |
| FALSE | TRUE | NULL | NULL | TRUE |
| TRUE | FALSE | FALSE | FALSE | FALSE |
| TRUE | FALSE | NULL | FALSE | NULL |
| NULL | NULL | NULL | NULL | NULL |


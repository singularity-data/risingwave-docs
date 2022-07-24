---
id: create-source-kinesis
title: Kinesis
description: Connect RisingWave to a Kinesis.
slug: /create-source-kinesis
---

Use the SQL statement below to connect RisingWave to Kinesis Data Streams.

## Syntax

```sql
CREATE [ MATERIALIZED ] SOURCE [ IF NOT EXISTS ] source_name (
   column_name data_type, ...
) 
WITH (
   connector='kinesis',
   field_name='value', ...
) 
ROW FORMAT JSON | PROTOBUF MESSAGE 'main_message';
```
### `WITH` options

|Field|	Default|	Type|	Description|	Required?|
|---|---|---|---|---|
|kinesis.stream.name	|None	|String|	The stream name identifies the stream.	|True|
|kinesis.stream.region	|None	|String|	AWS service region. For example, US East (N. Virginia).	|True|
|kinesis.endpoint	|None	|String	|The URL of the entry point for the AWS Kinesis service.| False|
|kinesis.credentials.access	|None	|String	|Indicates the Access key ID of AWS. Must appear in pairs with kinesis.credentials.secret.	|False|
|kinesis.credentials.secret	|None	|String	|Indicates the secret access key of AWS. Must appear in pairs with kinesis.credentials.access.	|False|
|kinesis.credentials.session_token	|None	|String	|The session token associated with the credentials. Temporary Session Credentials.	|False|
|kinesis.assumerole.arn	|None	|String |The Amazon Resource Name (ARN) of the role to assume.		|False|
|kinesis.assumerole.external_id	|None	|String	|The [external id](https://aws.amazon.com/blogs/security/how-to-use-external-id-when-granting-access-to-your-aws-resources/) used to authorize access to third-party resources.	|False|

## Example
Here is an example of connecting RisingWave to Kinesis Data Streams to read data from individual streams.

```sql
CREATE [MATERIALIZED] SOURCE [IF NOT EXISTS] source_name (
   column1 varchar,
   column2 integer,
) 
WITH (
   connector='kinesis',
   kinesis.stream.name='kafka',
   kinesis.stream.region='user_test_topic',
   kinesis.endpoint='172.10.1.1:9090,172.10.1.2:9090',
   kinesis.credentials.session_token='AQoEXAMPLEH4aoAH0gNCAPyJxz4BlCFFxWNE1OPTgk5TthT+FvwqnKwRcOIfrRh3c/L To6UDdyJwOOvEVPvLXCrrrUtdnniCEXAMPLE/IvU1dYUg2RVAJBanLiHb4IgRmpRV3z rkuWJOgQs8IZZaIv2BXIa2R4OlgkBN9bkUDNCJiBeb/AXlzBBko7b15fjrBs2+cTQtp Z3CYWFXG8C5zqx37wnOE49mRl/+OtkIKGO7fAE',
   kinesis.assumerole.arn='arn:aws-cn:iam::602389639824:role/demo_role',
   kinesis.assumerole.external_id='demo_external_id'
) 
ROW FORMAT JSON;
```

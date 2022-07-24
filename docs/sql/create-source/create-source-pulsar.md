---
id: create-source-pulsar
title: Pulsar
description: Connect RisingWave to a Pulsa broker.
slug: /create-source-pulsar
---


Use the SQL statement below to connect RisingWave to a Pulsa broker.

## Syntax

```sql
CREATE [ MATERIALIZED ] SOURCE [ IF NOT EXISTS ] source_name (
   column_name data_type, ...
)
WITH (
   connector='pulsar',
   field_name='value', ...
)
ROW FORMAT JSON | PROTOBUF MESSAGE 'main_message';
```
### `WITH` options

|Field|	Default|	Type|	Description|	Required?|
|---|---|---|---|---|
|pulsar.topic	|None	|String	|Address of the Pulsar topic. One source can only correspond to one topic.	|True|
|pulsar.service.url	|None	|String	|Address of the Pulsar service	|True|
|pulsar.admin.url	|None	|String	|Address of the Pulsar admin	|True|
|pulsar.scan.startup.mode	|earliest	|String	|The Pulsar consumer starts consuming data from the commit offset. This includes two values: `'earliest'` and `'latest'`.	|False|
|pulsar.time.offset	|None	|Int64	|Specify the offset in seconds from a certain point of time.	|False|

## Example
Here is an example of connecting RisingWave to a Pulsar broker to read data from individual topics.

```sql
CREATE MATERIALIZED SOURCE IF NOT EXISTS source_abc (
   column1 string,
   column2 integer,
)
WITH (
   connector='pulsar',
   pulsar.topic='demo_topic',
   pulsar.service.url='pulsar://localhost:6650/',
   pulsar.admin.url='http://localhost:8080',
   pulsar.scan.startup.mode='latest',
   pulsar.time.offset='140000000'
)
ROW FORMAT PROTOBUF MESSAGE 'FooMessage'
ROW SCHEMA LOCATION 'https://demo_bucket_name.s3-us-west-2.amazonaws.com/demo.proto';
```

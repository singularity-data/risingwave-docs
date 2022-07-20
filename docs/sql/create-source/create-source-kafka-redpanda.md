---
id: create-source-kafka-redpanda
title: Kafka & Redpanda
description: Connect RisingWave to a Kafka/Redpanda broker.
slug: /create-source-kafka-redpanda
---

Use the SQL statement below to connect RisingWave to a Kafka/Redpanda broker.

## Syntax

```sql
CREATE [MATERIALIZED] SOURCE [IF NOT EXISTS] source_name (
   column_name data_type,...
)
WITH (
   connector='kafka',
   field_name='value', ...
)
ROW FORMAT JSON | PROTOBUF MESSAGE 'main_message'
[ROW SCHEMA LOCATION 's3://path'];
```
### `WITH` options

|Field|	Default|	Type|	Description|	Required?|
|---|---|---|---|---|
|kafka.topic|None|String|Address of the Kafka topic. One source can only correspond to one topic.|True
|kafka.brokers	|None	|String	|Address of the Kafka broker. Format: `'ip:port,ip:port'`.	|True|
|kafka.scan.startup.mode	|earliest	|String	|The Kafka consumer starts consuming data from the commit offset. This includes two values: `'earliest'` and `'latest'`.	|False
|kafka.time.offset	|None	|Int64	|Specify the offset in seconds from a certain point of time.	|False|
|kafka.consumer.group	|None	|String	|Name of the Kafka consumer group	|True|

## Example

Here is an example of connecting RisingWave to a Kafka broker to read data from individual topics.

```sql
CREATE MATERIALIZED SOURCE IF NOT EXISTS source_abc (
   column1 varchar,
   column2 integer,
)
WITH (
   connector='kafka',
   kafka.topic='demo_topic',
   kafka.brokers='172.10.1.1:9090,172.10.1.2:9090',
   kafka.scan.startup.mode='latest',
   kafka.time.offset='140000000',
   kafka.consumer.group='demo_consumer_name'
)
ROW FORMAT JSON;
```

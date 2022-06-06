---
id: sources
title: Sources
description: Supported data sources and how to connect RisingWave to the sources.
slug: /sources
---

Sources are resources that RisingWave can read data from. You use [`CREATE SOURCE`](#connect-to-a-source) to establish the connection to a source. Once a connection is established, RisingWave will start to process the received data.

## Supported sources

Please see below for the streaming sources that RisingWave supports. 

| Source | Version | Data format | Materialized? | Limitations |
|---------|---------|---------|---------|---------|
|Kafka|3.1.0 or later versions	|JSON, protobuf|	Materialized & non-materialized|-
|Redpanda|Latest|JSON, protobuf	|Materialized & non-materialized|	-
|Pulsar|	2.8.0 or later versions|	JSON, protobuf|	Materialized & non-materialized|	-
|Kinesis|	Latest|	JSON, protobuf|	Materialized & non-materialized|	-
|PostgreSQL CDC|	10, 11, 12, 13, 14|	JSON|	Materialized only|	Must have primary key|
|MySQL CDC|	5.7, 8.0|	JSON|	Materialized only|	Must have primary key|



## Connect to a source

`CREATE SOURCE` connects RisingWave to a data source. Click the tabs to see the syntax, options, and sample queries for the supported sources.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<Tabs>
  <TabItem value="kafka&redpanda" label="Kafka & Redpanda" default>

You can use the SQL statement below to connect RisingWave to a Kafka/Redpanda broker.

#### Syntax

```sql
CREATE [MATERIALIZED] SOURCE [IF NOT EXISTS] source_name (
   column_name data_type,...
)
WITH (
   'connector'='kafka',
   'field_name'='value', ...
)
ROW FORMAT JSON | PROTOBUF MESSAGE 'main_message'
[ROW SCHEMA LOCATION 's3://path'];
```
#### `WITH` options

|Field|	Default|	Type|	Description|	Required?|
|---|---|---|---|---|
|kafka.topic|None|String|Address of the Kafka topic. One source can only correspond to one topic.|True
|kafka.brokers	|None	|String	|Address of the Kafka broker. Format: `'ip:port,ip:port'`.	|True|
|kafka.scan.startup.mode	|earliest	|String	|The Kafka consumer starts consuming data from the commit offset. This includes two values: `'earliest'` and `'latest'`.	|False
|kafka.time.offset	|None	|Int64	|Specify the offset in seconds from a certain point of time.	|False|
|kafka.consumer.group	|None	|String	|Name of the Kafka consumer group	|True|

#### Example

Here is an example of connecting RisingWave to a Kafka broker to read data from individual topics.

```sql
CREATE MATERIALIZED SOURCE IF NOT EXISTS source_abc (
   column1 varchar,
   column2 integer,
)
WITH (
   'connector'='kafka',
   'kafka.topic'='demo_topic',
   'kafka.brokers'='172.10.1.1:9090,172.10.1.2:9090',
   'kafka.scan.startup.mode'='latest',
   'kafka.time.offset'='140000000',
   'kafka.consumer.group'='demo_consumer_name'
)
ROW FORMAT JSON;
```
  </TabItem>

  <TabItem value="pulsar" label="Pulsar">

You can use the SQL statement below to connect RisingWave to a Pulsa broker.

#### Syntax

```sql
CREATE [MATERIALIZED] SOURCE [IF NOT EXISTS] source_name (
   column_name data_type, ...
)
WITH (
   'connector'='pulsar',
   'field_name'='value', ...
)
ROW FORMAT JSON | PROTOBUF MESSAGE 'main_message';
```
#### `WITH` options

|Field|	Default|	Type|	Description|	Required?|
|---|---|---|---|---|
|pulsar.topic	|None	|String	|Address of the Pulsar topic. One source can only correspond to one topic.	|True|
|pulsar.service.url	|None	|String	|Address of the Pulsar service	|True|
|pulsar.admin.url	|None	|String	|Address of the Pulsar admin	|True|
|pulsar.scan.startup.mode	|earliest	|String	|The Pulsar consumer starts consuming data from the commit offset. This includes two values: `'earliest'` and `'latest'`.	|False|
|pulsar.time.offset	|None	|Int64	|Specify the offset in seconds from a certain point of time.	|False|

#### Example
Here is an example of connecting RisingWave to a Pulsar broker to read data from individual topics.

```sql
CREATE MATERIALIZED SOURCE IF NOT EXISTS source_abc (
   column1 string,
   column2 integer,
)
WITH (
   'connector'='pulsar',
   'pulsar.topic'='demo_topic',
   'pulsar.service.url'='pulsar://localhost:6650/',
   'pulsar.admin.url'='http://localhost:8080',
   'pulsar.scan.startup.mode'='latest',
   'pulsar.time.offset'='140000000'
)
ROW FORMAT PROTOBUF MESSAGE 'FooMessage'
ROW SCHEMA LOCATION 'https://demo_bucket_name.s3-us-west-2.amazonaws.com/demo.proto';
```
  </TabItem>

  <TabItem value="kinesis" label="Kinesis">
   
You can use the SQL statement below to connect RisingWave to Kinesis Data Streams.

#### Syntax

```sql
CREATE [MATERIALIZED] SOURCE [IF NOT EXISTS] source_name (
   column_name data_type, ...
) 
WITH (
   'connector'='kinesis',
   'field_name'='value', ...
) 
ROW FORMAT JSON | PROTOBUF MESSAGE 'main_message';
```
#### `WITH` options

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

#### Example
Here is an example of connecting RisingWave to Kinesis Data Streams to read data from individual streams.

```sql
CREATE [MATERIALIZED] SOURCE [IF NOT EXISTS] source_name (
   column1 varchar,
   column2 integer,
) 
WITH (
   'connector'='kinesis',
   'kinesis.stream.name'='kafka',
   'kinesis.stream.region'='user_test_topic',
   'kinesis.endpoint'='172.10.1.1:9090,172.10.1.2:9090',
   'kinesis.credentials.session_token'='AQoEXAMPLEH4aoAH0gNCAPyJxz4BlCFFxWNE1OPTgk5TthT+FvwqnKwRcOIfrRh3c/L To6UDdyJwOOvEVPvLXCrrrUtdnniCEXAMPLE/IvU1dYUg2RVAJBanLiHb4IgRmpRV3z rkuWJOgQs8IZZaIv2BXIa2R4OlgkBN9bkUDNCJiBeb/AXlzBBko7b15fjrBs2+cTQtp Z3CYWFXG8C5zqx37wnOE49mRl/+OtkIKGO7fAE',
   'kinesis.assumerole.arn'='arn:aws-cn:iam::602389639824:role/demo_role',
   'kinesis.assumerole.external_id'='demo_external_id'
) 
ROW FORMAT JSON;
```
  </TabItem>

 <TabItem value="CDC" label="CDC">
   
You can use the SQL statement below to connect RisingWave to a CDC source.

:::note

Currently, RisingWave only supports materialized CDC sources with primary keys.

:::

#### Syntax

```sql
CREATE MATERIALIZED SOURCE [IF NOT EXISTS] source_name (
   column_name data_type [PRIMARY KEY], ...
   PRIMARY KEY (column_1, column_2)
) 
WITH (
   'connector'='kafka',
   'field_name'='value', ...
) 
ROW FORMAT DEBEZIUM JSON;
```

#### `WITH` options


|Field|	Default|	Type|	Description|	Required?|
|---|---|---|---|---|
|kafka.topic|None|String|Address of the Kafka topic. One source can only correspond to one topic.|True
|kafka.brokers	|None	|String	|Address of the Kafka broker. Format: `'ip:port,ip:port'`.	|True|
|kafka.scan.startup.mode	|earliest	|String	|The Kafka consumer starts consuming data from the commit offset. This includes two values: `'earliest'` and `'latest'`.	|False
|kafka.time.offset	|None	|Int64	|Specify the offset in seconds from a certain point of time.	|False|
|kafka.consumer.group	|None	|String	|Name of the Kafka consumer group	|True|


#### Example
Here is an example of connecting RisingWave to a CDC service to read data from individual streams.

```sql
CREATE MATERIALIZED SOURCE [IF NOT EXISTS] source_name (
   column1 varchar,
   column2 integer,
   PRIMARY KEY (column1)
) 
WITH (
   'connector'='kafka',
   'kafka.topic'='user_test_topic',
   'kafka.brokers'='172.10.1.1:9090,172.10.1.2:9090',
   'kafka.scan.startup.mode'='earliest',
   'kafka.consumer.group'='demo_consumer_name'
) 
ROW FORMAT DEBEZIUM JSON;
```
  </TabItem>

</Tabs>
